import '../styles/App.css';
import githubIcon from "../assets/github-icon.svg";
import InfoDialog from './InfoDialog.jsx';
import GameArea from './GameArea.jsx';


export default function App() {
    return (
        <>
            <header>
                <h1 className="logo">Logo</h1>
                <h4 className="subtitle">subtitle goes here...</h4>
                <InfoDialog />
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
