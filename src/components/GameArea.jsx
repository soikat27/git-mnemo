import CardGrid from "./CardGrid.jsx";
import ScoreBoard from "./ScoreBoard.jsx";
import "../styles/GameArea.css";

export default function GameArea() {
    return (
        <div className="game-area">
            <ScoreBoard />
            <CardGrid />
        </div>
    );
}
