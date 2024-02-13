import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button.js';
import '../styles/TrialCampaign.css';

const characters = [
    {
        name: 'Grommash Ironhide',
        race: 'Half-Orc',
        class: 'Barbarian',
        skills: 'Athletics, Intimidation',
        statistics: ''
    },

    {
        name: 'Aldric Spellweaver',
        race: 'Human',
        class: 'Wizard',
        skills: 'Arcana, Investigation',
        statistics: ''
    },

    {
        name: 'Elysia Shadowblade',
        race: 'Half-Elf',
        class: 'Rogue',
        skills: 'Stealth, Persuasion',
        statistics: ''
    }
]

const TrialCampaign = () => {

    const [selectedCharacterIndex, setSelectedCharacterIndex] = useState(0);
    const [characterChoice, setCharacterChoice] = useState(null);

    const handleButtonClick = (choice) => {
        setCharacterChoice(choice);
    };

    const handleCharacterRouter = () => {
        if (characterChoice === null) {
            console.log("null character")
        }
        else if (characterChoice === 'Half-Orc Barbarian') {
            return '/barb-page-1';
        } 
        else if (characterChoice === 'Human Wizard') {
            return '/wizard-page-1';
        }
        else if (characterChoice === 'Half-Elf Rogue') {
            console.log("fine here")
            return '/rogue-page-1';
        }
        return '/trial-campaign';
    }

    const handleCharacterChange = (direction) => {
        if (direction === 'next' && selectedCharacterIndex < characters.length - 1) {
            setSelectedCharacterIndex((prevIndex) => (prevIndex + 1) % characters.length);
        } else if (direction === 'prev' && selectedCharacterIndex > 0) {
            setSelectedCharacterIndex((prevIndex) => (prevIndex - 1 + characters.length) % characters.length);
        }
    }

    const selectedCharacter = characters[selectedCharacterIndex];

    return (
        <div id='outer-div'>
            <div id='left-hand-side'>
                <h1> Welcome to your first D&D adventure! </h1>
                <p class='text-box'>
                In the realm of Dungeons & Dragons, every grand journey commences with the creation of your character. This choice significantly influences your gameplay experience.

                As you embark on this character creation journey, keep in mind that every character must possess two fundamental aspects:
                    <ol>
                        <li>Class: This defines your character's chosen profession or calling, influencing their skills and abilities. </li>
                        <li>Race: Reflecting the diverse beings that inhabit the D&D world, your character's race adds a unique flavor to their identity.</li>
                    </ol>
                These two qualities are the cornerstone of creating a D&D character.
                </p>

                <div>
                    Image here?
                </div>

                <p class='text-box'>
                    To help you embark on this journey, there are a selection of pre-determined characters on the other side of the page for you to choose from.

                    <p>
                        Often, the class and race of a character changes how you can interact with the world around you, so it is encouraged to replay this camapign to get a feel of the different playstyles of the game.
                    </p>
                </p>

                <p class='text-box'>
                    Throughout the campaign: hovering over any words that you are unfamiliar with will lead to a description.
                </p>
            </div>

            <div id='right-hand-side'>
                <div class='character-page'>
                    <h4>{selectedCharacter.name}</h4>
                    <ul>
                            <li>Race: {selectedCharacter.race}</li>
                            <li>Class: {selectedCharacter.class}</li>
                            <li>Skills: {selectedCharacter.skills}</li>
                    </ul>
                    <Button onClick={() => handleButtonClick(`${selectedCharacter.race} ${selectedCharacter.class}`)}>
                        Select this Character
                    </Button>

                    {characterChoice && (
                        <p className='text-box'>
                            You have selected: {characterChoice}
                        </p>
                        )}
                </div>

                <div className='navigation-arrows'>
                    <button onClick={() => handleCharacterChange('prev')}>&lt;</button>
                    <button onClick={() => handleCharacterChange('next')}>&gt;</button>
                </div>

                <Link to={handleCharacterRouter()}>
                    <Button>
                        Continue
                    </Button>
                </Link>

            </div>
        </div>
    );
};

export default TrialCampaign;