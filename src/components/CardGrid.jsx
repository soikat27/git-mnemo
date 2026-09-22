import { useEffect, useState } from "react";
import GitCard from "./GitCard.jsx";
import "../styles/CardGrid.css";

export default function CardGrid() {
    const [commands, setCommands] = useState([]);

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
                const allCommands = await fetchCommands();
                const newCommands = shuffleCommands(allCommands);
                setCommands(newCommands);
            }
            catch(error) {
                console.log(error);
                alert("error");
            }
        }
        getCommands(); 
    }, []);
    

    return (
        <div className="card-grid">
            {
                commands.map(command => (
                    <div className="card-grid__cell" key={command.command}>
                        <GitCard
                            command={command.command}
                            description={command.description}
                        />
                    </div>
                ))
            }
        </div>
    );
}
