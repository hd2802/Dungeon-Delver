"use client"
import "../../styles/Information.css"
import { useState } from "react";

import Barbarian from "../../components/information_modules/classes/barbarian";
import Bard from "../../components/information_modules/classes/bard";
import Cleric from "../../components/information_modules/classes/cleric";
import Druid from "../../components/information_modules/classes/druid";
import Fighter from "../../components/information_modules/classes/fighter";
import Monk from "../../components/information_modules/classes/monk";
import Paladin from "../../components/information_modules/classes/paladin";
import Ranger from "../../components/information_modules/classes/ranger";
import Rogue from "../../components/information_modules/classes/rogue";
import Sorcerer from "../../components/information_modules/classes/sorcerer";
import Warlock from "../../components/information_modules/classes/warlock";
import Wizard from "../../components/information_modules/classes/wizard";

export default function combatTutorial() {
    const [currentPage, setCurrentPage] = useState('barbarian');

    const handleChoice = (page: string) => {
        setCurrentPage(page);
    }

    const renderPage = () => {
        switch (currentPage) {
            case "barbarian":
                return (
                    <div className="outer-div-info">
                        <div className="center-div-info">
                            <Barbarian />
                        </div>
                        <div className="buttond-div-info">
                            <button onClick={() => handleChoice('bard')}>
                                Next
                            </button>
                        </div>
                    </div>
                )
            case "bard":
                return (
                    <div className="outer-div-info">
                        <div className="center-div-info">
                            <Bard />
                            Interactive initiative minigame here
                        </div>
                        <div className="buttond-div-info">
                            <button onClick={() => handleChoice("barbarian")}>
                                Back
                            </button>
                            <button onClick={() => handleChoice("cleric")}>
                                Next
                            </button>
                        </div>
                    </div>
                )
            case "cleric":
                return (
                    <div className="outer-div-info">
                        <div className="center-div-info">
                            <Cleric />
                        </div>
                        <div className="buttond-div-info">
                            <button onClick={() => handleChoice('bard')}>
                                Back
                            </button>
                            <button onClick={() => handleChoice("druid")}>
                                Next
                            </button>
                        </div>
                    </div>
                )
            case "druid":
                return (
                    <div className="outer-div-info">
                        <div className="center-div-info">
                            <Druid />
                        </div>
                        <div className="buttond-div-info">
                            <button onClick={() => handleChoice("cleric")}>
                                Back
                            </button>
                            <button onClick={() => handleChoice("fighter")}>
                                Next
                            </button>
                        </div>
                    </div>
                )
            case "fighter":
                return (
                    <div className="outer-div-info">
                        <div className="center-div-info">
                            <Fighter />
                        </div>
                        <div className="buttond-div-info">
                            <button onClick={() => handleChoice("druid")}>
                                Back
                            </button>
                            <button onClick={() => handleChoice("monk")}>
                                Next
                            </button>
                        </div>
                    </div>
                )
            case "monk":
                return (
                    <div className="outer-div-info">
                        <div className="center-div-info">
                            <Monk />
                        </div>
                        <div className="buttond-div-info">
                            <button onClick={() => handleChoice("fighter")}>
                                Back
                            </button>
                            <button onClick={() => handleChoice("paladin")}>
                                Next
                            </button>
                        </div>
                    </div>
                )
            case "paladin":
                return (
                    <div className="outer-div-info">
                        <div className="center-div-info">
                            <Paladin />
                        </div>
                        <div className="buttond-div-info">
                            <button onClick={() => handleChoice("monk")}>
                                Back
                            </button>
                            <button onClick={() => handleChoice("ranger")}>
                                Next
                            </button>
                        </div>
                    </div>
                )
            case "ranger":
                return (
                    <div className="outer-div-info">
                        <div className="center-div-info">
                            <Ranger />
                        </div>
                        <div className="buttond-div-info">
                            <button onClick={() => handleChoice("paladin")}>
                                Back
                            </button>
                            <button onClick={() => handleChoice("rogue")}>
                                Next
                            </button>
                        </div>
                    </div>
                )
            case "rogue":
                return (
                    <div className="outer-div-info">
                        <div className="center-div-info">
                            <Rogue />
                        </div>
                        <div className="buttond-div-info">
                            <button onClick={() => handleChoice("ranger")}>
                                Back
                            </button>
                            <button onClick={() => handleChoice("sorcerer")}>
                                Next
                            </button>
                        </div>
                    </div>
                )
            case "sorcerer":
                return (
                    <div className="outer-div-info">
                        <div className="center-div-info">
                            <Sorcerer />
                        </div>
                        <div className="buttond-div-info">
                            <button onClick={() => handleChoice("rogue")}>
                                Back
                            </button>
                            <button onClick={() => handleChoice("warlock")}>
                                Next
                            </button>
                        </div>
                    </div>
                )
            case "warlock":
                return (
                    <div className="outer-div-info">
                        <div className="center-div-info">
                            <Warlock />
                        </div>
                        <div className="buttond-div-info">
                            <button onClick={() => handleChoice("sorcerer")}>
                                Back
                            </button>
                            <button onClick={() => handleChoice("wizard")}>
                                Next
                            </button>
                        </div>
                    </div>
                )
            case "wizard":
                return (
                    <div className="outer-div-info">
                        <div className="center-div-info">
                            <Wizard />
                        </div>
                        <div className="buttond-div-info">
                            <button onClick={() => handleChoice("warlock")}>
                                Back
                            </button>
                            <button>
                                <a className="button-link" href="/new-player">
                                    Back to Tutorial Page
                                </a>
                            </button>
                        </div>
                    </div>
                )
        }
    }

    return (
        <div>
            {renderPage()}
        </div>
    )
}
