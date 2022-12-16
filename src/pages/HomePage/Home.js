import {useNavigate} from "react-router-dom";

export const Home = () => {

    const navigate = useNavigate();

    return (
        <div>
            <h1>Memory Game</h1>
            <button onClick={() => navigate("/memory-game")}>Play the game!</button>
        </div>
    )
}