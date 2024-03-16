
const spellData: Record<string, Record<number, string[]>> = {
    "Barbarian": {
        0: [],
        1: [], 
    },
    "Bard": {
        0: ["Dancing Lights", "Light", "Mage Hand", "Mending", "Prestidigitation", "Vicious Mockery"],
        1: ["Charm Person", "Cure Wounds", "Disguise Self", "Healing Word", "Sleep"],
    },
    "Cleric": {
        0: ["Guidance", "Light", "Mending", "Resistance", "Sacred Flame", "Thaumaturgy"],
        1: ["Bless", "Cure Wounds", "Detect Magic", "Healing Word", "Inflict Wounds"],
    },
    "Druid": {
        0: ["Druidcraft", "Guidance", "Mending", "Poison Spray", "Produce Flame", "Resistance"],
        1: ["Charm Person", "Cure Wounds", "Entangle", "Faerie Fire", "Goodberry"],
    },
    "Fighter": {
        0: [],
        1: [], 
    },
    "Monk": {
        0: ["Dancing Lights", "Mage Hand", "Minor Illusion", "Prestidigitation", "Thaumaturgy"],
        1: [], 
    },
    "Paladin": {
        0: ["Bless", "Cure Wounds", "Detect Evil and Good", "Detect Magic", "Guidance"],
        1: [], 
    },
    "Ranger": {
        0: ["Druidcraft", "Goodberry", "Hunter's Mark", "Light", "Resistance"],
        1: [], 
    },
    "Rogue": {
        0: ["Dancing Lights", "Mage Hand", "Minor Illusion", "Prestidigitation", "Thaumaturgy"],
        1: [],
    },
    "Sorcerer": {
        0: ["Acid Splash", "Chill Touch", "Dancing Lights", "Fire Bolt", "Light"],
        1: ["Burning Hands", "Charm Person", "Mage Armor", "Magic Missile", "Shield"],
    },
    "Warlock": {
        0: ["Eldritch Blast", "Mage Hand", "Minor Illusion", "Poison Spray", "Prestidigitation"],
        1: [], 
    },
    "Wizard": {
        0: ["Acid Splash", "Fire Bolt", "Light", "Mage Hand", "Ray of Frost"],
        1: ["Charm Person", "Detect Magic", "Feather Fall", "Magic Missile", "Shield"],
    },
}

export default spellData;