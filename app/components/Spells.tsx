import React from "react";
import spellData from "./spellData";

const maxSpells: Record<string, Record<number, number>> = {
    "Barbarian": { 0: 0, 1: 0 },
    "Bard": { 0: 2, 1: 4 },
    "Cleric": { 0: 3, 1: 3 },
    "Druid": { 0: 2, 1: 3 },
    "Fighter": { 0: 0, 1: 0 },
    "Monk": { 0: 0, 1: 0 },
    "Paladin": { 0: 0, 1: 0 },
    "Ranger": { 0: 0, 1: 0 },
    "Rogue": { 0: 0, 1: 0 },
    "Sorcerer": { 0: 4, 1: 3 },
    "Warlock": { 0: 2, 1: 0 },
    "Wizard": { 0: 3, 1: 3 },
}


interface SpellsProps {
    selectedClass: string;
    selectedSpells: string[];
    setSelectedSpells: React.Dispatch<React.SetStateAction<string[]>>;
}

const Spells: React.FC<SpellsProps> = ({ selectedClass, selectedSpells, setSelectedSpells}) => {

    const handleSpellSelect = (spell: string) => {
        const maxCantrips = maxSpells[selectedClass][0];
        const maxFirstLevel = maxSpells[selectedClass][1];

        const currentCantrips = selectedSpells.filter(spell => spellData[selectedClass][0]);
        const currentSpells = selectedSpells.filter(spell => spellData[selectedClass][1]);

        if (currentCantrips.length > maxCantrips || currentSpells.length > maxFirstLevel)
        {
            return;
        }
        setSelectedSpells([...selectedSpells, spell]);
    };

    const handleSpellDeselect = (spell: string) => {
        setSelectedSpells(selectedSpells.filter((sp) => sp !== spell));
    }
    return (
        <div>
            {selectedSpells.length !== 0 && (
                <div>
                            <h2>{selectedClass} Spells</h2>
                            <h3>Cantrips</h3>
                            <ul>
                                {spellData[selectedClass][0].map((spell) => (
                                    <li key={spell}>
                                        <label>
                                            <input
                                                type="checkbox"
                                                checked={selectedSpells.includes(spell)}
                                                onChange={() => {
                                                    selectedSpells.includes(spell) ?
                                                        handleSpellDeselect(spell) :
                                                        handleSpellSelect(spell);
                                                }}
                                            />
                                            {spell}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                            <h3>1st Level Spells</h3>
                            <ul>
                                {spellData[selectedClass][1].map((spell) => (
                                    <li key={spell}>
                                        <label>
                                            <input
                                                type="checkbox"
                                                checked={selectedSpells.includes(spell)}
                                                onChange={() => {
                                                    selectedSpells.includes(spell) ?
                                                        handleSpellDeselect(spell) :
                                                        handleSpellSelect(spell);
                                                }}
                                            />
                                            {spell}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>
            )}
        </div>
    );
}

export default Spells;