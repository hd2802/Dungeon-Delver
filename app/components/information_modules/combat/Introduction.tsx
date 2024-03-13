export default function combatIntroduction() {
    return (
        <div>
            <h1> Combat </h1>
            <p>
                A typical combat encounter is clash between two sides, a flurry of weapon swings, feints, parries, footwork and spellcasting.
                The game organises the chaos of combat into a cycle of rounds and turns.
                A <b>round</b> represents about 6 seconds in the game world.
                During a round, each participant in a battle takes a turn <b>turn</b>.
                The order of turns is determined at the beginning of a combat encounter, when everyone rolls <b>initiative</b>.
                Once everyone has taken a turn, the fight continues to the next round if neither side has defeated the other. 
            </p>

            <div>
                <h3> The Order of Combat</h3>
                <ol className="info-list">
                    <li>
                        <b>Determine surprise:</b> The DM determines whether anyone involved in the combat is surprised.
                    </li>
                    <li>
                        <b>Establish positions:</b> The DM decides where all the characters and monsters are located.
                    </li>
                    <li>
                        <b>Roll initiative:</b> Everyone involved in the combat encounter rolls initiative, determining the order of the combatants' turns. 
                    </li>
                    <li>
                        <b>Take turns:</b> Each participant in the battle takes a turn in initiative order.
                    </li>
                    <li>
                        <b>Begin the next round:</b> When everyone is involved in the combat has had a turn, the rounds ends.
                    </li>
                </ol>
            </div>
        </div>
    )
}