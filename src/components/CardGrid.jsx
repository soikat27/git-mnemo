import {useEffect, useState, useRef} from "react";
import GitCard from "./GitCard.jsx";
import "../styles/CardGrid.css";
import happySoundFile from "../assets/audio/happy-sound.mp3";
import sadSoundFile from "../assets/audio/sad-sound.mp3";

/**
 * Shuffle in place and return the first 15 commands for the board.
 * @param {Array<{id: *, command: string, description: string}>} commands - Full command deck (mutated by shuffle).
 * @returns {Array<{id: *, command: string, description: string}>} Fifteen commands to display.
 */
function getDisplayedCommands(commands) {
    for (let i = commands.length-1; i > 0; i--) {
        const j = Math.floor(Math.random()*(i+1));
        [commands[i], commands[j]] = [commands[j], commands[i]];
    }
    return commands.slice(0, 15);
}

/**
 * Memory board: loads commands.json, shows 15 shuffled cards, tracks clicks.
 * Plays SFX and calls updateScore on each pick; reshuffles after every click.
 * @param {function(boolean=false): void} updateScore - Score callback from GameArea (`true` ends the round).
 * @returns {JSX.Element}
 */
export default function CardGrid({updateScore}) {
    const [allCommands, setAllCommands] = useState([]);
    const [displayedCommands, setDisplayedCommands] = useState([]);
    const [clickedCommands, setClickedCommands] = useState([]);

    const happyRef = useRef(new Audio(happySoundFile));
    const sadRef = useRef(new Audio(sadSoundFile));

    /**
     * Fetch and normalize commands from public/commands.json.
     * @returns {Promise<Array<{id: *, command: string, description: string}>>} Normalized command list.
     */
    async function fetchCommands() {
        const url = "/commands.json";
        const response = await fetch(url);
        if (!response.ok)
            throw new Error("fetch failed");
        const data = await response.json();

        const commands = data.map(command => ({
            id: command.ID,
            command: command.Command, 
            description: command.Description
        }));
        return commands;
    }

    useEffect(() => {
        /**
         * Load the deck once on mount and deal the first board.
         * @returns {Promise<void>}
         */
        async function initGameSate() {
            try {
                const nextAllCommands = await fetchCommands();
                setAllCommands(nextAllCommands);
                const nextDisplayedCommands = getDisplayedCommands(nextAllCommands);
                setDisplayedCommands(nextDisplayedCommands);
            }
            catch(error) {
                alert(error);
            }
        }
        initGameSate(); 
    }, []);
    

    /**
     * Handle a card pick: score or reset, then reshuffle the board.
     * @param {*} cardId - Id of the clicked command card.
     * @returns {void}
     */
    function updateGameState(cardId) {
        // 1. if clicked a previously clicked card, reset
        if (clickedCommands.includes(cardId)) {
            const sadSound = sadRef.current;
            sadSound.currentTime = 0;
            sadSound.volume = 1;
            sadSound.play();

            setClickedCommands([]);
            updateScore(true);
        }
        else {
            const happySound = happyRef.current;
            happySound.currentTime = 0;
            happySound.volume = 0.7;
            happySound.play();

            setClickedCommands(previous => [...previous, cardId]);
            updateScore();
        }

        // 2. shuffle cards and update displayedCards state
        const nextDisplayedCommands = getDisplayedCommands([...allCommands]);
        setDisplayedCommands(nextDisplayedCommands);
    }

    return (
        <div className="card-grid">
            {
                displayedCommands.map(command => (
                    <div className="card-grid__cell" key={command.id}>
                        <GitCard
                            id={command.id}
                            command={command.command}
                            description={command.description}
                            updateGameState={updateGameState}
                        />
                    </div>
                ))
            }
        </div>
    );
}
