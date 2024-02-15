import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/TrialCampaign.css';
import Button from '../../components/Button/Button.js';

const Rogue212 = () => {
    const [diceResult, setDiceResult] = useState(null);

    const handleRollDice = () => {
        const rollResult = Math.floor(Math.random() * 20) + 1;
        setDiceResult(rollResult);
    }

    const processDiceRoll = () => {
        if (diceResult < 8) {
            return (
                <div>
                    <p className='text-box'>
                        You state your case to the barkeep and refuse to pay. But he is not having any of it and makes you pay 1 gold.
                    </p>
                    <p className='text-box'>
                        -1 gold
                    </p>
                </div>
            );
        }
        else {
            return (
                <div>
                    <p className='text-box'>
                        You state your case and successfully persuade the barkeep that you do not need to pay him any gold!.
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
                    You stand your ground and refuse to pay for the ale that the barkeep has poured out for you.
                </p>

                <p class='explaination-box'>
                    The DM would often deicde what action requires what roll. 

                    <p>
                        As you are trying to persuade the barkeep to allow you to not pay, you would need to do what is known as 'Rolling a Persuasion Check'

                        <p>
                            This is simply rolling a D20 and adding what your character's persuasion skill bonus is. 

                            <p>
                                If your character is particularly good at persuasion then you may be able to add a number to whatever you roll from the dice.

                                <p>
                                    If your character is not so good at persuasion, they may not have any, or even have a negative, score added to their dice roll.
                                </p>
                            </p>
                        </p>
                    </p>
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
                        As you are a Rogue, you are proficient in Persuasion. 

                        <p>
                            As a result, the final result is {diceResult} + 2 = {diceResult + 2}.

                            <p>
                                To determine if you successfully passed the skill check, the DM has a number in their head known as the difficulty class of a task.
                                For example, opening a wooden door has a low DC whilst opening a tomb has a high DC. 

                                <p>
                                    Here, the DC of persuading the barkeep was a 10. 
                                </p>
                            </p>
                        </p>
                    </p>
                </p>
                {processDiceRoll()}

                <Link to={'/rogue-page-3'}>
                    <Button>
                        Continue
                    </Button>
                </Link>

            </div>
        </div>
    );
};

export default Rogue212;