import './SingleCard.css'

export const SingleCard = ({card,handleChoice}) => {

    const handleClick = () => {
        handleChoice(card)
    }

    return (
        <div>
            <div className="card">
                <div>
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