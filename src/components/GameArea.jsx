import CardGrid from "./CardGrid.jsx";
import ScoreBoard from "./ScoreBoard.jsx";
import "../styles/GameArea.css";
import { useEffect, useRef, useState } from "react";

export default function GameArea() {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [isGameOn, setIsGameOn] = useState(false);

    const dialogRef = useRef(null);
    useEffect(() => {
        dialogRef.current.showModal();
    }, []);

    function updateScore(isTurnOver=false) {
        if (isTurnOver == true) {
            setScore(0);
            setBestScore(Math.max(score, bestScore));
        }   
        else
            setScore(prevScore => prevScore+1);
    }

    return (
        <>
            <dialog className="start-dialog" ref={dialogRef}>
                <div className="start-dialog__inner">
                    <div className="start-dialog__brand">
                        <p className="start-dialog__welcome">Welcome to</p>
                        <h1 className="logo">
                            <span className="logo-git">git</span>
                            <span className="logo-mnemo">Mnemo</span>
                        </h1>
                    </div>
                    <button
                        className="dialog-open start-game"
                        onClick={() => {
                            setIsGameOn(true);
                            dialogRef.current.close();
                        }}
                    >
                        Start Game
                    </button>
                </div>
            </dialog>
            
            {isGameOn && (
                <div className="game-area">
                    <ScoreBoard score={score} bestScore={bestScore} />
                    <CardGrid updateScore={updateScore} />
                </div>
            )}
        </>
        
    );
}
