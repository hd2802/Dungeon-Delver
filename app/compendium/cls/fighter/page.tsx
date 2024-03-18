import Fighter from "../../../components/information_modules/classes/fighter";
import "../../../styles/Information.css";

export default function FighterInfo() {
    return (
        <div className="outer-div-info">
            <div className="center-div-info">
                <Fighter />
            </div>
        </div>
    )
}