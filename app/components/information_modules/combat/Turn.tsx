export default function Turn() {
    return (
        <div>
            <h1>Your Turn</h1>
                <div className="left-div-t">
                <p>
                    On your turn, you can move a distance up to your speed and take one action.
                    You decide the order to take these actions.
                    The most common actions that you can take in combat are described <a href="/">here</a>.
                </p>
                <h3>Main Action</h3>
                <p> 
                    The main thing that you will do in your turn is taking your main action.
                    A main action is one that is usually time consuming for your character and would typically have a large impact on the outcome of a battle.
                    The main action that you can take depends on your character's class mainly but also on their race, backgrounds or items that they possess.
                </p>
                <h3>Bonus Actions</h3>
                <p>
                    Various class features, spells and other abilities let you take an additional action on your turn called a bonus action.
                    You can take a bonus action only when a special ability, spell or other feature of the game states that you can do something as a bonus action. 
                    You otherwise don't have a bonus action to take. 
                    You can take only one bonus action on your turn.
                </p>
                <h3>Reactions</h3>
                <p>
                    Certain special abilities, spells and situations allow you to take a special action called a reaction.
                    A reaction is an instant response to a trigger of some kind, which can occur on your turn or on someone else's. 
                </p>
            </div>
            <div className="right-div-t">

            </div>
        </div>
    )
}