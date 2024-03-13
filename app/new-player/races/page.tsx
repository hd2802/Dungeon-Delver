"use client"
import "../../styles/Information.css"
import { useState } from "react";

import Dragonborn from "../../components/information_modules/races/dragonborn";
import Dwarf from "../../components/information_modules/races/dwarf";
import Elf from "../../components/information_modules/races/elf";
import Gnome from "../../components/information_modules/races/gnome";
import Half_elf from "../../components/information_modules/races/half-elf";
import Half_orc from "../../components/information_modules/races/half-orc";
import Halfling from "../../components/information_modules/races/halfling";
import Human from "../../components/information_modules/races/human";
import Tiefling from "../../components/information_modules/races/tiefling";


export default function combatTutorial() {
    const [currentPage, setCurrentPage] = useState('human');

    const handleChoice = (page: string) => {
        setCurrentPage(page);
    }

    const renderPage = () => {
        switch (currentPage) {
            case "human":
                return (
                    <div className="outer-div-info">
                        <div className="center-div-info">
                            <Human />
                        </div>
                        <div className="buttond-div-info">
                            <button onClick={() => handleChoice('dragonborn')}>
                                Next
                            </button>
                        </div>
                    </div>
                )
            case "dragonborn":
                return (
                    <div className="outer-div-info">
                        <div className="center-div-info">
                            <Dragonborn />
                            Interactive initiative minigame here
                        </div>
                        <div className="buttond-div-info">
                            <button onClick={() => handleChoice("human")}>
                                Back
                            </button>
                            <button onClick={() => handleChoice("dwarf")}>
                                Next
                            </button>
                        </div>
                    </div>
                )
            case "dwarf":
                return (
                    <div className="outer-div-info">
                        <div className="center-div-info">
                            <Dwarf />
                        </div>
                        <div className="buttond-div-info">
                            <button onClick={() => handleChoice('dragonborn')}>
                                Back
                            </button>
                            <button onClick={() => handleChoice("elf")}>
                                Next
                            </button>
                        </div>
                    </div>
                )
            case "elf":
                return (
                    <div className="outer-div-info">
                        <div className="center-div-info">
                            <Elf />
                        </div>
                        <div className="buttond-div-info">
                            <button onClick={() => handleChoice("dwarf")}>
                                Back
                            </button>
                            <button onClick={() => handleChoice("gnome")}>
                                Next
                            </button>
                        </div>
                    </div>
                )
                case "gnome":
                    return (
                        <div className="outer-div-info">
                            <div className="center-div-info">
                                <Gnome />
                            </div>
                            <div className="buttond-div-info">
                                <button onClick={() => handleChoice("elf")}>
                                    Back
                                </button>
                                <button onClick={() => handleChoice("half-elf")}>
                                Next
                            </button>
                        </div>
                    </div>
                )
                case "half-elf":
                    return (
                        <div className="outer-div-info">
                            <div className="center-div-info">
                                <Half_elf />
                            </div>
                            <div className="buttond-div-info">
                                <button onClick={() => handleChoice("gnome")}>
                                    Back
                                </button>
                                <button onClick={() => handleChoice("half-orc")}>
                                Next
                            </button>
                        </div>
                    </div>
                )
                case "half-orc":
                    return (
                        <div className="outer-div-info">
                            <div className="center-div-info">
                                <Half_orc />
                            </div>
                            <div className="buttond-div-info">
                                <button onClick={() => handleChoice("half-elf")}>
                                    Back
                                </button>
                                <button onClick={() => handleChoice("halfling")}>
                                Next
                            </button>
                        </div>
                    </div>
                )
                case "halfling":
                    return (
                        <div className="outer-div-info">
                            <div className="center-div-info">
                                <Halfling />
                            </div>
                            <div className="buttond-div-info">
                                <button onClick={() => handleChoice("half-orc")}>
                                    Back
                                </button>
                                <button onClick={() => handleChoice("tiefling")}>
                                Next
                            </button>
                        </div>
                    </div>
                )
                case "Tiefling":
                    return (
                        <div className="outer-div-info">
                            <div className="center-div-info">
                                <Tiefling />
                            </div>
                            <div className="buttond-div-info">
                                <button onClick={() => handleChoice("halfling")}>
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