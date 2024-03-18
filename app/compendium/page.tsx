import "../styles/Information.css";
import Link from "next/link";

export default function Compendium() {
    return (
        <div className="outer-div-info">
            <div className="center-div-info">   
                <h1> Information Compendium</h1>
                <p>
                    Find here all D&D related information that is relevant when playing the game and preparing to play the game.
                </p>
                <h3>
                    Class Information
                </h3>
                <div id="link-list">
                    <Link href="/compendium/cls/barbarian">
                        Barbarian
                    </Link>
                    <Link href="/compendium/cls/bard">
                        Bard
                    </Link>
                    <Link href="/compendium/cls/cleric">
                        Cleric
                    </Link>
                    <Link href="/compendium/cls/druid">
                        Druid
                    </Link>
                    <Link href="/compendium/cls/fighter">
                        Fighter
                    </Link>
                    <Link href="/compendium/cls/monk">
                        Monk
                    </Link>
                    <Link href="/compendium/cls/paladin">
                        Paladin
                    </Link>
                    <Link href="/compendium/cls/ranger">
                        Ranger
                    </Link>
                    <Link href="/compendium/cls/rogue">
                        Rogue
                    </Link>
                    <Link href="/compendium/cls/sorcerer">
                        Sorcerer
                    </Link>
                    <Link href="/compendium/cls/warlock">
                        Warlock
                    </Link>
                    <Link href="/compendium/cls/wizard">
                        Wizard
                    </Link>
                </div>
            </div> 
        </div>
    )
}