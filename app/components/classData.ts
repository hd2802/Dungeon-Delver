import barbarianImg from "../../public/class-images/barbarian.png";
import bardImg from "../../public/class-images/bard.png";
import clericImg from "../../public/class-images/cleric.png";
import druidImg from "../../public/class-images/druid.png";
import fighterImg from "../../public/class-images/fighter.png";
import monkImg from "../../public/class-images/monk.png";
import paladinImg from "../../public/class-images/paladin.png";
import rangerImg from "../../public/class-images/ranger.png";
import rogueImg from "../../public/class-images/rogue.png";
import sorcererImg from "../../public/class-images/sorcerer.png";
import warlockImg from "../../public/class-images/warlock.png";
import wizardImg from "../../public/class-images/wizard.png";

export interface ClassData {
  name: string;
  description: string;
  hitDie: string;
  primaryAbility: string;
  saves: string;
  image: any;
  link: string;
  altText: string;
}

const classData : ClassData[] = [
    {
      name: "Barbarian",
      description: "A fierce warrior who can enter a battle rage.",
      hitDie: "d12",
      primaryAbility: "Strength",
      saves: "Strength & Constitution",
      image: barbarianImg,
      link: "/compendium/cls/barbarian",
      altText: "A male, human barbarian with long blonde hair and a big beard, wearing furs and carrying a greataxe over his shoulder"
    },
    {
        name: "Bard",
        description: "An inspiring magician whose power echoes the music of creation.",
        hitDie: "d8",
        primaryAbility: "Charisma",
        saves: "Dexterity & Charisma",
        image: bardImg,
        link: "/compendium/cls/bard",
        altText: "A female, elven bard with white, short hair carrying a stringed instrument over their shoulder."
    },
    {
      name: "Cleric",
      description: "A prisetly champion who wields divine magic in service of a higher power",
      hitDie: "d8",
      primaryAbility: "Wisdom",
      saves: "Wisdom & Charisma",
      image: clericImg,
      link: "/compendium/cls/cleric",
      altText: "A male dwarven cleric wielding a large hammer in both hands",
    },
    {
      name: "Druid",
      description: "A priest of the Old Faith, wielding the powers of nature and adopting animal forms",
      hitDie: "d8",
      primaryAbility: "Wisdom",
      saves: "Intelligence & Wisdom",
      image: druidImg,
      link: "/compendium/cls/druid",
      altText: "A male elven druid wielding a large wooden staff in one hand. He has a raven pirched on his other handß"
    },
    {
      name: "Fighter",
      description: "A master of martial combat, skilled with a variety of weapons and armour",
      hitDie: "d10",
      primaryAbility: "Strength or Dexterity",
      saves: "Strength & Constitution",
      image: fighterImg,
      link: "/compendium/cls/fighter",
      altText: ""
    },
    {
      name: "Monk",
      description: "A master of martial arts, harnessing the power of the body in pursuit of physical and spritual perfection",
      hitDie: "d8",
      primaryAbility: "Dexterity & Wisdom",
      saves: "Strength & Dexterity",
      image: monkImg,
      link: "/compendium/cls/monk",
      altText: ""
    },
    {
      name: "Paladin",
      description: "A holy warrior bound to a sacred oath",
      hitDie: "d10",
      primaryAbility: "Strength & Charisma",
      saves: "Wisdom & Charisma",
      image: paladinImg,
      link: "/compendium/cls/paladin",
      altText: ""
    },
    {
      name: "Ranger",
      description: "A warrior who combats threats on the edges of civilisation",
      hitDie: "d10",
      primaryAbility: "Dexterity & Wisdom",
      saves: "Strength & Dexterity",
      image: rangerImg,
      link: "/compendium/cls/ranger",
      altText: ""
    },
    {
      name: "Rogue",
      description: "A scoundrel who uses stealth and trickery to overcome obstacles and enemies",
      hitDie: "d8",
      primaryAbility: "Dexterity",
      saves: "Dexterity & Intellignce",
      image: rogueImg,
      link: "/compendium/cls/rogue",
      altText: ""
    },
    {
      name: "Sorcerer",
      description: "A spellcaster who draws on inherent magic from a gift or bloodline",
      hitDie: "d6",
      primaryAbility: "Charisma",
      saves: "Constitution & Charisma",
      image: sorcererImg,
      link: "/compendium/cls/sorcerer",
      altText: ""
    },
    {
      name: "Warlock",
      description: "A wielder of magic that is dervied from a bargain with an extraplanar entity",
      hitDie: "d8",
      primaryAbility: "Charisma",
      saves: "Wisdom & Charisma",
      image: warlockImg,
      link: "/compendium/cls/warlock",
      altText: ""
    },
    {
      name: "Wizard",
      description: "A scholarly magic-user capable of manipulating the structures of reality",
      hitDie: "d6",
      primaryAbility: "Intelligence",
      saves: "Intelligence & Wisdom",
      image: wizardImg,
      link: "/compendium/cls/wizard",
      altText: ""
    }
]

export default classData;