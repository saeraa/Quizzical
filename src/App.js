import React from "react"
import { data } from "./questions"
import Question from "./Question"
import { nanoid } from "nanoid"
import Particles from "./Particles"




export default function App() {

  const [gameOver, setGameOver] = React.useState(false)
  const [gameOn, setGameOn] = React.useState(false)
  const [questions, setQuestions] = React.useState([])

  function getQuestions() {
    const length = data[0].results.length
    let questArray = []
    for (let i = 0; i < 5; i++) {
      let randomNum = Math.floor(Math.random() * length)
      questArray.push(data[0].results[randomNum])
    }

    return questArray.map(question => {
      const tempArray = [...question.incorrect_answers, question.correct_answer].sort()
      const correctAnswerIndex = tempArray.findIndex(element => element === question.correct_answer)
      return {
        ...question,
        array: tempArray,
        click: "",
        isCorrect: false,
        correctAnswer: correctAnswerIndex,
        id: nanoid()
      }
    })
  }

  function startGame() {
    setGameOn(true)
    const questArray = getQuestions()
    setQuestions(questArray)
  }

  function answerClick(event, answer, index, thisId) {
    event.preventDefault()
    // trying to figure out how to make the button not lose focus when it's been clicked, this or event.target.focus() does not work


    setQuestions(prevQuestions => prevQuestions.map(question => {
      if (question.id === thisId) {
        return {
          ...question,
          click: index,
          isCorrect: answer === question.correct_answer ? true : false
        }
      } else return {
        ...question
      }
    }))
  }

  function reloadWindow() {
    setGameOver(false)
    setQuestions(getQuestions)
    document.getElementById("game-over").innerText = ""
  }

  function checkAnswers() {

    let qsAnswered = 0
    questions.forEach(question => { if (question.click !== "") { qsAnswered++ } })
    if (qsAnswered !== 5) return document.getElementById("game-over").innerText = `You haven't answered all the questions!`

    let count = 0
    questions.forEach(element => element.isCorrect ? count++ : count)

    const howMany = count < 5 ? "<br />Play again to improve your score 👇🏼" : "<br />Well done! 🥳"
    document.getElementById("game-over").innerHTML = `<h3>You answered correctly in ${count}/5 questions! ${howMany}</h3>`

    setGameOver(true)
  }

  const questionsElement = questions.map(question => {
    return (
      <Question
        key={nanoid()}
        answers={question.array}
        answerClick={answerClick}
        click={question.click}
        correctAnswer={question.correctAnswer}
        gameOver={gameOver}
        id={question.id}
        isCorrect={question.isCorrect}
        question={question.question}
      />
    )
  })

  return (
    <>

      {!gameOn ?
        <div className="overlay container" id="overlay">
          <div className="logo">
            <span className="questionmark">?</span>
            <h1>quizzical</h1>
            <h3>JavaScript Edition</h3>
          </div>
          <button type="text" className="start-game" onClick={startGame}>Start game</button>
        </div>
        :
        <div className="container">
          <main>
            {questionsElement}
            <div id="game-over"></div>
            <button type="text" className="check-answers"
              onClick={gameOver ? reloadWindow : checkAnswers}>
              {gameOver ? "Play again" : "Check answers"}
            </button>
          </main>
        </div>
      }
      <Particles />
    </>
  )
}


/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
