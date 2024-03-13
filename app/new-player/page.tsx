import Link from "next/link";
import "../styles/Dash.css";

export default function tutorial() {
    return (
        <div className="outer-div-dash">
            <div className="header-div-dash">
                <h1>New Player Dashboard</h1>
            </div>
            
            <div className="dash-section">
                <h2> Interactive Features</h2>
                <Link className="dash-footer" id="trial" href="/trial-campaign">Trial Campaign</Link>
                <Link className="dash-footer" href="/character-builder">Character Creation Wizard</Link>
            </div>

            <div className="dash-section">
                <h2>Information</h2>
                <Link className="dash-footer" id="combat" href="/new-player/combat">Combat</Link>
                <Link className="dash-footer" id="ability" href="/new-player/abilities">Ability Scores</Link>
            </div>
        </div>
    )
}