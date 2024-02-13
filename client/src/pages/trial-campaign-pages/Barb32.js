import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/TrialCampaign.css';
import Button from '../../components/Button.js';

const Barb32 = () => {
    const [diceResult, setDiceResult] = useState(null);

    const handleRollDice = () => {
        const rollResult = Math.floor(Math.random() * 20) + 1;
        setDiceResult(rollResult);
    }

    const processDiceRoll = () => {
        if (diceResult > 12) {
            return (
                <div>
                    <p className='text-box'>
                        You have sucecssfully snuck around the bandit and make your way to the town to safety!
                    </p>

                    <Link to={'/campaign-end-stealth'}>
                        <Button>
                            Continue
                        </Button>
                    </Link>
                </div>
            );
        }
        else {
            return (
                <div>
                    <p className='text-box'>
                        The bandit has spotted you and has initated combat with you!
                    </p>

                    <Link to={'/barb-page-3-1'}>
                        <Button>
                            Continue
                        </Button>
                    </Link>
                </div>

            );
        }
    }

    return (
        <div id='outer-div'>
            <div id='left-hand-side'>
                <h1> Sneak </h1>
                <p class='text-box'>
                    You hunch over, pulling your cloak over your eyes and attempt to sneak past the bandit and into the night.
                </p>
                <p className='explaination-box'>
                    You have chosen to be sneaky and escape.

                    <p>
                        This requires a stealth roll, to determine whether or not you are seen by the bandit. 
                    </p>
                </p>

                <p className='explaination-box'>
                    Because you're a Barbarian, you are not so good at stealth. So you take a -2 penalty to your roll.
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

            </div>
        </div>
    );
};

export default Barb32;