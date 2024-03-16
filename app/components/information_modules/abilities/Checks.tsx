import React, { useState, useEffect } from 'react';

export default function Checks() {
    const [customDC, setCustomDC] = useState(10); // Default DC value
    const [roll, setRoll] = useState<number | null>(null);
    const [resultMessage, setResultMessage] = useState('');

    const handleInputChange = (event: any) => {
        const value = event.target.value;
        setCustomDC(value);
    }

    const handleCheck = () => {
        const result = Math.floor(Math.random() * 20) + 1;
        setRoll(result);
    }

    useEffect(() => {
        if (roll !== null)
        {
            setResultMessage(roll < customDC ? 'You\'ve failed the ability check!' : 'You\'ve passed the ability check!');
        }
    }, [roll, customDC]);

    return (
        <div>
            <h1>Ability Checks</h1>
            <div className="left-div-t">
                <p>
                    An ability check tests a character's or monster's innate talent and training in an effort to overcome a challenge.
                    The DM calls for an ability check when a character attempts an action (other than an attack) that has a chance of failure.
                    When the outcome is uncertain, the dice determine the results.
                </p>
                <p>
                    For every ability check, the DM decides which of the six abilities is relevant to the task at hand and the difficulty of the task, represented by its Difficulty Class (DC).
                </p>
                <p>
                    To make an ability check, roll a d20 and add the relevant ability modifier. 
                    As with other d20 rolls, apply bonuses and penalties and compare the total to the DC. 
                    If the total equals or exceeds the DC, the ability check is a success - the creature overcomes the challenge at hand.
                    Otherwise, it is a failure, which means the character makes no progress towards the objective.
                </p>
                <p>
                    Sometimes, the DM might ask for an ability check using a specific skill.
                    Being proficient in a skill means that an individual can add their proficiency bonus to ability checks that involve that skill.
                </p>
            </div>
            <div className="right-div-t">
                <p>
                    <label>
                        Custom Difficulty Class (DC):
                        <input type="number" value={customDC} onChange={handleInputChange} max={30} min={1}/>
                    </label>
                    <button onClick={handleCheck}>Perform Ability Check</button>
                </p>
                {roll !== null && (
                    <p>
                        Your roll: {roll}
                    </p>
                )}
                {resultMessage && (
                    <p>
                        {resultMessage}
                    </p>
                )}
            </div>
        </div>
    )
}