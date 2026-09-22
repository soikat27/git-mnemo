import { useState } from "react";
import "../styles/ScoreBoard.css";

export default function ScoreBoard() {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    function formatScore(score) {
        const digits = [];
        const formated = String(score).padStart(2, "0");

        for (const digit of formated) {
            digits.push(digit);
        }
        return digits;    
    }
    
    return (
        <div className="score-board">
            <div className="score current">
                <p>Score</p>
                {formatScore(score).map((digit, i) => (
                    <span className="digit" key={i}>{digit}</span>
                ))}
            </div>
            <div className="score best">
                <p>Best Score</p>
                {formatScore(bestScore).map((digit, i) => (
                    <span className="digit" key={i}>{digit}</span>
                ))}
            </div>
        </div>
    );
}
