import React, { useState } from 'react';

export default function initiative() {
    const [initiativeRoll, setInitiativeRoll] = useState<number | null >(null);
    const [dexterityModifier, setDexterityModifier] = useState(0);

    const rollInitiative = () => {
        const diceRoll = Math.floor(Math.random() * 20) + 1;
        setInitiativeRoll(diceRoll + dexterityModifier);
    };

    const handleDexterityModifierChange = (event: any) => {
        const modifier = parseInt(event.target.value) || 0;
        setDexterityModifier(modifier);
    }

    return (
        <div>
            <h1> Initiative </h1>
            <div className="left-div-t">
            <p>
                Initiative determines the order of turns during combat.
                When combat starts, every participant makes a Dexterity check to determine their place in the initiative order.
                The DM ranks the combatants in order from the one with the highest dexterity check total to the one with the lowest.
            </p>
            </div>
            <div className="right-div-t">
            <label>
                    Dexterity Modifier:
                    <input
                        type="number"
                        value={dexterityModifier}
                        onChange={handleDexterityModifierChange}
                    />
                </label>
                <button onClick={rollInitiative}>
                    Roll for Initiative
                </button>
                {initiativeRoll !== null && (
                    <p>
                        Your Initiative Roll: {initiativeRoll}
                    </p>
                )}
            </div>
        </div>
    )
}