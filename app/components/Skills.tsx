import React from "react";

interface SkillsProps {
    selectedClass: string;
    selectedSkills: string[];
    setSelectedSkills: React.Dispatch<React.SetStateAction<string[]>>;
}

const classSkills: Record<string, string[]> = {
    "Barbarian": ["Animal Handling", "Athletics", "Intimidation", "Nature", "Perception", "Survival"],
    "Bard": ["Acrobatics", "Animal Handling", "Arcana", "Athletics", "Deception", "History", "Insight", "Intimidation", "Investigation", "Medicine", "Nature", "Perception", "Performance", "Persuasion", "Religion", "Sleight of Hand", "Stealth", "Survival"],
    "Cleric": ["History", "Insight", "Medicine", "Persuasion", "Religion"],
    "Druid": ["Arcana", "Animal Handling", "Insight", "Medicine", "Nature", "Perception", "Religion", "Survival"],
    "Fighter": ["Acrobatics", "Animal Handling", "Athletics", "History", "Insight", "Perception", "Survival"],
    "Monk": ["Acrobatics", "Athletics", "History", "Insight", "Religion", "Stealth"],
    "Paladin": ["Athletics", "Insight", "Intimidation", "Medicine", "Persuasion", "Religion"],
    "Ranger": ["Animal Handling", "Athletics", "Insight", "Investigation", "Nature", "Perception", "Stealth", "Survival"],
    "Rogue": ["Acrobatics", "Athletics", "Deception", "Insight", "Intimidation", "Investigation", "Perception", "Performance", "Persuasion", "Sleight of Hand", "Stealth"],
    "Sorcerer": ["Arcana", "Deception", "Insight", "Intimidation", "Persuasion", "Religion"],
    "Warlock": ["Arcana", "Deception", "History", "Intimidation", "Investigation", "Nature", "Religion"],
    "Wizard": ["Arcana", "History", "Insight", "Investigation", "Medicine", "Religion"],
}

const Skills: React.FC<SkillsProps> = ({ selectedClass, selectedSkills, setSelectedSkills}) => {
  
    const handleSkillSelect = (skill: string) => {
        if (selectedClass === "Bard" && selectedSkills.length < 3 && !selectedSkills.includes(skill)) {
            setSelectedSkills([...selectedSkills, skill]); 
        } else if (selectedSkills.length < 2 && !selectedSkills.includes(skill)) {
            setSelectedSkills([...selectedSkills, skill]); 
        }
      };
    
      const handleSkillDeselect = (skill: string) => {
        setSelectedSkills(selectedSkills.filter((s) => s !== skill));
      };
  
    return (
        <div>
            <h2>{selectedClass} Skills</h2>
            <ul>
                {classSkills[selectedClass].map((skill) => (
                    <li key={skill}>
                        <label>
                            <input
                                type="checkbox"
                                checked={selectedSkills.includes(skill)}
                                disabled={(selectedClass === "Bard" && selectedSkills.length >= 3 && !selectedSkills.includes(skill)) || (selectedSkills.length >= 2 && !selectedSkills.includes(skill))}
                                onChange={() => {
                                    selectedSkills.includes(skill) ?
                                        handleSkillDeselect(skill) :
                                        handleSkillSelect(skill);
                                }}
                            />
                            {skill}
                        </label>
                    </li>
                ))}
            </ul>
            {selectedSkills.length > 2 && <p>You can only select up to 2 skills.</p>}
        </div>
      );
    };

  export default Skills;