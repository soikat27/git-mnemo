export default function GitCard({command, description}) {
    return (
        <div>
            <h4>{command}</h4>
            <p>{description}</p>
        </div>
    );
}