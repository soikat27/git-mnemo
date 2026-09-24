import "../styles/GitCard.css";

export default function GitCard({id, command, description, updateGameState}) {
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
