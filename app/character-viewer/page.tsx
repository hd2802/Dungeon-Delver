"use client"
import "../components/styles/CharacterSheet.css";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Skills from "../components/Skills";
import Spells from "../components/Spells";
import PointsBuy from "../components/PointsBuy";
import { GetIfCharacterAlreadyExists, IDBCharacterData } from "../components/Server"
import { IDBAbilityScores } from "../components/ability-scores"
import classData, { ClassData } from "../components/classData"
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
            setCharacters([...characters, in_characterData[i].character_name]);
    }
    
    /*const ProcessCharacterData = async () => {
        const currSessionID = sessionStorage.getItem("sessionID") || "";

        if (currSessionID === "")
            return;

        const characterData = await GetCharacterData(currSessionID)
        if (characterData.length == 0)
            return;

        setSelectedRace();
    }*/

    const SetupPage = async () => {
        const loginStatusLabel = document.getElementById("loginStatusLabel");
        const currSessionID = sessionStorage.getItem("sessionID");
        
        if (currSessionID == null)
            return;

        characterData = await GetCharacterData(currSessionID);
        if (characterData.length == 0 && loginStatusLabel != null)
        {
            loginStatusLabel.textContent = "Could not retrieve characters: there are none."
            return;
        }

        addCharacters(characterData);
    }

    useEffect(() => {
        SetupPage();
    }, [])

    const RenderPage = () => {
        return <div>
            <label id="loginStatusLabel"> Characters cannot be retrieved, you are not logged in. </label>
            <ul>
                {characters.map((character, index) => (
                    <li key={index}> {character} </li>
                ))}
            </ul>
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
                <label id="saveCharacterInfoLabel"> </label>
                </div>
            </form>
        </div>
    }
    
    
    return (
        <div className="character-container-div">
            {RenderPage()}
        </div>
    )
}