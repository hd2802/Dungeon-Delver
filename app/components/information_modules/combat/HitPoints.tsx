export default function HitPoints() {
    return (
        <div>
            <h1>Hit Points</h1>
            <p>
                Injury and the risk of death are constant companions of those who explore fantasy gaming worlds.
                The thrust of a sword, a well-placed arrow, or a blast of flame all have the potential to damage, or even kill, the hardiest of creatures.
            </p>
            <h3>Hit Points</h3>
            <p>
                Hit Points represent a combination of physical and mental durability, the will to live, and luck.
                Creatures with more hit points are more difficult to kill.
                Those with fewer hitpoints are more fragile.
            </p>
            <p>
            Every creature, your character included has a number called a <b>hit point maximum</b>, that is, the number of hit points that they have when they are fully healed.
                Every creature also has a <b>current hit points</b> value, the number of hits points that they have in total at any given point.
                A creature's current hit points can be any number from the creature's hit point maximum down to 0.
                This number changes frequently as a creature takes damage or receives healing.
            </p>
            <p>
                Whenever a creature takes damage, that damage is subtracted from its hit points.
                The loss of hit points has no effect on a creature's capabilities until the creature drops to 0 hit points.
            </p>
            <h3>Healing</h3>
            <p>
                Rest can restore a creature's hit points and magical methods such as a cure wounds spell or a potion of healing can remove damage in an instant.
            </p>
            <p>
                When a creature receives healing of any kind, hit points regained are added to its current hit points.
            </p>
        </div>
    )
}