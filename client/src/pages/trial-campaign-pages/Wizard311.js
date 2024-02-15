import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/TrialCampaign.css';
import Button from '../../components/Button/Button.js';

const Wizard311 = () => {
    const [diceResult, setDiceResult] = useState(null);

    const handleRollDice = () => {
        const rollResult = Math.floor(Math.random() * 20) + 1;
        setDiceResult(rollResult);
    }

    const processDiceRoll = () => {
        if (diceResult > 12) {
            return (
                <div>
                    <p className='explaination-box'>
                        The bandit hits you! You take 4 points of damage!
                    </p>
                    <p className='text-box'>
                        The bandit raises their weapon and swings down, just grazing your arm - enough to leave a mark. 
                    </p>
                    <p className='explaination-box'>
                        Health points (HP) are one of the most vital resources in D&D. 

                        <p>
                            If a character's HP reduces to 0 (or lower) they are unconcious and may die!
                        </p>
                    </p>
                </div>
            );
        }
        else {
            return (
                <div>
                    <p className='explaination-box'>
                        As your armor class is a 12, the bandit needs to roll a 12 or higher in order to hit you.
                    </p>
                    <p className='text-box'>
                        The bandit swings at you but you manage to dodge it quickly, before you come to any harm.
                    </p>
                    <p className='text-box'>
                        The bandit laughs as your weapon swings past his face. He does not look happy.
                    </p>
                </div>
            );
        }
    }

    return (
        <div id='outer-div'>
            <div id='left-hand-side'>
                <h1> Refusal </h1>
                <p class='text-box'>
                    The bandit raises their weapon up to swing at you!
                </p>
                <p className='explaination-box'>
                    Enemies undergo the same process as players in order to attack.
                </p>

                <p className='explaination-box'>
                    {handleRollDice()}
                    The bandit has rolled a {diceResult}.
                </p>
            </div>

            <div id='right-hand-side'>
                {processDiceRoll()}
                <Link to={'/campaign-end-bandit'}>
                    <Button>
                        Continue
                    </Button>
                </Link>

            </div>
        </div>
    );
};

export default Wizard311;