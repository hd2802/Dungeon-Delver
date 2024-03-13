export default function Skills() {
    return (
        <div>
            <h1> Skills</h1>
            <div className="left-div-t">
                <p>
                    Each ability covers a broad range of capabilities, including skills that a character can be proficient in.
                    A skill represents a specific aspect of an ability score, and an individual's proficiency in a skill demonstrates a focus on that aspect.
                </p>
                <p>
                    For example, a dexterity check may reflect a character's ability to pull off an acrobatic stunt, stealing an objet or staying hidden.
                    Each of these aspects of Dexterity has a skill associated with them. 
                </p>
                <p>
                    The skills related to each ability score are shown in the following list. 
                </p>
            </div>
            <div className="right-div-t">
            <table>
                <thead>
                    <tr>
                    <th>Ability</th>
                    <th>Skills</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Strength</td>
                    <td>
                        <ul>
                        <li>Athletics</li>
                        </ul>
                    </td>
                    </tr>
                    <tr>
                    <td>Dexterity</td>
                    <td>
                        <ul>
                        <li>Acrobatics</li>
                        <li>Sleight of Hand</li>
                        <li>Stealth</li>
                        </ul>
                    </td>
                    </tr>
                    <tr>
                    <td>Intelligence</td>
                    <td>
                        <ul>
                        <li>Arcana</li>
                        <li>History</li>
                        <li>Investigation</li>
                        <li>Nature</li>
                        <li>Religion</li>
                        </ul>
                    </td>
                    </tr>
                    <tr>
                    <td>Wisdom</td>
                    <td>
                        <ul>
                        <li>Animal Handling</li>
                        <li>Insight</li>
                        <li>Medicine</li>
                        <li>Perception</li>
                        <li>Survival</li>
                        </ul>
                    </td>
                    </tr>
                    <tr>
                    <td>Charisma</td>
                    <td>
                        <ul>
                        <li>Deception</li>
                        <li>Intimidation</li>
                        <li>Performance</li>
                        <li>Persuasion</li>
                        </ul>
                    </td>
                    </tr>
                </tbody>
                </table>

            </div>
        </div>
    )
}