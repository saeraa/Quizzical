import React from "react"
import he from 'he'

export default function Question(props) {

    const { id, question, answers, answerClick, click, isCorrect, gameOver, correctAnswer } = props

    function styles(index) {
        if (gameOver && isCorrect && index === click) {
            return { backgroundColor: "#A0F9A9", outline: "3px solid #70F57E" }
        } else if (gameOver && !isCorrect && index === click) {
            return { backgroundColor: "#FE5F4D", outline: "3px solid #AF1404" }
        } else if (gameOver && index === correctAnswer) {
            return { backgroundColor: "#9FF9A8" }
        } else if (index === click) {
            return { backgroundColor: (index === click) ? "#72cfb1" : "" }
        }
    }

    const buttons = answers.map((answer, index) => {
        const onClickOK = gameOver ? () => console.log("The game is over dude") : (event) => answerClick(event, answer, index, id)
        return <button key={id + index} type="text" className="btn-answer" name={index} style={styles(index)} onClick={onClickOK}><code>{he.decode(answer)}</code></button>
    })

    return (
        <div className="question">
            <h2>{question}</h2>
            <div className="buttons">{buttons}</div>
        </div>
    )
}