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
                <Link href="/trial-campaign">Trial Campaign</Link>
                <Link href="/">Character Creation Wizard</Link>
            </div>

            <div className="dash-section">
                <h2>Information</h2>
                <Link href="/new-player/combat">Combat</Link>
                <Link href="/new-player/abilities">Ability Scores</Link>
                <Link href="/new-player/classes">Classes</Link>
                <Link href="/new-player/races">Races</Link>
            </div>
        </div>
    )
}