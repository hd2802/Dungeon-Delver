import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/TrialCampaign.css';
import Button from '../../components/Button/Button.js';

const Rogue33 = () => {
    const [diceResult, setDiceResult] = useState(null);

    const handleRollDice = () => {
        const rollResult = Math.floor(Math.random() * 20) + 1;
        setDiceResult(rollResult);
    }

    return (
        <div id='outer-div'>
            <div id='left-hand-side'>
                <h1> Spellcasting! </h1>
                <p class='text-box'>
                    You raise your hand high up into the air - palms spread - chanting an invocation

                    <p>
                        That is, before you realise that you do not know any spells.
                    </p>
                </p>
                <p className='explaination-box'>
                    Only certain character classes (and sometimes races) can cast spells in D&D. As you are a Rogue who is a Half-Elf, you cannot cast any spells.
                </p>

            </div>

            <div id='right-hand-side'>
                <div>
                    <p className='text-box'>
                        The patrons and the bandit themselves are confused by what you have just done.

                        The bandit turns to you, enraged.
                    </p>
                    <Link to={'/rogue-page-3-1'}>
                        <Button>
                            Continue
                        </Button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Rogue33;