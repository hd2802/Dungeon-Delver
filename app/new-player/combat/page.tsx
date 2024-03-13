"use client"
import "../../styles/Information.css"
import { useState } from "react";

import Introduction from "../../components/information_modules/combat/Introduction";
import Initiative from "../../components/information_modules/combat/Initiative";
import Turn from "../../components/information_modules/combat/Turn";
import Attacking from "../../components/information_modules/combat/Attacking";
import HitPoints from "../../components/information_modules/combat/HitPoints";

export default function combatTutorial() {
    const [currentPage, setCurrentPage] = useState('introduction');

    const handleChoice = (page: string) => {
        setCurrentPage(page);
    }

    const renderPage = () => {
        switch (currentPage) {
            case "introduction":
                return (
                    <div className="outer-div-info">
                        <div className="center-div-info">
                            <Introduction />
                        </div>
                        <div className="buttond-div-info">
                            <button onClick={() => handleChoice('initiative')}>
                                Next
                            </button>
                        </div>
                    </div>
                )
            case "initiative":
                return (
                    <div className="outer-div-info">
                        <div className="center-div-info">
                            <Initiative />
                            Interactive initiative minigame here
                        </div>
                        <div className="buttond-div-info">
                            <button onClick={() => handleChoice("introduction")}>
                                Back
                            </button>
                            <button onClick={() => handleChoice("turn")}>
                                Next
                            </button>
                        </div>
                    </div>
                )
            case "turn":
                return (
                    <div className="outer-div-info">
                        <div className="center-div-info">
                            <Turn />
                        </div>
                        <div className="buttond-div-info">
                            <button onClick={() => handleChoice('initiative')}>
                                Back
                            </button>
                            <button onClick={() => handleChoice("attacking")}>
                                Next
                            </button>
                        </div>
                    </div>
                )
            case "attacking":
                return (
                    <div className="outer-div-info">
                        <div className="center-div-info">
                            <Attacking />
                        </div>
                        <div className="buttond-div-info">
                            <button onClick={() => handleChoice("turn")}>
                                Back
                            </button>
                            <button onClick={() => handleChoice("hit-points")}>
                                Next
                            </button>
                        </div>
                    </div>
                )
                case "hit-points":
                    return (
                        <div className="outer-div-info">
                            <div className="center-div-info">
                                <HitPoints />
                            </div>
                            <div className="buttond-div-info">
                                <button onClick={() => handleChoice("attacking")}>
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