import CardGrid from "./CardGrid.jsx";
import ScoreBoard from "./ScoreBoard.jsx";
import "../styles/GameArea.css";
import { useState } from "react";

export default function GameArea() {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    function updateScore(newScore=score+1) {
        setScore(newScore);
        if (newScore > bestScore)
            setBestScore(newScore);
    }

    return (
        <div className="game-area">
            <ScoreBoard score={score} bestScore={bestScore} />
            <CardGrid updateScore={updateScore} />
        </div>
    );
}
