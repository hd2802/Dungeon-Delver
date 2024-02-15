import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/TrialCampaign.css';
import Button from '../../components/Button/Button.js';

const Rogue22 = () => {
    return (
        <div id='outer-div'>
            <div id='left-hand-side'>
                <h1> Checking out the Mercenaries </h1>
                <p class='text-box'>
                    You approach the mercenaries, making sure that they won't notice what you are doing.

                    <p>
                        You overhear the mercenaries talking about how the tavern is to be ambushed soon by one of their companions.
                    </p>
                </p>

                <p class='explaination-box'>
                    Exploration often offers rewards in D&D. These such rewards can be material or information - that will help you out at later points in the campaign.
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

export default Rogue22;