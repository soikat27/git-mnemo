import {useEffect, useState} from "react";
import GitCard from "./GitCard.jsx";
import "../styles/CardGrid.css";

export default function CardGrid() {
    const [allCommands, setAllCommands] = useState([]);
    const [displayedCommands, setDisplayedCommands] = useState([]);

    async function fetchCommands() {
        const url = "/commands.json";
        const response = await fetch(url);
        if (!response.ok)
            throw new Error("fetch failed");
        const data = await response.json();

        const commands = data.map(command => ({
            command: command.Command, 
            description: command.Description
        }));
        return commands;
    }
    function shuffleCommands(commands) {
        for (let i = commands.length-1; i > 0; i--) {
            const j = Math.floor(Math.random()*(i+1));
            [commands[i], commands[j]] = [commands[j], commands[i]];
        }
        return commands.slice(0, 15);
    }

    useEffect(() => {
        async function getCommands() {
            try {
                const nextAllCommands = await fetchCommands();
                setAllCommands(nextAllCommands);
                const nextDisplayedCommands = shuffleCommands(nextAllCommands);
                setDisplayedCommands(nextDisplayedCommands);
            }
            catch(error) {
                alert(error);
            }
        }
        getCommands(); 
    }, []);

    function updateGameState() {
        // 1. shuffle cards and update displayedCards state
        const nextDisplayedCommands = shuffleCommands(allCommands);
        setDisplayedCommands(nextDisplayedCommands);

        // 2. update score
    }

    return (
        <div className="card-grid">
            {
                displayedCommands.map(command => (
                    <div className="card-grid__cell" key={command.command}>
                        <GitCard
                            command={command.command}
                            description={command.description}
                            handleCardClick={updateGameState}
                        />
                    </div>
                ))
            }
        </div>
    );
}
