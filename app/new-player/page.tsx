import Link from "next/link";
import "../new-player/Dash.css"; // Make sure this path matches your actual CSS file's location

export default function Tutorial() {
    return (
        <div className="outer-div-dash">
            <div className="header-div-dash">
                <h1>New Player Dashboard</h1>
            </div>
            
            <div className="dash-section">
                <h2 style={{ textAlign: 'center'}}>Interactive Features</h2>
                <div className="new-player-button-container">
                    <Link href="/trial-campaign">
                        <button className="new-player-dash-button">Trial Campaign</button>
                    </Link>
                    <Link href="/character-builder">
                        <button className="new-player-dash-button">Character Creation Wizard</button>
                    </Link>
                </div>
            </div>

            <div className="dash-section">
                <h2 style={{textAlign: 'center'}}>Information</h2> 
                <div className="new-player-button-container">
                    <Link href="/new-player/combat">
                        <button className="new-player-dash-button">Combat</button>
                    </Link>
                    <Link href="/new-player/abilities">
                        <button className="new-player-dash-button">Ability Scores</button>
                    </Link>
                    <Link href="/new-player/classes">
                        <button className="new-player-dash-button">Classes</button>
                    </Link>
                    <Link href="/new-player/races">
                        <button className="new-player-dash-button">Races</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
