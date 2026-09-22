import CardGrid from "./CardGrid.jsx";
import ScoreBoard from "./ScoreBoard.jsx";

export default function GameArea() {
    return (
        <div className="game-area">
            <ScoreBoard />
            <CardGrid />
        </div>
        
    );
}