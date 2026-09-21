import '../styles/App.css';
import valueIcon from "../assets/value-icon.svg";
import githubIcon from "../assets/github-icon.svg";
import InfoDialog from './InfoDialog.jsx';
import GameArea from './GameArea.jsx';

export default function App() {
    return (
        <>
            <header>
                <h1 className="logo">gitMnemo</h1>
                <h4 className="subtitle">Train your Git reflexes. Build muscle memory.</h4>
                <InfoDialog 
                    btnName="Instruction"
                    className="instruction dialog"
                    title="How to play"
                    body="Click a card to score a point. 
                        After each click, the cards shuffle. 
                        Only click cards you haven’t clicked yet in this round. 
                        If you click one you’ve already chosen, the round ends and your score resets. 
                        Try to beat your Best score."
                    tips="The order changes every time — remember the cards, not their positions."
                    icon={valueIcon}
                />
                <InfoDialog 
                    btnName="Value"
                    className="value dialog"
                    title="Why this matters?"
                    body="Git Mnemo trains recall under pressure — the same skill you need when a command won’t stick during real work. Each round forces you to recognize commands and meanings fast, not just reread them once and forget. You’re not grinding syntax trivia. You’re building muscle memory so Git feels automatic."
                    icon={valueIcon}
                />
            </header>
            <GameArea />
            <footer>
                <p>© 2026 Soikat Saha. All rights reserved.</p>
                <a href="https://github.com/soikat27/git-mnemo">
                    <img src={githubIcon} alt="github-icon" />
                    Source Code
                </a>
            </footer>
        </>
    );
}
