export default function Cleric() {
    return (
        <div>
            <h1> Cleric </h1>
            <p>
                As a cleric, you are a divine spellcaster, channeling the power of your chosen deity to heal, protect, and smite enemies. Choose your Divine Domain to shape your cleric's abilities and gain special features based on your deity's domain.
            </p>
            <h2> Class Features </h2>
            <h3> Hit Points </h3>
            <p>
                Hit Dice: 1d8 per cleric level
                <br />
                Hit Points at 1st Level: 8 + your Constitution modifier
                <br />
                Hit Points at Higher Levels: 1d8 (or 5) + your Constitution modifier per cleric level after 1st
            </p>
            <h3> Proficiencies </h3>
            <p>
                <b>Armor:</b> Light armor, medium armor, shields
                <br />
                <b>Weapons:</b> Simple weapons
                <br />
                <b>Tools:</b> None
                <br />
                <b>Saving Throws:</b> Wisdom, Charisma
                <br />
                <b>Skills:</b> Choose two from History, Insight, Medicine, Persuasion, and Religion
            </p>
            <h3> Equipment </h3>
            <p>
                You start with the following equipment, in addition to the equipment granted by your background:
                <br />
                • (a) a mace or (b) a warhammer (if proficient)
                <br />
                • (a) scale mail, (b) leather armor, or (c) chain mail (if proficient)
                <br />
                • (a) a light crossbow and 20 bolts or (b) any simple weapon
                <br />
                • (a) a priest’s pack or (b) an explorer’s pack
                <br />
                • A shield and a holy symbol
            </p>
            <h2> Spellcasting </h2>
            <p>
                As a cleric, you are a conduit for divine power, casting spells granted by your deity. You can prepare a list of cleric spells, choosing a number equal to your Wisdom modifier + your cleric level. Your spellcasting ability is Wisdom.
            </p>
        </div>
    );
}