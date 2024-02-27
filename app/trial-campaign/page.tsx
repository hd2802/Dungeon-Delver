"use client";
import "../styles/TrialCampaign.css";
import React, { useState } from "react";

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

  const renderScene = () => {
    switch (currentScene) {
      case "introduction":
        return (
          <div className="outer-div">
            <div className="left-hand-div">
              <h1> Your First Adventure!</h1>
              <p>
                {" "}
                Dungeons and Dragons is a vast and expansive game to learn how
                to play. But do not worry! It is often noted that the best way
                to learn how to play the game is simply by playing it.
              </p>
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
              <button onClick={() => handleChoice("start")}>
                Start Your Adventure!
              </button>
            </div>
            <div className="right-hand-div">
              <div className="card">
                These tooltips will provide further information about key D&D mechanics that you will encounter.
              </div>
            </div>
          </div>
        );
      // The starting case
      case "start":
        return (
          <div className="outer-div">
            <div className="left-hand-div">
              <h1> The Adventure Begins ... </h1>
              <p>
                You find yourself in a tavern - the air thick with the scent of
                ale and the warmth of chatter among the patrons. The tavern
                appears to be as you'd expect for a village settlement, with the
                regular gaggle of tavern-goer characters attending. As you take
                in your surroundings, there are a few things that interest you:
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
                What would you like to do?
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
              </p>
            </div>
            <div className="right-hand-div">
              <div className="card"> 
                  The Dungeon Master will often present you an environment that you can explore freely. 

                  The DM will often highlight areas of interest but you can investigate and interact with anything in a scene.
              </div>
            </div>
          </div>
        );

      // path 1 - talking to the barkeep
      case "barkeep":
        return (
          <div>
            <div className="left-hand-div">
              <h1> Talking to the Barkeep </h1>
              <p>
                You approach the barkeep - a beareded, towering giant of a human
                - who lets out a hearty laugh when you appraoch him.
              </p>
              <p>
                He immediately pours out some ale in a flagon for you, without
                asking.
              </p>
              <p>"Coin?" He booms out.</p>
              <p>What would you like to do?</p>
              <div className="button-div">
                <button onClick={() => handleChoice("pay")}>
                  Pay the Coin (-1 Gold)
                </button>
                <button onClick={() => handleChoice("persuade")}>
                  Persuade Him That You Don't Need to Pay
                </button>
              </div>
            </div>
            <div className="right-hand-div">
              <div className="card"> 
                  Different choices lead to different outcomes, which you can navigate as you please. If this was a real game of D&D, you would
                  have a wider range of options that you can choose from - as far as your imagination would take you.
              </div>
            </div>
          </div>
        );

      // path 1 - talking to the barkeep
      case "pay":
        return (
          <div>
            <div className="left-hand-div">
              <h1> Paying the Gold </h1>
              <p>
                {" "}
                Reluctanctly, you reach your hand into your pocket and produce
                one gold coin for the barkeep.
              </p>
              <button onClick={() => handleChoice("continue")}>Continue</button>
            </div>
            <div className="right-hand-div">
              <div className="card"> 
                  The D&D world has currency. Currency allows you to buy a wide range of items, from ale to armour.
              </div>
            </div>
          </div>
        );

      // path 1 - talking to the barkeep
      case "persuade":
        return (
          <div>
            <div className="left-hand-div">
              <h1> Persuasion Check </h1>
              <p>
                You smoothly attempt to convince the barkeep that you do not
                actually need to pay for the ale as you did not actually ask for
                it. He raises an eyebrow at you.
              </p>
              <button onClick={() => rollDice(20, "persuasion")}>
                Roll for Persuasion
              </button>
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
                <button onClick={() => handleChoice("continue")}>
                  Continue
                </button>
              )}
            </div>
            <div className="right-hand-div">
              <div className="card"> 
                  Here you have triggered a skill check.
                  <br></br>
                  <br>
                  </br>
                  D&D is based around abilities - that is, how good your character is at a specific skill. Everything is decided by a dice roll, but if your character is particularly good at a skill, they will be able to add a number to the result of the roll - or take a number away if they are particularly bad!
              </div>
            </div>
          </div>
        );

      // path 2 - mercenaries
      case "mercenaries":
        return (
          <div>
            <div className="left-hand-div">
              <h1> Mercenaries </h1>
              <p>
                You awkwardly shuffle over to near where the mercenaries are
                chatting and laughing. As you get closer, you notice that they
                all bear a familiar sigil on their upper-arms. One that you
                recognise as being part of the Guild - a loose band of
                criminals.
              </p>

              <p>They then notice that you are staring at them.</p>

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
            <div className="right-hand-div">
              <div className="card"> 
                  Different choices lead to different outcomes, which you can navigate as you please. If this was a real game of D&D, you would
                  have a wider range of options that you can choose from - as far as your imagination would take you.
              </div>
            </div>
          </div>
        );

      // path 2 - mercenaries
      case "intimidate":
        return (
          <div>
            <div className="left-hand-div">
              <h1> Intimidation Check </h1>
              <p>
                As the mercenary approaches you, you feel your heart beat
                rising. You choke back your fear and square up to the bandit,
                attempting to intimidate him.
              </p>
              <button onClick={() => rollDice(20, "intimidation")}>
                Roll for Intimidation
              </button>
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
                <button onClick={() => handleChoice("continue")}>
                  Continue
                </button>
              )}
            </div>
            <div className="right-hand-div">
            <div className="card"> 
                  Here you have triggered a skill check.
                  <br></br>
                  <br>
                  </br>
                  D&D is based around abilities - that is, how good your character is at a specific skill. Everything is decided by a dice roll, but if your character is particularly good at a skill, they will be able to add a number to the result of the roll - or take a number away if they are particularly bad!
              </div>
            </div>
            </div>
        );

      // path 2 - mercenaries
      case "spell":
        return (
          <div>
            <div className="left-hand-div">
              <h1> Casting a Spell </h1>
              <p>
                As the mercenary approaches closer, you reach into the depths of
                your being and begin shouting an incantation.
              </p>
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
              <button onClick={() => handleChoice("continue")}>Continue</button>
            </div>
            <div className="right-hand-div">
              <div className="card"> 
                  Spellcasting is a feature that is available to certain classes. There is a wide range of spells that allow you to do different things: from attacking an enemy to magically altering your appearance.
              </div>
            </div>
          </div>
        );

      // path 3 - hooded figure
      case "hooded":
        return (
          <div>
            <div className="left-hand-div">
              <h1> Hooded Figure </h1>
              <p>
                You begin to study the hooded figure in the corner of the room.
                You notice that he is not talking to anyone, but is often
                looking down at a piece of paper that is in his lap.
              </p>
              <p> What would you like to do?</p>
              <div className="button-div">
                <button onClick={() => handleChoice("stealth")}>
                  Sneak Around the Figure and Try to See What He is Looking At
                </button>
                <button onClick={() => handleChoice("speak")}>
                  Speak to the Hooded Figure
                </button>
              </div>
            </div>
            <div className="right-hand-div">
              <div className="card"> 
                  Different choices lead to different outcomes, which you can navigate as you please. If this was a real game of D&D, you would
                  have a wider range of options that you can choose from - as far as your imagination would take you.
              </div>
            </div>
            
          </div>
        );

      // path 3 - hooded figure
      case "stealth":
        return (
          <div>
            <div className="left-hand-div">
              <h1> Stealth Check </h1>
              <p>
                You attempt to sneak around the hooded figure, to try and catch
                a glance of the paper that he is constantly checking.
              </p>
              <button onClick={() => rollDice(20, "stealth")}>
                Roll for Stealth
              </button>
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
                <button onClick={() => handleChoice("continue")}>
                  Continue
                </button>
              )}
            </div>
            <div className="right-hand-div">
            <div className="card"> 
                  Here you have triggered a skill check.
                  <br></br>
                  <br>
                  </br>
                  D&D is based around abilities - that is, how good your character is at a specific skill. Everything is decided by a dice roll, but if your character is particularly good at a skill, they will be able to add a number to the result of the roll - or take a number away if they are particularly bad!
              </div>
            </div>
          </div>
        );

      // path 3 - hooded figure
      case "speak":
        return (
          <div>
            <div className="left-hand-div">
              <h1> Speaking to the Hooded Figure </h1>
              <p>
                You decide to speak to the hooded figure. As you approach the
                table he is sitting on, he immediately starts speaking to you,
                in an anxious and frantic manner.
              </p>
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
              <button onClick={() => handleChoice("continue")}>Continue</button>
            </div>
          </div>
        );

      // default path - battle
      case "continue":
        return (
          <div>
            <div className="left-hand-div">
              <h1> Trouble Ahead </h1>
              <p>
                {" "}
                As you finish your mingling with the patrons and situate
                yourself at a table, a bandit bursts throught the doors of the
                tavern.
              </p>
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
              <button onClick={() => handleChoice("attack")}>Continue</button>
            </div>
            <div className="right-hand-div">
            <div className="card"> 
                  Not everything is peaceful in D&D. Often, there are creatures and beings that want to attack you, and sometimes there are creatures and beings that you will want to attack.
              </div>
            </div>
          </div>
        );

      // default path - battle
      case "attack":
        return (
          <div>
            <div className="left-hand-div">
              <h1> Attacking! </h1>
              <p>
                You raise your sword above your head, shout out a war-cry and
                attempt to strike the bandit.
              </p>
              <button onClick={() => rollDice(20, "attack")}>
                Roll to Attack!
              </button>
              {attackResult !== null && <p> Your roll: {attackResult}</p>}

              {attackResult !== null && attackResult >= 10 && (
                <div>
                  <p>
                    {" "}
                    You manage to slam your blade down onto the bandit. It hits
                    his thick armour but the blunt force of it appears to have
                    hurt him still.
                  </p>
                  <button onClick={() => rollDice(8, "damage")}>
                    Roll Damage!
                  </button>
                  {damageResult !== null && (
                    <div>
                      <p> You deal {damageResult} damage to the bandit!</p>
                      <button onClick={() => handleChoice("hitback")}>
                        Continue
                      </button>
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
                  <button onClick={() => handleChoice("hitback")}>
                    Continue
                  </button>
                </p>
              )}
            </div>
            <div className="right-hand-div">
            <div className="card"> 
                  Attack is based on the attacker rolling a D-20, that is, a 20 sided dice. Every character has an armour class (AC) - a number that denotes how tough they are to hit.
                  If an attacker attempts to hit someone with an armour class of 15 and they roll a 14, the attack misses! <br></br><br></br>
                  Only after an attack hits do you roll another dice to determine how much damage that you do to a character, or how many health points you take away.
              </div>
            </div>
          </div>
        );

      case "hitback":
        return (
          <div>
            <div className="left-hand-div">
              <h1> The Bandit Strikes Back </h1>
              <p>
                {" "}
                The bandit looks angry that anyone would dare come between him
                and his precious coin.
              </p>
              <p> He attempts to hit you back. </p>
              <button onClick={() => rollDice(20, "bandit")}>
                Brace yourself!
              </button>
              {banditResult !== null && <p> Your roll: {banditResult}</p>}

              {banditResult !== null && banditResult >= 10 && (
                <div>
                  <p>
                    {" "}
                    You manage to skillfully dodge the bandit's attack. Making
                    him even more angry
                  </p>
                  <button onClick={() => handleChoice("end")}>Continue</button>
                </div>
              )}
              {banditResult !== null && banditResult < 10 && (
                <p>
                  The bandit strikes you on the shoulder, paining your arm.
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <button onClick={() => handleChoice("end")}>Continue</button>
                </p>
              )}
            </div>
            <div className="right-hand-div">
            <div className="card"> 
                  Much like how you had to roll to attack the bandit, the bandit has to roll a dice to determine if he hits you.
              </div>
            </div>
          </div>
        );
      case "end":
        return (
          <div>
            <div className="left-hand-div">
              <h1> Bandit Defeated </h1>
              <p>
                {" "}
                After the duel that you and the bandit have just completed - the
                rest of the tavern is still shocked into silence. The bandit
                looks embarassed for having cause a scene and decides that it is
                more hassle than it is worth to rob this tavern. The patrons
                erupt into cheers for your valiant effort.
              </p>
              <p>
                Or at least, that's what you think it is. Before you realise
                that they are outraged that you have caused such a disturbance
                and, before you know it, you are being kicked out of the
                tavern...
              </p>
              <button onClick={() => handleChoice(" ")}>Conclusion</button>
            </div>
            <div className="right-hand-div">
            <div className="card"> 
                  You have just had your first experience of D&D combat! There is a lot to take in but it is easily absorbed with experience.
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="outer-div">
            <div className="left-hand-div">
              <h1> Your First Adventure! </h1>
              <p> Thus concludes your first D&D adventure!</p>
              <p>
                {" "}
                Hopefully you have learnt some of the core mechanics of the game
                or atleast enjoyed your first adventure.
              </p>
              <p>
                {" "}
                While the campaign serves as an introduction to mechanics and
                gameplay, there are still many other things to learn about the
                game. Follow the pathway below to continue your introduction to
                D&D or, replay the campaign!
              </p>
              <button onClick={() => handleChoice("start")}>Replay!</button>
            </div>
            <div className="right-hand-div">
            <div className="card"> 
                  Links:
              </div>
            </div>
          </div>
        );
    }
  };

  return <div>{renderScene()}</div>;
}
