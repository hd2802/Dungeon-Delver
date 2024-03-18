"use client"
import "./styles/CharacterSheet.css";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Skills from "./Skills";
import Spells from "./Spells";
import PointsBuy from "./PointsBuy";
import { GetIfCharacterAlreadyExists, IDBCharacterData } from "./Server"
import { IDBAbilityScores } from "./ability-scores"
import classData, { ClassData } from "./classData"
import raceData, { RaceData, IDBRaceData} from "./raceData"
import { StoreCharacterData, GetIsValidSession } from "./Server"

export default function CharacterSheet() {
  const [page, setPage] = useState("intro");

  const [selectedClass, setSelectedClass] = useState<null | string>(null);
  const [selectedRace, setSelectedRace] = useState<null | RaceData>(null);

  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedSpells, setSelectedSpells] = useState<string[]>([]);

  const [abilityScores, setAbilityScores] = useState<{ [key: string]: number }>({
    Strength: 8,
    Dexterity: 8,
    Constitution: 8,
    Intelligence: 8,
    Wisdom: 8,
    Charisma: 8
  });

  let modifiedAbilityScores = { ...abilityScores };

  const changePage = (page: string) => {
    setPage(page);
  };

  const changeRace = (race: RaceData) => {
    setSelectedRace(race);
  };

  const changeClass = (cls: string) => {
    setSelectedClass(cls);
  };

  const handleAbilityScoreChange = (ability: string, value: number) => {
    setAbilityScores(prevScores => ({
      ...prevScores,
      [ability]: value
    }));
  };

  const GetIsLoggedIn = async () => {
    let isLoggedInLabel = document.getElementById("isLoggedInLabel") as HTMLLabelElement;
    const currSessionID = sessionStorage.getItem("sessionID");

    if (currSessionID == null)
      return;

    if (await !GetIsValidSession(currSessionID))
      return;
    
    if (isLoggedInLabel != null)
      isLoggedInLabel.textContent = "You are logged in and can save your character.";
  }

  useEffect(() => {
    GetIsLoggedIn();
  }, [])

  const Encode = () : IDBCharacterData => {
    const characterName = (document.getElementById("characterNameInput") as HTMLInputElement).textContent; 
    const DBAbilityScores = modifiedAbilityScores;
    
    const DBRaceData : IDBRaceData = {
      name: selectedRace ? selectedRace.name : "",
      description: selectedRace ? selectedRace.description : "",
      traits: selectedRace ? selectedRace.traits : "",
      abilityScoreModifiers: selectedRace ? selectedRace.abilityScoreModifiers : {"" : -1},
      imageName:"" ,
      altText:""
    };
    
    const DBAbilityData : IDBAbilityScores = {
      strength: DBAbilityScores["Strength"],
      dexterity: DBAbilityScores["Dexterity"],
      constitution: DBAbilityScores["Constitution"],
      intelligence: DBAbilityScores["Intelligence"],
      wisdom: DBAbilityScores["Widsom"],
      charisma: DBAbilityScores["Charisma"],
    };

    const result : IDBCharacterData = {
      id_character_name: "",
      id: -1,
      character_name: characterName ? characterName : "",
      class_name: selectedClass ? selectedClass : "",
      race_data: JSON.stringify(DBRaceData),
      skills_data: JSON.stringify(selectedSkills),
      spells_data: JSON.stringify(selectedSpells),
      ability_data: JSON.stringify(DBAbilityData),
    };
    
    return result;
  }

  const HandleSaveCharacterButtonPress = async () => {
    const currSessionID = sessionStorage.getItem("sessionID");
    if (currSessionID == null)
      return;

    if (await !GetIsValidSession(currSessionID))
      return;

    let saveCharacterInfoLabel = document.getElementById("saveCharacterInfoLabel") as HTMLLabelElement;
    let characterData : IDBCharacterData = Encode();
    characterData.character_name = (document.getElementById("characterNameInput") as HTMLInputElement).value || "";

    if (characterData.character_name === "")
    {
      let saveCharacterInfoLabel = document.getElementById("saveCharacterInfoLabel") as HTMLLabelElement;
      saveCharacterInfoLabel.textContent = "Cannot save character! Character must have name!";
      return;
    }
    
    const doesCharacterAlreadyExists = await GetIfCharacterAlreadyExists(characterData.character_name, currSessionID);
    if (doesCharacterAlreadyExists != 1)
    {
      saveCharacterInfoLabel.textContent = "Cannot save character! Character with entered name already exists!";
      return;
    }

    const result = await StoreCharacterData(currSessionID, characterData);
    if (result === "")
      saveCharacterInfoLabel.textContent = "Character saved sucessfully!";
    else
      saveCharacterInfoLabel.textContent = result;
  }

  const renderPage = () => {
    switch (page) {
      case "intro":
        return (
          <div>
            <h1> Character Creator </h1>
            <button onClick={() => changePage("race")}>
              Next
            </button> <br/>
            <label id="isLoggedInLabel"> You're not logged in, and won't be able to save your character.  </label>
            
          </div>
        )

      case "race":
        return (
          <div>
            <h1>Choose a Race</h1>
            <p>
              Your character's race determines important information such as their appearance, outlook on life and their culture.
              The race of your character is important for flavour - determining who your character is - rather than how the game is played.
            </p>
            {selectedRace !== null && (
              <div className="display-race-div">
                Your race: {selectedRace.name}
                <button onClick={() => changePage("class")}>Next</button>
              </div>
            )}
            <div className="character-container">
            {raceData.map((raceItem: RaceData, index: number) => (
          <React.Fragment key={raceItem.name}>
            <div className="character-card">
              <div className="card-info">
                <h3>{raceItem.name}</h3>
                <p>
                  {raceItem.description}
                  <br />
                  <br />
                  <b>Racial Traits: </b> {raceItem.traits}
                </p>
                <button onClick={() => setSelectedRace(raceItem)}>Select</button>
              </div>
              <Image
                src={raceItem.image}
                alt={raceItem.altText}
                width={150}
              />
            </div>
            {(index + 1) % 3 === 0 && index !== classData.length - 1 && <div className="row-divider" />}
          </React.Fragment>
        ))}
        </div>
      </div>
      )

      case "class":
        return (
          <div>
            <h1>Choose a Class</h1>
            <p>
              Your character's class determines their adventuring profession and
              how they choose to adventure. Some character's are casters -
              meaning that they posess magical abilities and can cast spells,
              whilst others aren't - meaning that they are more efficient in
              combat of other kinds.
            </p>
            {selectedClass !== null && (
              <div className="display-race-div">
                Your class: {selectedClass}
                <button onClick={() => changePage("details")}>Next</button>
              </div>
            )}
            <div className="character-container">
            {classData.map((classItem: ClassData, index: number) => (
          <React.Fragment key={classItem.name}>
            <div className="character-card">
              <div className="card-info">
                <h3>{classItem.name}</h3>
                <p>
                  {classItem.description}
                  <br />
                  <br />
                  <b>Hit Die:</b> {classItem.hitDie}
                  <br />
                  <b>Primary Ability:</b> {classItem.primaryAbility}
                  <br />
                  <b>Saves:</b> {classItem.saves}
                </p>
                <button className="cc-button">
                  <Link className="cc-button-link" href={classItem.link}>
                    More Information
                  </Link>
                </button>
                <button onClick={() => setSelectedClass(classItem.name)}>Select</button>
              </div>
              <Image
                src={classItem.image}
                alt={classItem.altText}
                width={150}
              />
            </div>
            {(index + 1) % 3 === 0 && index !== classData.length - 1 && <div className="row-divider" />}
          </React.Fragment>
        ))}
        </div>
      </div>
      )

      case "details":
        return (
          <div>
            {(selectedClass && selectedRace) && (
              <div className="detail-selector-div">
                <Skills
                  selectedClass={selectedClass}
                  selectedSkills={selectedSkills}
                  setSelectedSkills={setSelectedSkills}
                />
                <Spells 
                  selectedClass={selectedClass}
                  selectedSpells={selectedSpells}
                  setSelectedSpells={setSelectedSpells}
                />
              </div>
            )}
            <button id="detail-next-button" onClick={() => changePage("points-buy")}>
              Next
            </button>
          </div>
        )
      
      case "points-buy":
        if (selectedRace)
        {
          for(const ability in selectedRace.abilityScoreModifiers) 
          {
            modifiedAbilityScores[ability] += selectedRace.abilityScoreModifiers[ability];
          }
        }
        return (
          <div id="points-buy-div">
            <h1>Ability Points</h1>
            <p>
              You can adjust and modify your character's key ability scores here.
            </p>
            <div id="points-buy-section">
            <PointsBuy 
              abilityScores={modifiedAbilityScores}
              onAbilityScoreChange={handleAbilityScoreChange}
            />
            </div>
            <button id="detail-next-button" onClick={() => changePage("summary")}>
              Next
            </button>
          </div>
        )
      
      case "summary":
        return (
          <div>
            <h1>Character Summary</h1>
            <h2>Race: {selectedRace ? selectedRace.name : "Not selected"}</h2>
            <p>Description: {selectedRace ? selectedRace.description : ""}</p>
            <p>Racial Traits: {selectedRace ? selectedRace.traits : ""}</p>
            <h2>Class: {selectedClass ? selectedClass : "Not selected"}</h2>
            <p>Selected skills: {selectedSkills.join(", ")}</p>
            {selectedSpells.length !== 0 && (
                <p>Selected spells: {selectedSpells.join(", ")}</p>
            )}
            <h2>Ability Scores and Modifiers</h2>
            <ul>
                {Object.entries(abilityScores).map(([ability, score]) => (
                    <li key={ability}>
                        <strong>{ability}:</strong> {score}
                        {selectedRace && selectedRace.abilityScoreModifiers[ability] &&
                            <span> (Racial modifier: {selectedRace.abilityScoreModifiers[ability]})</span>
                        }
                    </li>
                ))}
            </ul>
            <form action="">
              <div id="characterSaveDiv">
                <label id="characterNameLabel" htmlFor="characterNameInput"> Character name: </label>
                <input id="characterNameInput" type="text"></input>
                <button id="saveCharacterButton" type="button" className="" onClick={HandleSaveCharacterButtonPress}> Save character </button><br/>
                <label id="saveCharacterInfoLabel"> </label>
              </div>
            </form>
        </div>
        )

      default:
        return <div>Wrong turn adventurer!</div>;
    }
  };

  return (
    <div>
      {renderPage()}
    </div>
  );
}
