"use client"
import "../../styles/Information.css"
import { useState } from "react";

import Introduction from "../../components/information_modules/abilities/Introduction";
import Scores from "../../components/information_modules/abilities/Scores";
import Checks from "../../components/information_modules/abilities/Checks";
import Skills from "../../components/information_modules/abilities/Skills";

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
                            <button onClick={() => handleChoice("scores")}>
                                Next
                            </button>
                        </div>
                    </div>
                )
            case "scores":
                return (
                    <div className="outer-div-info">
                        <div className="center-div-info">
                            <Scores />
                        </div>
                        <div className="buttond-div-info">
                            <button onClick={() => handleChoice("checks")}>
                                Next
                            </button>
                            <div className="buttond-div-info">
                            <button onClick={() => handleChoice("introduction")}>
                                Back
                            </button>
                        </div>
                        </div>
                    </div>
                )
            case "checks":
                return (
                    <div className="outer-div-info">
                        <div className="center-div-info">
                            <Checks />
                        </div>
                        <div className="buttond-div-info">
                            <button onClick={() => handleChoice("skills")}>
                                Next
                            </button>
                            <div className="buttond-div-info">
                            <button onClick={() => handleChoice("scores")}>
                                Back
                            </button>
                        </div>
                        </div>
                    </div>
                )
                case "skills":
                    return (
                        <div className="outer-div-info">
                            <div className="center-div-info">
                                <Skills />
                            </div>
                            <div className="buttond-div-info">
                                <div className="buttond-div-info">
                                <button onClick={() => handleChoice("checks")}>
                                    Back
                                </button>
                                <button>
                                    <a className="button-link" href="/new-player">
                                        Back to Tutorial Page
                                    </a>
                                </button>
                            </div>
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