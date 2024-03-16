import dragonbornImg from "../../public/race-images/dragonborn.png";
import dwarfImg from "../../public/race-images/dwarf.png";
import elfImg from "../../public/race-images/elf.png";
import halfElfImg from "../../public/race-images/half-elf.png";
import halfOrcImg from "../../public/race-images/half-orc.png";
import halflingImg from "../../public/race-images/halfling.png";
import humanImg from "../../public/race-images/human.png";
import tieflingImg from "../../public/race-images/tiefling.png";
import gnomeImg from "../../public/race-images/gnome.png";

export interface RaceData {
    name: string;
    description: string;
    traits: string;
    abilityScoreModifiers: { [key:string]:number};
    image: any;
    altText: string;
}

const raceData: RaceData[] = [
    {
        name: "Dragonborn",
        description: "Dragonborn look very much like dragons standing erect in humanoid form, though they lack wings or a tail",
        traits: "+2 Strength, +1 Charisma, Draconic Ancestry, Breath Weapon, Damage Resistance",
        abilityScoreModifiers: {Strength: 2, Charisma: 1},
        image: dragonbornImg,
        altText: ""
    },
    {
        name: "Dwarf",
        description: "Bold and hardy, dwarves are known as skilled warriors, miners and workers of stone and metal.",
        traits: "+1 Constitution, Darkvision, Dwarven Resillience, Dwarven Combat Training, Stonecunning",
        abilityScoreModifiers: {Constitution: 1},
        image: dwarfImg,
        altText: ""
    },
    {
        name: "Elf",
        description: "Elves are a magical people of otherworldly grace, living in the world but not entirely a part of it.",
        traits: "+2 Dexterity, Darkvision, Keen Senses, Fey Ancestry, Trance",
        abilityScoreModifiers: {Dexterity: 2},
        image: elfImg,
        altText: ""
    },
    {
        name: "Gnome",
        description: "A gnome's energy and enthusiasm for living shines through every inch of their body.",
        traits: "+2 Intelligence, Darkvision, Gnome Cunning",
        abilityScoreModifiers: {Intelligence: 2},
        image: gnomeImg,
        altText: ""
    },
    {
        name: "Half-Elf",
        description: "Half-elves combine what some say are the best qualities of their elf and human parents.",
        traits: "+2 Charisma, +1 to Two Other Ability Scores, Darkvision, Fey Ancestry, Skill Versatility",
        abilityScoreModifiers: {Charisma: 2, Intelligence: 1, Dexterity: 1},
        image: halfElfImg,
        altText: ""
    },
    {
        name: "Halfling",
        description: "The diminuitive halflings survive in a world full of larger creatures by avoiding notice, or barring that, avoiding offense.",
        traits: "+2 Dexterity, Lucky, Brave, Halfling Nibleness",
        abilityScoreModifiers: {Dexterity: 2},
        image: halflingImg,
        altText: ""
    },
    {
        name: "Half-Orc",
        description: "Some half-orcs rise to become proud leaders of orc communities. Some venture into the world to prove their worth. Many of these become adventurers, achieving greatness for their mighty deeds.",
        traits: "+2 Strength, +1 Constitution, Darkvision, Menacing, Relentless Endurance, Savage Attacks",
        abilityScoreModifiers: {Strength: 2, Constitution: 1},
        image: halfOrcImg,
        altText: ""
    },
    {
        name: "Human",
        description: "Humans are the most adaptable and ambitious people among the common races. Whatever drives them, humans are innovators, the achieves and the pioneers of the world.",
        traits: "+1 to All Ability Scores, Extra Langauge",
        abilityScoreModifiers: {Strength: 1, Dexterity: 1, Constitution: 1, Wisdom: 1, Charisma: 1, Intelligence: 1},
        image: humanImg,
        altText: ""
    },
    {
        name: "Tielfing",
        description: "To be greeted with stares and whispers, to suffer violence and insult on the street, to see mistrust and fear in every eye: this is the lot of the tielfing.",
        traits: "+2 Charisma, +1 Intelligence, Darkvision, Hellish Resistance, Infernal Legacy",
        abilityScoreModifiers: {Charisma: 2, Intelligence: 1},
        image: tieflingImg,
        altText: ""
    },
]

export default raceData;