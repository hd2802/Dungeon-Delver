import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button.js';
import '../../styles/TrialCampaign.css';


const CampaignEndBandit = () => {
    return (
        <div id='outer-div'>
            <div id='left-hand-side'>
                <h1> Happy Ending? </h1>
                <p class='text-box'>
                    You waltz off into the sunset, oblivious of the tavern and its consequences.

                    <p>
                        But have you made the right decision?
                    </p>
                </p>
            </div>

            <div id='right-hand-side'>
                <p className='explaination-box'>
                    And thus concludes your first D&D campaign.

                    <p>
                        The game of D&D is not too dismilar to this trial campaign. It is worth noting that a lot of D&D learning comes through experience, so gather your friends and try a story!
                    </p>
                </p>

                <Link to={'/trial-campaign'}>
                    <Button>
                        Back to the Start
                    </Button>
                </Link>

            </div>
        </div>
    );
};

export default CampaignEndBandit;