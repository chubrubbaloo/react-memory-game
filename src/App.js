import './App.css';
import {useEffect, useState} from "react";
import {SingleCard} from "./components/SingleCard";
import {MdRestartAlt} from "react-icons/md";

const cardImages = [
    {"src": "/img/javascript.png", matched: false},
    {"src": "/img/html.png", matched: false},
    {"src": "/img/css.png", matched: false},
    {"src": "/img/react.png", matched: false},
    {"src": "/img/angular.png", matched: false},
    {"src": "/img/vue.png", matched: false},
]

function App() {

    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);
    const [disabled, setDisabled] = useState(false);

    // Shuffles 12 cards randomly and gives each card a random id every time the on click event triggers.
    const shuffleCards = () => {
        const shuffleCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({...card, id: Math.random()}))

        setChoiceOne(null);
        setChoiceTwo(null);
        setCards(shuffleCards)
        setTurns(0);
    }

    const handleChoice = (card) => {
        console.log(card)
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    }

    // compare 2 selected cards and display the cards for 1000ms.
    useEffect(() => {
        if (choiceOne && choiceTwo) {
            setDisabled(true)

            if (choiceOne.src === choiceTwo.src) {
                setCards(prevCards => {
                    return prevCards.map(card => {
                        if (card.src === choiceOne.src) {
                            return {...card, matched: true}
                        } else {
                            return card
                        }
                    })
                })
                resetTurn()
            } else {
                setTimeout(() => resetTurn(), 1000);
            }

        }
    }, [choiceOne, choiceTwo])

    console.log(cards)

    // Reset choices & increases users turn amount.
    const resetTurn = () => {
        setChoiceOne(null);
        setChoiceTwo(null);
        setTurns(prevTurns => prevTurns + 1);
        setDisabled(false)
    }

    useEffect(() => {
        shuffleCards()
    }, [])


    return (
        <div className="App">
            <button onClick={shuffleCards}> <MdRestartAlt className="restart-icon"/> New Game</button>
            <h3>Amount of tries: {turns} </h3>
            <div className="card-grid">
                {cards.map(card => (
                    <SingleCard
                        key={card.id}
                        card={card}
                        handleChoice={handleChoice}
                        flipped={card === choiceOne || card === choiceTwo || card.matched}
                        disabled={disabled}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
