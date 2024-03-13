"use client";
import "../styles/TrialCampaign.css"
import Image from "next/image";
import React, { useState } from "react";
import barkeepImg from "../../public/images/barkeep.jpg";
import coinImg from "../../public/images/coin.jpg";
import mercenaryImg from "../../public/images/mercenaries.jpg";
import hoodedImg from "../../public/images/hooded.jpg";
import spellImg from "../../public/images/spell.jpg";
import banditImg from "../../public/images/bandit.jpg";
import cheersImg from "../../public/images/cheers.jpg";
import partyImg from "../../public/images/party.jpg";
import tavernImg from "../../public/images/tavern.jpg";
import dmImg from "../../public/images/dm.jpg";

export default function TrialCampaign() {
  const [currentScene, setCurrentScene] = useState("introduction");
  const [persuasionResult, setPersuasionResult] = useState<number | null>(null);
  const [intimidationResult, setIntimidationResult] = useState<number | null>(null);
  const [stealthResult, setStealthResult] = useState<number | null>(null);
  const [attackResult, setAttackResult] = useState<number | null>(null);
  const [damageResult, setDamageResult] = useState<number | null>(null);
  const [banditResult, setBanditResult] = useState<number | null>(null);

  const handleChoice = (scene: string) => {
    setCurrentScene(scene);
  };

  const rollDice = (sides: number, reason: string) => {
    const result = Math.floor(Math.random() * sides) + 1;

    switch (reason) {
      case "persuasion":
        setPersuasionResult(result);
        break;
      case "intimidation":
        setIntimidationResult(result);
        break;
      case "stealth":
        setStealthResult(result);
        break;
      case "attack":
        setAttackResult(result);
        break;
      case "damage":
        setDamageResult(result);
        break;
      case "bandit":
        setBanditResult(result);
        break;
      default:
        break;
    }
  };

  // Function that handles the different paths through the story
  const renderScene = () => {
    switch (currentScene) {
      case "introduction":
        return (
          <div className="outer-div">
              <div className="center-div">
              <h1 id="header-1">Your First Adventure!</h1>
              <p>
                {" "}
                Dungeons and Dragons is a vast and expansive game to learn how
                to play. But do not worry! It is often noted that the best way
                to learn how to play the game is simply by playing it.
              </p>
              <div className="image-div">
              <Image
                src={partyImg}
                alt="An adventuring party"
                width={400}>
              </Image>
              </div>
              <p>
                The following trial campaign serves as a mock encounter for you
                to experience. The aim is to introduce the key mechanics of D&D
                without being overwhelming.
              </p>
              <p>
                If there are certain ideas or mechanics that you do not fully
                understand yet, don't worry. There is a lot to learn about the
                game and a lot is learnt by playing.
              </p>
              <p>
                The campaign can also be played multiple times, with different
                choices leading to different paths - so feel free to replay!
              </p>
              <p>
                So, when you are ready adventurer, enter the world of Dungeons
                and Dragons.
              </p>
              <div className="one-button-div">
              <button onClick={() => handleChoice("start")}>
                Start Your Adventure!
              </button>
              </div>
            </div>
          </div>
        );
        
      // The starting case
      case "start":
        return (
          <div className="outer-div">
            <div className="center-div">
              <h1> The Adventure Begins ... </h1>
              <p>
                You find yourself in a tavern - the air thick with the scent of
                ale and the warmth of chatter among the patrons. 
              </p>
              <div className="image-div">
              <Image
                src={tavernImg}
                alt="A busy tavern"
                width={400}>
              </Image>
              </div>
              <p>
              The tavern
                appears to be as you'd expect for a village settlement, with the
                regular gaggle of tavern-goer characters attending. As you take
                in your surroundings, there are a few things that interest you:
              </p>
                <ol>
                  <li>
                    The barkeep: a grizzled man with a hearty laugh; polishing
                    glasses from behind the bar.
                  </li>
                  <li>
                    A group of mercenaries huddled on a small table, exchanging
                    tales and playing cards.
                  </li>
                  <li>
                    A mysterious hooded figure sitting alone in the corner -
                    occasionally reaching for his flagon of ale.
                  </li>
                </ol>
                <div className="button-div">
                  <button onClick={() => handleChoice("barkeep")}>
                    Talk to the Barkeep
                  </button>
                  <button onClick={() => handleChoice("mercenaries")}>
                    Approach the Mercenaries
                  </button>
                  <button onClick={() => handleChoice("hooded")}>
                    Investigate the Hooded Figure
                  </button>
                </div>
            </div>
          </div>
        );

      // path 1 - talking to the barkeep
      case "barkeep":
        return (
          <div className="outer-div">
            <div className="center-div">
              <h1> Talking to the Barkeep </h1>
              <p>
                You approach the barkeep - a beareded, towering giant of a human
                - who lets out a hearty laugh when you appraoch him.
              </p>
              <p>
                He immediately pours out some ale in a flagon for you, without
                asking.
              </p>
              <div className="image-div">
              <Image
                src={barkeepImg}
                alt="Barkeep"
                width={400}>
              </Image>
              </div>
              <p>"Coin?" He booms out.</p>
              <p>What would you like to do?</p>
              <div className="button-div">
                  <button onClick={() => handleChoice("pay")}>
                    Pay the Coin (-1 Gold)
                  </button>
                <button onClick={() => handleChoice("persuade")}>
                  Persuade Him
                </button>
              </div>
            </div>
          </div>
        );

      // path 1 - talking to the barkeep
      case "pay":
        return (
          <div className="outer-div">
            <div className="center-div">
              <h1> Paying the Gold </h1>
              <p>
                {" "}
                Reluctanctly, you reach your hand into your pocket and produce
                one gold coin for the barkeep.
              </p>
              <div className="image-div">
              <Image
                src={coinImg}
                alt="Coin"
                width={400}>
              </Image>
              </div>
              <div className="one-button-div">
              <button onClick={() => handleChoice("continue")}>Continue</button>
              </div>
            </div>
          </div>
        );

      // path 1 - talking to the barkeep
      case "persuade":
        return (
          <div className="outer-div">
            <div className="center-div">
              <h1> Persuasion Check </h1>
              <p>
                You smoothly attempt to convince the barkeep that you do not
                actually need to pay for the ale as you did not actually ask for
                it. He raises an eyebrow at you.
              </p>
              <div className="image-div">
              <Image
                src={barkeepImg}
                alt="Barkeep"
                width={400}>
              </Image>
              </div>
              <div className="one-button-div">
              <button onClick={() => rollDice(20, "persuasion")}>
                Roll
              </button>
              </div>
              {persuasionResult !== null && (
                <p> Your roll: {persuasionResult}</p>
              )}

              {persuasionResult !== null && persuasionResult >= 10 && (
                <p>
                  {" "}
                  You watch closely as the barkeep's face eases. He seems
                  convinced of your argument.
                  <br></br>
                  <br></br>
                  "Alright" He gruffs. "On your way".
                </p>
              )}
              {persuasionResult !== null && persuasionResult < 10 && (
                <p>
                  The barkeep does not look convinced.
                  <br></br>
                  <br></br>
                  "One gold". He grunts.
                  <br></br>
                  <br></br>
                  You reluctantly hand over the gold (-1 Gold).
                </p>
              )}
              {persuasionResult !== null && (
                <div className="one-button-div">
                <button onClick={() => handleChoice("continue")}>
                  Continue
                </button>
                </div>
              )}
            </div>
          </div>
        );

      // path 2 - mercenaries
      case "mercenaries":
        return (
          <div className="outer-div">
            <div className="center-div">
              <h1> Mercenaries </h1>
              <p>
                You awkwardly shuffle over to near where the mercenaries are
                chatting and laughing. As you get closer, you notice that they
                all bear a familiar sigil on their upper-arms. One that you
                recognise as being part of the Guild - a loose band of
                criminals.
              </p>

              <p>They then notice that you are staring at them.</p>
              <div className="image-div">
              <Image
                src={mercenaryImg}
                alt="Mercenaries"
                width={400}>
              </Image>
              </div>

              <p>
                A gaggle of shouts and jeers approach your way as one of the
                mercenaries stands up, in an attempt to intimidate you.
              </p>
              <p>What do you do?</p>

              <div className="button-div">
                <button onClick={() => handleChoice("intimidate")}>
                  Attempt to Intimidate the Mercenaries Back
                </button>
                <button onClick={() => handleChoice("spell")}>
                  Cast a Spell to Cause a Distraction
                </button>
              </div>
            </div>
          </div>
        );

      // path 2 - mercenaries
      case "intimidate":
        return (
          <div className="outer-div">
            <div className="center-div">
              <h1> Intimidation Check </h1>
              <p>
                As the mercenary approaches you, you feel your heart beat
                rising. You choke back your fear and square up to the bandit,
                attempting to intimidate him.
              </p>
              <div className="image-div">
              <Image
                src={mercenaryImg}
                alt="Mercenaries"
                width={400}>
              </Image>
              </div>
              <div className="one-button-div">
              <button onClick={() => rollDice(20, "intimidation")}>
                Roll for Intimidation
              </button>
              </div>
              {intimidationResult !== null && (
                <p> Your roll: {intimidationResult}</p>
              )}

              {intimidationResult !== null && intimidationResult >= 10 && (
                <p>
                  {" "}
                  The mercenary appears to be shaken up by your attempt to scare
                  him. He slowly backs down, to dissapointed chatter from his
                  criminal friends.
                  <br></br>
                  <br></br>
                </p>
              )}
              {intimidationResult !== null && intimidationResult < 10 && (
                <p>
                  The mercenary does not look convinced of your attempt to scare
                  him. He approaches closer to you.
                  <br></br>
                  <br></br>
                  "On your way then". He grunts at you.
                  <br></br>
                  <br></br>
                  You decide that its better to not aggrevate a large criminal
                  group and walk away.
                </p>
              )}
              {intimidationResult !== null && (
                <div className="one-button-div">
                <button onClick={() => handleChoice("continue")}>
                  Continue
                </button>
                </div>
              )}
            </div>
            </div>
        );

      // path 2 - mercenaries
      case "spell":
        return (
          <div className="outer-div">
            <div className="center-div">
              <h1> Casting a Spell </h1>
              <p>
                As the mercenary approaches closer, you reach into the depths of
                your being and begin shouting an incantation.
              </p>
              <div className="image-div">
              <Image
                src={spellImg}
                alt="Casting a Spell"
                width={400}>
              </Image>
              </div>
              <p>
                As you speak, the tavern begins to fall into mayhem, as if there
                was a small tornado ripping through it. Flagons of ale start
                flying through the air and the shutters on the windows flap
                rapidly.
              </p>
              <p>
                The mercenaries looks confused to this development and back down
                quickly, as you ease off on the spell. That seemed to have
                worked.
              </p>
              <div className="one-button-div">
              <button onClick={() => handleChoice("continue")}>Continue</button>
              </div>
            </div>
          </div>
        );

      // path 3 - hooded figure
      case "hooded":
        return (
          <div className="outer-div">
            <div className="center-div">
              <h1> Hooded Figure </h1>
              <p>
                You begin to study the hooded figure in the corner of the room.
                You notice that he is not talking to anyone, but is often
                looking down at a piece of paper that is in his lap.
              </p>
              <div className="image-div">
              <Image
                src={hoodedImg}
                alt="Hooded Figure"
                width={400}>
              </Image>
              </div>
              <p> What would you like to do?</p>
              <div className="button-div">
                <button onClick={() => handleChoice("stealth")}>
                  Sneak Around the Figure
                </button>
                <button onClick={() => handleChoice("speak")}>
                  Speak to the Hooded Figure
                </button>
              </div>
            </div>
          </div>
        );

      // path 3 - hooded figure
      case "stealth":
        return (
          <div className="outer-div">
            <div className="center-div">
              <h1> Stealth Check </h1>
              <p>
                You attempt to sneak around the hooded figure, to try and catch
                a glance of the paper that he is constantly checking.
              </p>
              <div className="image-div">
              <Image
                src={hoodedImg}
                alt="Hooded Figure"
                width={400}>
              </Image>
              </div>
              <div className="one-button-div">
              <button onClick={() => rollDice(20, "stealth")}>
                Roll for Stealth
              </button>
              </div>
              {stealthResult !== null && <p> Your roll: {stealthResult}</p>}

              {stealthResult !== null && stealthResult >= 10 && (
                <p>
                  {" "}
                  You manage to take a peak at the piece of paper and you notice
                  that it is a message from someone - a lover!
                  <br></br>
                  <br></br>
                  You decide that it is not your place to read the note and move
                  on.
                </p>
              )}
              {stealthResult !== null && stealthResult < 10 && (
                <p>
                  The hooded figure notices you attempting to peak at the piece
                  of paper and immediately snatches it out of view.
                  <br></br>
                  <br></br>
                  He murmurs something under his breath and you notice that he
                  looks anxious.
                  <br></br>
                  <br></br>
                  You decide to leave him to it.
                </p>
              )}
              {stealthResult !== null && (
                <div className="one-button-div">
                <button onClick={() => handleChoice("continue")}>
                  Continue
                </button>
                </div>
              )}
            </div>
          </div>
        );

      // path 3 - hooded figure
      case "speak":
        return (
          <div className="outer-div">
            <div className="center-div">
              <h1> Speaking to the Hooded Figure </h1>
              <p>
                You decide to speak to the hooded figure. As you approach the
                table he is sitting on, he immediately starts speaking to you,
                in an anxious and frantic manner.
              </p>
              <div className="image-div">
              <Image
                src={hoodedImg}
                alt="Hooded Figure"
                width={400}>
              </Image>
              </div>
              <p> "Are you the one?" He blurts out. </p>
              <p> He notices the confused look on your face.</p>
              <p>
                {" "}
                "Are you my secret admirer?" He asks, taking off his hood.
                Underneath the hood is a mass of grey hair and a long grey
                beard.
              </p>
              <p>
                {" "}
                Noticing the puzzled look on your face, he apologises as he
                realises that you are clearly not the secret admirer that he is
                looking for.
              </p>
              <div className="one-button-div">
              <button onClick={() => handleChoice("continue")}>Continue</button>
              </div>
            </div>
          </div>
        );

      // default path - battle
      case "continue":
        return (
          <div className="outer-div">
            <div className="center-div">
              <h1> Trouble Ahead </h1>
              <p>
                {" "}
                As you finish your mingling with the patrons and situate
                yourself at a table, a bandit bursts throught the doors of the
                tavern.
              </p>
              <div className="image-div">
              <Image
                src={banditImg}
                alt="a Bandit"
                width={400}>
              </Image>
              </div>
              <p> "STAY CALM. I JUST NEED ALL YOUR COIN." He shouts out.</p>
              <p>
                {" "}
                You notice that he is brandishing a club and a bag, to place all
                his loot. The tavern falls silent as everyone is startled by the
                him.
              </p>
              <p>
                {" "}
                Before you can do anything else, your instincts kick in and you
                stand up - ready to defend the patrons and yourself against the
                bandit.
              </p>
              <div className="one-button-div">
              <button onClick={() => handleChoice("attack")}>Continue</button>
              </div>
            </div>
          </div>
        );

      // default path - battle
      case "attack":
        return (
          <div className="outer-div">
            <div className="center-div">
              <h1> Attacking! </h1>
              <p>
                You raise your sword above your head, shout out a war-cry and
                attempt to strike the bandit.
              </p>
              <div className="image-div">
              <Image
                src={banditImg}
                alt="a Bandit"
                width={400}>
              </Image>
              </div>
              <div className="one-button-div">
              <button onClick={() => rollDice(20, "attack")}>
                Roll to Attack!
              </button>
              </div>
              {attackResult !== null && <p> Your roll: {attackResult}</p>}

              {attackResult !== null && attackResult >= 10 && (
                <div>
                  <p>
                    {" "}
                    You manage to slam your blade down onto the bandit. It hits
                    his thick armour but the blunt force of it appears to have
                    hurt him still.
                  </p>
                  <div className="one-button-div">
                  <button onClick={() => rollDice(8, "damage")}>
                    Roll Damage!
                  </button>
                  </div>
                  {damageResult !== null && (
                    <div>
                      <p> You deal {damageResult} damage to the bandit!</p>
                      <div className="one-button-div">
                      <button onClick={() => handleChoice("hitback")}>
                        Continue
                      </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
              {attackResult !== null && attackResult < 10 && (
                <p>
                  You manage to miss the bandit, your blade just missing his
                  body and landing on the floor near to his foot.
                  <br></br>
                  <br></br>
                  He mutters at you and looks angry.
                  <br></br>
                  <br></br>
                  <div className="one-button-div">
                  <button onClick={() => handleChoice("hitback")}>
                    Continue
                  </button>
                  </div>
                </p>
              )}
            </div>
          </div>
        );

      case "hitback":
        return (
          <div className="outer-div">
            <div className="center-div">
              <h1> The Bandit Strikes Back </h1>
              <p>
                {" "}
                The bandit looks angry that anyone would dare come between him
                and his precious coin.
              </p>
              <div className="image-div">
              <Image
                src={banditImg}
                alt="a Bandit"
                width={400}>
              </Image>
              </div>
              <p> He attempts to hit you back. </p>
              <div className="one-button-div">
              <button onClick={() => rollDice(20, "bandit")}>
                Brace yourself!
              </button>
              </div>
              {banditResult !== null && <p> Roll: {banditResult}</p>}

              {banditResult !== null && banditResult <= 10 && (
                <div>
                  <p>
                    {" "}
                    You manage to skillfully dodge the bandit's attack - making
                    him even more angry
                  </p>
                  <div className="one-button-div">
                  <button onClick={() => handleChoice("end")}>Continue</button>
                  </div>
                </div>
              )}
              {banditResult !== null && banditResult > 10 && (
                <p>
                  The bandit strikes you on the shoulder, paining your arm.
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <div className="one-button-div">
                  <button onClick={() => handleChoice("end")}>Continue</button>
                  </div>
                </p>
              )}
            </div>
          </div>
        );
      case "end":
        return (
          <div className="outer-div">
            <div className="center-div">
              <h1> Bandit Defeated </h1>
              <p>
                {" "}
                After the duel that you and the bandit have just completed - the
                rest of the tavern is still shocked into silence. The bandit
                looks embarassed for having cause a scene and decides that it is
                more hassle than it is worth to rob this tavern. The patrons
                erupt into cheers for your valiant effort.
              </p>
              <div className="image-div">
              <Image
                src={cheersImg}
                alt="Two mugs of ale cheersing together"
                width={400}>
              </Image>
              </div>
              <p>
                Or at least, that's what you think it is. Before you realise
                that they are outraged that you have caused such a disturbance
                and, before you know it, you are being kicked out of the
                tavern...
              </p>
              <div className="one-button-div">
              <button onClick={() => handleChoice(" ")}>Conclusion</button>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="outer-div">
            <div className="center-div">
              <h1> Your First Adventure! </h1>
              <p> Thus concludes your first D&D adventure!</p>
              <p>
                {" "}
                Well done, adventurer. That served as a taste for typical Dungeons and Dragons gameplay. Your Dungeon Master presents you with a scene and you
                can explore and navigate that scene however you like, within the rules of the game. 
              </p>
              <div className="image-div">
              <Image
                src={dmImg}
                alt="A Dungeon Master with an adventuring party behind them"
                width={400}>
              </Image>
              </div>
              <p>
                {" "}
                While the campaign serves as an introduction to mechanics and
                gameplay, there are still many other things to learn about the
                game. Follow the pathway below to continue your introduction to
                D&D or, replay the campaign to discover the alternative pathways through the adventure.
              </p>
              <div className="one-button-div">
              <button onClick={() => handleChoice("start")}>Replay!</button>
              </div>
            </div>
          </div>
        );
    }
  };
  
  // Call to renderScene() - renders the page and the relevant content
  return <div>{renderScene()}</div>;
}