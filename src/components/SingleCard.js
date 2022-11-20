import './SingleCard.css'

export const SingleCard = ({card,handleChoice, flipped}) => {

    const handleClick = () => {
        handleChoice(card)
    }

    return (
        <div>
            <div className="card">
                <div className={flipped ? "flipped" : ""}> {/*Toggles between two styles*/}
                    <img src={card.src} className="front" alt="card front"/>
                    <img
                        src="/img/cover.png"
                        className="back"
                        alt="card back"
                        onClick={handleClick}
                    />
                </div>
            </div>
        </div>
    )
}