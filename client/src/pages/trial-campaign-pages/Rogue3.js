import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/TrialCampaign.css';
import Button from '../../components/Button.js';

const Rogue3 = () => {
    const [selectedOption, setSelectedOption] = useState(null)

    const handleButtonClick = (choice) => {
        setSelectedOption(choice)
    };

    const handleRouting = () => {
        if (selectedOption === '1'){
            return '/rogue-page-3-1';
        }
        else if (selectedOption === '2') {
            return '/rogue-page-3-2';
        }
        else if (selectedOption === '3') {
            return '/rogue-page-3-3';
        }
        else {
            return '/rogue-page-3';
        }
    }

    return (
        <div id='outer-div'>
            <div id='left-hand-side'>
                <h1> The Adventure Begins ... </h1>
                <p className='text-box'> 
                    As you mingle with the other tavern patrons a bandit bursts through the door - 
                    brandishing a weapon and demaning coin from the tavern. What do you do?
                </p>
            </div>

            <div id='right-hand-side'>
                <div>
                    <h4> Do you choose to </h4>
                </div>
                <div id='button-div'>
                    <Button onClick ={() => handleButtonClick('1')}>
                        1. Charge into batte and confront the bandit head on?
                    </Button>

                    <Button onClick ={() => handleButtonClick('2')}>
                        2. Sneak around the bandit and escape the tavern?
                    </Button>

                    <Button onClick ={() => handleButtonClick('3')}>
                        3. Cast a spell to create a distraction and scatter the bandits?
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

export default Rogue3;