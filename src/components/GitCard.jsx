import "../styles/GitCard.css";

export default function GitCard({ command, description }) {
  return (
    <div className="git-card">
      <h4 className="git-card__command">{command}</h4>
      <p className="git-card__description">{description}</p>
    </div>
  );
}
