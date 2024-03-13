export default function attacking() {
    return (
        <div>
            <h1> Attacking </h1>
            <div className="left-div-t">
                <p>
                    Whether you're striking with a melee weapon, firing a weapon at range, or making an attack roll as part of a spell, an attack has a simple structure.
                    <ol className="info-list">
                        <li>
                            <b>Choose a target.</b> Pick a target within your attack's range: a creature, an object or a location.
                        </li>
                        <li>
                            <b>Determine modifiers.</b> Your character's modifier depends on how well they can weild a particular weapon or cast a particular spell.
                            Typically, before rolling, you can determine what you need to add to that roll.
                        </li>
                        <li>
                            <b>Resolve the attack.</b> You make the attack roll.
                            On a hit, you roll damage, unless the particular attack has rules that specifiy otherwise. 
                        </li>
                    </ol>
                </p>
                <h3>Attack Rolls</h3>
                    <p>
                        When you make an attack, your attack roll determines whether the attack hits or misses. To make an attack roll, roll a d20 and add the appropriate modifiers.
                        If the total of the roll plus the modifiers equals or exceeds the targets' Armour Class (AC), the attack hits.
                    </p>
            </div>
            <div className="right-div-t">

                    <h3>Modifiers to the Roll</h3>
                    <p>
                        When a character makes an attack roll, the two most common modifiers to the roll are an ability modifier and the characters' proficiency bonus.
                    </p>
                    <p>
                        <b>Ability Modifier.</b> The ability modifier used for a melee weapon attack is Strenght, and the ability modifier used for a ranged weapon attack is Dexterity. 
                    </p>
                    <p>
                        <b>Proficiency Bonus.</b> You add your proficiency bonus to your attack roll when you attack using a weapon with which you  have proficiency.
                    </p>
                </div>
        </div>
    )
}