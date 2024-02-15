import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/TrialCampaign.css';
import Button from '../../components/Button/Button.js';

const Rogue21 = () => {
    const [selectedOption, setSelectedOption] = useState(null)

    const handleButtonClick = (choice) => {
        setSelectedOption(choice)
    };

    const handleRouting = () => {
        if (selectedOption === '1'){
            return '/rogue-page-2-1-1';
        }
        else if (selectedOption === '2') {
            return '/rogue-page-2-1-2';
        }
        else {
            return '/rogue-page-2-1';
        }
    }


    return (
        <div id='outer-div'>
            <div id='left-hand-side'>
                <h1> The Adventure Begins ... </h1>
                <p class='text-box'>
                    You approach the barkeep, a bearded, towering giant of a human, who immediately pours you a pint of ale - despite you not asking for it.

                    <p>
                        "Coin?"
                    </p>

                    He booms out. 

                    What do you do?

                </p>

                <p class='explaination-box'>
                    Each character has a certain set of skills that they excel at. When your character decides to do an action,
                    the DM can determine if a 'skill-check' is required.

                    <p>
                        A skill check involves the DM asking you to roll a D20 (20 sided dice). 

                        Whilst the roll is dependant on luck, if your character is known to be skilled in that area, then you will be able to add some numbers on to your roll.
                    </p>
                </p>
            </div>

            <div id='right-hand-side'>
                <div>
                    <h4> Do you choose to </h4>
                </div>
                <div id='button-div'>
                    <Button onClick ={() => handleButtonClick('1')}>
                        1. Pay the coin?
                    </Button>

                    <Button onClick ={() => handleButtonClick('2')}>
                        2. Refuse
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

export default Rogue21;