import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/TrialCampaign.css';
import Button from '../../components/Button/Button.js';

const Rogue31 = () => {
    const [diceResult, setDiceResult] = useState(null);

    const handleRollDice = () => {
        const rollResult = Math.floor(Math.random() * 20) + 1;
        setDiceResult(rollResult);
    }

    const processDiceRoll = () => {
        if (diceResult > 6) {
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
                    Because you're a Rogue, you are average at hitting people with weapons. As such, you do not have any bonuses or penalties to your roll.
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
                            The final result is {diceResult} = {diceResult}.
                    </p>
                </p>

                {processDiceRoll()}

                <Link to={'/rogue-page-3-1-1'}>
                    <Button>
                        Continue
                    </Button>
                </Link>

            </div>
        </div>
    );
};

export default Rogue31;