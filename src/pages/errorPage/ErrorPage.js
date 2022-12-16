import error from '../../images/error.png'
import {useNavigate} from "react-router-dom";

export const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <img className='yatta' src={error} alt="dizzy anime person"/>
            <h1>404</h1>
            <h2>The page doesn't exist.</h2>
            <p>Please check the web address or go back to the home page.</p>
            <button onClick={() => navigate("/")}>Home</button>
        </div>
    )
}