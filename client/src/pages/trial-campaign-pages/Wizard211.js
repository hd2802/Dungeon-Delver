import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/TrialCampaign.css';
import Button from '../../components/Button.js';

const Wizard211 = () => {
    return (
        <div id='outer-div'>
            <div id='left-hand-side'>
                <h1> The Adventure Begins ... </h1>
                <p class='text-box'>
                    You reluctantly hand over 1 gold piece.

                </p>

                <p class='explaination-box'>
                    The world of D&D uses currency not too disimilar from our real world.

                    Your character will have a tally of what number of which currencies that they are carrying with them at every point.

                    <p>
                        Currency is important as it allows you to purchase items such as armour, weapons, potions e.t.c. 
                    </p>
                </p>
            </div>

            <div id='right-hand-side'>
                <div>
                    <p className='text-box'>
                        Minus 1 gold piece
                    </p>
                </div>
                <Link to={'/wizard-page-3'}>
                    <Button>
                        Continue
                    </Button>
                </Link>

            </div>
        </div>
    );
};

export default Wizard211;