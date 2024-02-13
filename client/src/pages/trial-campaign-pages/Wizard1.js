import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/TrialCampaign.css';
import Button from '../../components/Button.js';

const Wizard1 = () => {
    const [selectedOption, setSelectedOption] = useState(null)

    const handleButtonClick = (choice) => {
        setSelectedOption(choice)
    };

    const handleRouting = () => {
        if (selectedOption === '1'){
            return '/wizard-page-2-1';
        }
        else if (selectedOption === '2') {
            return '/wizard-page-2-2';
        }
        else if (selectedOption === '3') {
            return '/wizard-page-2-3';
        }
        else {
            return '/wizard-page-1';
        }
    }


    return (
        <div id='outer-div'>
            <div id='left-hand-side'>
                <h1> The Adventure Begins ... </h1>
                <p class='text-box'>
                    You find yourself in a tavern. The air is thick with the scent of ale and the sound of chatter fills the room.
                    As you take in your surroundings, you notice serveral points of which interest you:

                    <ul>
                        <li> The barkeep: a grizzle man with a hearty laugh, polishing glasses from behind the bar.</li>
                        <li> A group of mercenaries huddled in a corner, exchaning whispers and glances.</li>
                        <li> A mysterious hooded figure sitting alone at a table. Talking to no-one.</li>
                    </ul>
                </p>

                <p class='explaination-box'>
                    D&D is a game that is centered around the idea of player choice.
                    
                    In a game of D&D your Dungeon Master (DM) might present a setting like above to you and  you can interact with and explore anything.
                </p>
            </div>

            <div id='right-hand-side'>
                <div>
                    <h4> Do you choose to </h4>
                </div>
                <div id='button-div'>
                    <Button onClick ={() => handleButtonClick('1')}>
                        1. Approach the barkeep?
                    </Button>

                    <Button onClick ={() => handleButtonClick('2')}>
                        2. Eavesdrop on the mercanaries?
                    </Button>

                    <Button onClick ={() => handleButtonClick('3')}>
                        3. Investigate the hooded figure?
                    </Button>
                </div>

                <Link to={handleRouting()}>
                    <Button>
                        Continue
                    </Button>
                </Link>

            </div>
        </div>
    );
};

export default Wizard1;