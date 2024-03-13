import React, { useState } from 'react';

export default function Scores() {
    const [abilityScores, setAbilityScores] = useState ({
        Strength: 10,
        Dexterity: 10,
        Constitution: 10,
        Intelligence: 10,
        Wisdom: 10,
        Charisma: 10,
    });

    const handleInputChange = (ability: string, value: number) => {
        setAbilityScores((prevScores) => ({
            ...prevScores,
            [ability]:value,
        }))
    };

    const calculateModifier = (score: number) => {
        return Math.floor((score - 10) / 2);
    }

    return (
        <div>
            <h1>Ability Scores and Modifiers</h1>
            <div className="left-div-t">
                <p>
                    Each of a creature's abilities has a score, a number that defines the magnitude of that ability. 
                    An ability score is not just a measure of innate capabilities, but also encompasses a creature's training and competence in activities related to that ability.
                </p>
                <p>
                    A score of 10 or 11 is the normal human average, but adventurers and monsters alike are often a cut above average in most abilites.
                </p>
                <p>
                    Each ability has a modifier, derived from the socre and ranging from -5 (for an ability score of 1) to +10 (for a score of 30).
                    The table across shows the ability modifiers for the range of possible ability scores.
                </p>
            </div>
            <div className="right-div-t">
                <p>
                    Test out the inputs below to discover how your modifier changes as your ability score changes.
                </p>
                <p>
                    <label>
                        Strength:
                        <input 
                            type="number"
                            value={abilityScores.Strength}
                            onChange={(e) => handleInputChange("Strength", parseInt(e.target.value))}
                            max={20}
                            min={1}></input>
                    </label>
                    <label>
                        Dexterity:
                        <input
                            type="number"
                            value={abilityScores.Dexterity}
                            onChange={(e) => handleInputChange("Dexterity", parseInt(e.target.value))}
                            max={20}
                            min={1}></input>
                    </label>
                    <label>
                        Constitution:
                        <input
                            type="number"
                            value={abilityScores.Constitution}
                            onChange={(e) => handleInputChange("Constitution", parseInt(e.target.value))}
                            max={20}
                            min={1}></input>
                    </label>
                    <label>
                        Intelligence:
                        <input
                            type="number"
                            value={abilityScores.Intelligence}
                            onChange={(e) => handleInputChange("Intelligence", parseInt(e.target.value))}
                            max={20}
                            min={1}></input>
                    </label>
                    <label>
                        Wisdom:
                        <input
                            type="number"
                            value={abilityScores.Wisdom}
                            onChange={(e) => handleInputChange("Wisdom", parseInt(e.target.value))}
                            max={20}
                            min={1}></input>
                    </label>
                    <label>
                        Charisma:
                        <input
                            type="number"
                            value={abilityScores.Charisma}
                            onChange={(e) => handleInputChange("Charisma", parseInt(e.target.value))}
                            max={20}
                            min={1}></input>
                    </label>
                </p>
                <p>
                <table>
                    <thead>
                        <tr>
                            <th>Ability Score</th>
                            <th>Modifier</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(abilityScores).map(([ability, score]) => (
                            <tr key={ability}>
                                <td>{ability}</td>
                                <td>{calculateModifier(score)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </p>
            </div>
        </div>
    )
}