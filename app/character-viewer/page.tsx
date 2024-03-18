"use client"
import "../components/styles/CharacterSheet.css";
import React, { useEffect, useState } from "react";
import { GetIfCharacterAlreadyExists, IDBCharacterData } from "../components/Server"
import raceData, { RaceData, IDBRaceData} from "../components/raceData"
import { StoreCharacterData, GetIsValidSession, GetCharacterData } from "../components/Server"

export default function CharacterSheetViewer() {
    
    const [selectedClass, setSelectedClass] = useState<null | string>(null);
    const [selectedRace, setSelectedRace] = useState<null | RaceData>(null);
  
    const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
    const [selectedSpells, setSelectedSpells] = useState<string[]>([]);
  
    const [characters, setCharacters] = useState<string[]>([]);
    let characterData : IDBCharacterData[] = [];

    const [abilityScores, setAbilityScores] = useState<{ [key: string]: number }>({
      Strength: 8,
      Dexterity: 8,
      Constitution: 8,
      Intelligence: 8,
      Wisdom: 8,
      Charisma: 8
    });

    const addCharacters = (in_characterData : IDBCharacterData[]) => {
        for (let i = 0; i < in_characterData.length; i++)
        {
            characters.push(in_characterData[i].character_name);
        }
    }
    
    const SetupPage = async () => {
        const loginStatusLabel = document.getElementById("loginStatusLabel");
        const currSessionID = sessionStorage.getItem("sessionID");
        
        if (currSessionID == null)
            return;

        if (await !GetIsValidSession(currSessionID) && loginStatusLabel != null)
        {
            loginStatusLabel.textContent = "Could not retrieve characters: You are not logged in.";
            return;
        }

        characterData = await GetCharacterData(currSessionID);
        if (characterData.length == 0 && loginStatusLabel != null)
        {
            loginStatusLabel.textContent = "Could not retrieve characters: there are none.";
            return;
        }
        else if(loginStatusLabel != null)
            loginStatusLabel.textContent = "Characters successfully retrieved.";

        addCharacters(characterData);
    }

    const UpdateCharacterSelect = () => {
        const characterSelect = document.getElementById("characterSelect") as HTMLSelectElement;
        const statsButton = document.getElementById("statsButton") as HTMLButtonElement;
        if (characterSelect == null || statsButton == null)
            return;

        if (characterData.length == 0)
            return;
        
        characterSelect.style.visibility = "visible";
        statsButton.style.visibility = "visible";
        for (let i = 0; i < characterData.length; i++)
        {
            let tempOption = document.createElement("option");
            tempOption.value = characterData[i].character_name;
            tempOption.innerHTML = characterData[i].character_name;
            characterSelect.appendChild(tempOption);
        }
    }

    const GetCharacterStats = () => {
        const characterSelect = document.getElementById("characterSelect") as HTMLSelectElement;
        const characterStatsDiv = document.getElementById("characterStatsDiv") as HTMLDivElement;
        if (characterSelect == null || characterStatsDiv == null)
            return;

        characterStatsDiv.style.visibility = "visible";

        const raceLabel = document.getElementById("raceLabel") as HTMLHeadElement;
        const descriptionLabel = document.getElementById("descriptionLabel") as HTMLParagraphElement;
        const rTLabel = document.getElementById("rTLabel") as HTMLParagraphElement;
        const classLabel = document.getElementById("classLabel") as HTMLHeadElement;
        const sSLabel = document.getElementById("sSLabel") as HTMLParagraphElement;
        const sSPLabel = document.getElementById("sSPLabel") as HTMLParagraphElement;
        let abilityLabel = document.getElementById("abilityLabel") as HTMLUListElement;

        const selectedCharacterIndex = characterSelect.selectedIndex;
        const selectedCharacterData = characterData[selectedCharacterIndex];
        
        const tempRaceData = JSON.parse(selectedCharacterData.race_data) as RaceData;
        const tempSelectedSkills = JSON.parse(selectedCharacterData.skills_data) as string[];
        const tempSelectedSpells = JSON.parse(selectedCharacterData.spells_data) as string[];
        const tempAbilityScores = JSON.parse(selectedCharacterData.ability_data) as { [key: string]: number };

        raceLabel.textContent = "Race: " + tempRaceData.name;
        descriptionLabel.textContent = "Description: " + tempRaceData.description;
        rTLabel.textContent = "Racial Traits: " + tempRaceData.traits;
        classLabel.textContent = "Class: " + selectedCharacterData.class_name;
        sSLabel.textContent = "Selected skills: " + tempSelectedSkills.join(", ");

        if (tempSelectedSpells.length !== 0)
            sSPLabel.textContent = "Selected spells: " + tempSelectedSpells.join(", ");

        abilityLabel.innerHTML = "";
        Object.entries(tempAbilityScores).forEach(([ability, score]) => {
            const tempLI = document.createElement("li");
            tempLI.setAttribute("key", ability);
            
            const tempStrongElem = document.createElement("strong");
            tempStrongElem.textContent = ability + ": ";
            tempLI.appendChild(tempStrongElem);

            tempLI.appendChild(document.createTextNode(score.toString()));

            if (tempRaceData.abilityScoreModifiers[ability])
            {
                const tempSpanElem = document.createElement("span");
                tempSpanElem.textContent = " (Racial modifier: " + tempRaceData.abilityScoreModifiers[ability] + ")";
                tempLI.appendChild(tempSpanElem);
            }

            abilityLabel.appendChild(tempLI);
        })
    }

    useEffect(() => {
        SetupPage();
    }, [])

    const RenderPage = () => {
        return <div>
            <form action="">
                <div id="characterLoadDiv">
                    <label id="loginStatusLabel"> Characters cannot be retrieved, you are not logged in. </label>
                    <button type="button" onClick={UpdateCharacterSelect}> Display characters </button>
                </div>
            </form>
            <select id="characterSelect" className="invisible">
                {characters.map((character, index) => (
                    <li key={index}> {character} </li>
                ))}
            </select>
            <br/><button type="button" id="statsButton" className="invisible" onClick={GetCharacterStats}> Display character stats </button>
            
            <div id="characterStatsDiv" className="invisible">
                <h1>Character Summary</h1>

                <h2 id="raceLabel">Race: {selectedRace ? selectedRace.name : "Not selected"}</h2>
                <p id="descriptionLabel">Description: {selectedRace ? selectedRace.description : ""}</p>
                <p id="rTLabel">Racial Traits: {selectedRace ? selectedRace.traits : ""}</p>
                <h2 id="classLabel">Class: {selectedClass ? selectedClass : "Not selected"}</h2>
                <p id="sSLabel">Selected skills: {selectedSkills.join(", ")}</p>
                <p id="sSPLabel">Selected spells: {selectedSpells.join(", ")}</p>
                <h2>Ability Scores and Modifiers</h2>
                <ul id="abilityLabel">
                    {Object.entries(abilityScores).map(([ability, score]) => (
                        <li key={ability}>
                            <strong>{ability}:</strong> {score}
                            {selectedRace && selectedRace.abilityScoreModifiers[ability] &&
                                <span> (Racial modifier: {selectedRace.abilityScoreModifiers[ability]})</span>
                            }
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    }
    
    
    return (
        <div className="character-container-div">
            {RenderPage()}
        </div>
    )
}