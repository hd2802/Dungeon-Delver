import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/TrialCampaign.css';
import Button from '../../components/Button.js';

const Wizard33 = () => {

    return (
        <div id='outer-div'>
            <div id='left-hand-side'>
                <h1> Spellcasting! </h1>
                <p class='text-box'>
                    You raise your hand high up into the air - palms spread - chanting an invocation

                    <p>
                        The shutters on the windows start rapidly flapping and all flagons of ale are whipped around the room - as if a little tornado has formed in the room and you are at the center.
                    </p>
                </p>
                <p className='explaination-box'>
                    Only certain character classes (and sometimes races) can cast spells in D&D. As you are a wizard, you can cast a wide range of spells.
                </p>

            </div>

            <div id='right-hand-side'>
                <div>
                    <p className='text-box'>
                        The patrons and the bandit are confused and you are able to slip out of the door before you are noticed.
                    </p>
                    <Link to={'/campaign-end-stealth'}>
                        <Button>
                            Continue
                        </Button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Wizard33;