import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/TrialCampaign.css';
import Button from '../../components/Button.js';

const Wizard31 = () => {
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
                        You have successfully hit the bandit! Now you need to roll for damage - to determine how hard you have hit them.
                    </p>
                </div>
            );
        }
        else {
            return (
                <div>
                    <p className='explaination-box'>
                        You have attempted to hit the bandit but have missed!
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
                    You draw your weapon, raise it and charge towards the bandit!
                </p>
                <p className='explaination-box'>
                    You have chosen to fight!

                    <p>
                        Before you determine how hard you hit the bandit, you need to 'roll for attack'. This determines whether you hit the bandit or if you fail sepctacularly.
                    </p>
                </p>

                <p className='explaination-box'>
                    Because you're a Wizard, you do not excel at hitting people with big weapons. As such, you take a -2 penalty to your attack roll.
                </p>
            </div>

            <div id='right-hand-side'>
                <div>
                    <p className='text-box'>
                        Roll a d20.
                    </p>
                </div>

                <Button onClick = {handleRollDice}>
                    Roll
                </Button>

                <p className='explaination-box'>
                {diceResult !== null ? `You rolled a ${diceResult}.` : ''}
                    <p>
                            The final result is {diceResult} - 2 = {diceResult - 2}.
                    </p>
                </p>

                {processDiceRoll()}

                <Link to={'/wizard-page-3-1-1'}>
                    <Button>
                        Continue
                    </Button>
                </Link>

            </div>
        </div>
    );
};

export default Wizard31;