import {useNavigate} from "react-router-dom";
import yatta from '../../images/yatta.png';
import pics from '../../images/front-end-images.png'

export const Home = () => {

    const navigate = useNavigate();

    return (
        <div>
            <h1>Memory Game</h1>
            <button onClick={() => navigate("/memory-game")}>Play the game!</button>
            <img className='yatta' style={{borderRadius: '12px'}} src={yatta} alt="Anime girl"/>
            <h2>The rules:</h2>
            <p>There are 6 different images of commonly used tools in front-end development. Your goal is to guess the
            right pair of cards in as few tries as possible!</p>
            <br/>
            <img className='rules-img' src={pics} alt='The 6 pictures you want to find'/>
        </div>
    )
}
