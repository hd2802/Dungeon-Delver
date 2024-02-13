import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/TrialCampaign.css';
import Button from '../../components/Button.js';

const Rogue23 = () => {
    return (
        <div id='outer-div'>
            <div id='left-hand-side'>
                <h1> Checking out the Hooded Figure </h1>
                <p class='text-box'>
                    You approach the hooded figure and begin to ask him questions. 

                    <p>
                        '...'
                        '...'
                        '...'
                    </p>
                </p>

                <p class='explaination-box'>
                    Mystery is often a key mechanic of D&D and is one that is explored frequently regardless of the tone or genre of the campaign.
                </p>
            </div>

            <div id='right-hand-side'>


                <Link to={'/barb-page-3'}>
                    <Button>
                        Continue
                    </Button>
                </Link>

            </div>
        </div>
    );
};

export default Rogue23;