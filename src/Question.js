import React from "react"
import he from 'he'

export default function Question(props) {
    
    const { id, question, answers, answerClick, click, isCorrect, gameOver, correctAnswer } = props

    function styles(index) {
        if (gameOver && isCorrect && index === click) { 
            return { backgroundColor: "#A0F9A9" } 
        } else if (gameOver && !isCorrect && index === click) { 
            return { backgroundColor: "", outline: "3px solid #fff" }
        } else if (gameOver && index === correctAnswer) {
            return { backgroundColor: "#9EEDF8" }
        } else if (index === click) { 
            return { backgroundColor: (index === click) ? "#fff" : "" }
        }
    }

    const buttons = answers.map((answer, index) => { 
        const onClickOK = gameOver ? () => console.log("The game is over dude") : (event) => answerClick(event, answer, index, id) 
        return <button key={id + index} type="text" className="btn-answer" name={index} style={styles(index)} onClick={onClickOK}>{he.decode(answer)}</button>
    })
    
    return(
        <div className="question">
            <h2>{question}</h2>
            <div className="buttons">{buttons}</div>
        </div>   
    )
}