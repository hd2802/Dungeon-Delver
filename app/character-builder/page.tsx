"use client"
import CharacterSheet from "../components/CharacterSheet";
import "../styles/CharacterSheetContainer.css";

export default function CharacterSheetCreator() {
    return (
        <div className="character-container-div">
            <CharacterSheet/>
        </div>
    )
}