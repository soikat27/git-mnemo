import CardGrid from "./CardGrid.jsx";
import ScoreBoard from "./ScoreBoard.jsx";
import "../styles/GameArea.css";
import { useState } from "react";

export default function GameArea() {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    function updateScore(isTurnOver=false) {
        if (isTurnOver == true) {
            setScore(0);
            setBestScore(Math.max(score, bestScore));
        }   
        else
            setScore(score+1);
    }

    return (
        <div className="game-area">
            <ScoreBoard score={score} bestScore={bestScore} />
            <CardGrid updateScore={updateScore} />
        </div>
    );
}
