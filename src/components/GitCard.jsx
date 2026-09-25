import "../styles/GitCard.css";

/**
 * One command + description card. Click reports its id up to CardGrid.
 * @param {*} id - Unique command id.
 * @param {string} command - Git command text shown on the card.
 * @param {string} description - Short meaning of the command.
 * @param {function(*): void} updateGameState - Click handler from CardGrid.
 * @returns {JSX.Element}
 */
export default function GitCard({id, command, description, updateGameState}) {
  /**
   * Forward this card's id to CardGrid.
   */
  function handleCardClick() {
    updateGameState(id);
  }
  
  return (
    <div className="git-card" onClick={handleCardClick}>
      <h4 className="git-card__command">{command}</h4>
      <p className="git-card__description">{description}</p>
    </div>
  );
}
