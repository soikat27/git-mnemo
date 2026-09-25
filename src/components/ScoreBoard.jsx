import "../styles/ScoreBoard.css";

/**
 * Displays current score and best score for the session.
 * @param {number} score - Current round score.
 * @param {number} bestScore - Best score this session.
 * @returns {JSX.Element}
 */
export default function ScoreBoard({score, bestScore}) {
    /**
     * Pad to two digits and split into characters for display.
     * @param {number} score - Score value to format.
     * @returns {string[]} Digit characters (length 2).
     */
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
            <div className="score">
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
