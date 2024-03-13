export default function Fighter() {
    return (
        <div>
            <h1>Fighter</h1>
            <p>
                As a fighter, you gain the following class features, showcasing your combat prowess and specialization in martial skills.
            </p>
            <h2>Class Features</h2>
            <h3>Hit Points</h3>
            <p>
                Hit Dice: 1d10 per fighter level
                <br />
                Hit Points at 1st Level: 10 + your Constitution modifier
                <br />
                Hit Points at Higher Levels: 1d10 (or 6) + your Constitution modifier per fighter level after 1st
            </p>
            <h3>Proficiencies</h3>
            <p>
                <b>Armor:</b> All armor, shields
                <br />
                <b>Weapons:</b> Simple weapons, martial weapons
                <br />
                <b>Tools:</b> None
                <br />
                <b>Saving Throws:</b> Strength, Constitution
                <br />
                <b>Skills:</b> Choose two skills from Acrobatics, Animal Handling, Athletics, History, Insight, Intimidation, Perception, and Survival
            </p>
            <h3>Equipment</h3>
            <p>
                You start with the following equipment, in addition to the equipment granted by your background:
                <br />
                • (a) chain mail or (b) leather armor, longbow, and 20 arrows
                <br />
                • (a) a martial weapon and a shield or (b) two martial weapons
                <br />
                • (a) a light crossbow and 20 bolts or (b) two handaxes
                <br />
                • (a) a dungeoneer’s pack or (b) an explorer’s pack
            </p>
        </div>
    );
}