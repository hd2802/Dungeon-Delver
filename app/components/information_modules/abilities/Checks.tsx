export default function Checks() {
    return (
        <div>
            <h1>Ability Checks</h1>
            <p>
                An ability check tests a character's or monster's innate talent and training in an effort to overcome a challenge.
                The DM calls for an ability check when a character attempts an action (other than an attack) that has a chance of failure.
                When the outcome is uncertain, the dice determine the results.
            </p>
            <p>
                For every ability check, the DM decides which of the six abilities is relevant to the task at hand and the difficulty of the task, represented by its Difficulty Class (DC).
            </p>
            <p>
                To make an ability check, roll a d20 and add the relevant ability modifier. 
                As with other d20 rolls, apply bonuses and penalties and compare the total to the DC. 
                If the total equals or exceeds the DC, the ability check is a success - the creature overcomes the challenge at hand.
                Otherwise, it is a failure, which means the character makes no progress towards the objective.
            </p>
            <p>
                Sometimes, the DM might ask for an ability check using a specific skill.
                Being proficient in a skill means that an individual can add their proficiency bonus to ability checks that involve that skill.
            </p>
        </div>
    )
}