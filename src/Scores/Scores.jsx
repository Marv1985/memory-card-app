import './Scores.css';

export default function Scores({score, bestScore}) {
    return (
        <div className="scores">
            <div className="score">
                <p>Score: {score}</p>
            </div>
            <div className="best_score">
                <p>Best score: {bestScore}</p>
            </div>
        </div>
    )
}