import Link from "next/link";
import "../styles/Dash.css";

export default function tutorial() {
    return (
        <div className="outer-div-dash">
            <div className="header-div-dash">
                <h1>About Dungeon Delver</h1>
            </div>
            
            <div className="dash-section">
                <h3 style={{marginLeft: '400px', marginRight: '400px'}}> Welcome to Dungeon Delver! A website designed for new and inexperienced players who would like to learn more or just their Dungeons and Dragons journey. </h3>
            </div>

            <div className="dash-section">
                <h3 style={{marginLeft: '400px', marginRight: '400px'}}> Dungeon Delver offers many features to help make your DnD experience as smooth and enjoyable as possible! Some of our key features include; a trial campaign, a character creation wizard and many pages of information ranging from how combat works in dungeons and dragons to what each of the classes and races specialise in.  </h3>
            </div>

            <div className="dash-section">
                <h3 style={{marginLeft: '400px', marginRight: '400px'}}> We understand that to new players, getting into DnD can be very daunting game with way too many rules and details so we've tried our best to provide the necessary basics and concepts for you to get started. We hope we are able to help you have an enjoyable experience playing DnD!</h3>
            </div>

        </div>
    )
}