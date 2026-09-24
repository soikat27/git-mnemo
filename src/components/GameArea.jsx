import CardGrid from "./CardGrid.jsx";
import ScoreBoard from "./ScoreBoard.jsx";
import backgroundMusicFile from "../assets/audio/bg-music.mp3";
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
    function startGame() {
        setIsGameOn(true);
        dialogRef.current.close();

        const bgMusic = new Audio(backgroundMusicFile);
        bgMusic.volume = 0.65;
        bgMusic.loop = true;
        bgMusic.currentTime = 0;
        bgMusic.play();
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
                    <button className="dialog-open start-game" onClick={startGame}>
                        Start Game
                    </button>
                </div>
            </dialog>
            
            <div className="game-area">
                {isGameOn && (
                    <>
                        <ScoreBoard score={score} bestScore={bestScore} />
                        <CardGrid updateScore={updateScore} />
                    </>
                )}
            </div>
        </>
        
    );
}
