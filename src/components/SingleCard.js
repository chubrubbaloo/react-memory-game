import './SingleCard.css'
import cover from '../img/cover.png'

export const SingleCard = ({card,handleChoice, flipped, disabled}) => {

    const handleClick = () => {
        // You can only flip the cards when the disabled state is not true.
        if (!disabled){
            handleChoice(card)
        }
    }

    return (
        <div>
            <div className="card">
                <div className={flipped ? "flipped" : ""}> {/*Toggles between two styles*/}
                    <img src={card.src} className="front" alt="card front"/>
                    <img
                        src={cover}
                        className="back"
                        alt="card back"
                        onClick={handleClick}
                    />
                </div>
            </div>
        </div>
    )
}