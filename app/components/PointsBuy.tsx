import React, { useState } from "react";

interface PointsBuyProps {
    abilityScores: { [key:string]: number };
    onAbilityScoreChange: (ability:string, value:number) => void;
}

const MAX_POINTS = 27

const PointsBuy: React.FC<PointsBuyProps> = ({ abilityScores, onAbilityScoreChange}) => {  
    const [currentPoints, setCurrentPoints] = useState(MAX_POINTS);

    const handleIncrement = (ability: string) => {
        if (abilityScores[ability] < 15 && currentPoints > 0) 
        {
            let cost = 1;

            if (abilityScores[ability] >= 15)
            {
              cost = 2;
            }

            onAbilityScoreChange(ability, abilityScores[ability] + 1);
            setCurrentPoints(currentPoints - cost)
        } 
        console.log(currentPoints);
    };

    const handleDecrement = (ability: string) => {
        if (abilityScores[ability] > 8)
        {
            onAbilityScoreChange(ability, abilityScores[ability] - 1);
            setCurrentPoints(currentPoints + 1)
        }
    }

    return (
        <div>
          <h2>Points Buy System</h2>
          <div>
            Points remaining: {currentPoints}
          </div>
          <table>
            <thead>
              <tr>
                <th>Ability</th>
                <th>Score</th>
                <th>Adjust</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(abilityScores).map(([ability, value]) => (
                <tr key={ability}>
                  <td>{ability}</td>
                  <td>{value}</td>
                  <td>
                    <button onClick={() => handleIncrement(ability)}>+</button>
                    <button onClick={() => handleDecrement(ability)}>-</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}

export default PointsBuy;