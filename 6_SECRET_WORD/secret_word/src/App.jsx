// CSS
import './App.css'

// React
import { useCallback, useEffect, useState } from 'react'

// Data 
import { wordsList } from './data/words'

// Components
import StartScreen from './components/StartScreen'
import Game from './components/Game'
import GameOver from './components/GameOver'

const stages = [
  {id: 1, name: 'start'},
  {id: 2, name: 'game'},
  {id: 3, name: 'end'}
]
function App() {
  const guessesQty = 3
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState('')
  const [letters, setLetters] = useState([])

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(guessesQty)
  const [score, setScore] = useState(0)

  const getRandomItem = useCallback((list) => {
    return list[Math.floor(Math.random() * list.length)]
  }, [])
  const pickCategory = useCallback(() => {
    const categories = Object.keys(words)
    const category = getRandomItem(categories)
    return category
  }, [getRandomItem, words])
  const pickWord = useCallback((category) => {
    const listWords = words[category]
    const word = getRandomItem(listWords)
    return word
  }, [getRandomItem, words])
  const pickWordLetters = useCallback((word) => {
    return word
      .split("")
      .map(l => l.toLowerCase())
  }, [])

  const startGame = useCallback(() => {
    // clear all letters
    clearLetterStates()

    const category = pickCategory()
    const word = pickWord(category)
    const wordLetters = pickWordLetters(word)
    
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)
    
    setGameStage(stages[1].name)
  }, [pickWord, pickCategory, pickWordLetters])

  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase()
    const letterWasUsed = guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)
    
    if(letterWasUsed) {
      return
    }

    if(letters.includes(normalizedLetter)) {
      setGuessedLetters([...guessedLetters, normalizedLetter])
    } else {
      setWrongLetters([...wrongLetters, normalizedLetter])
      setGuesses((actualGuesses) => actualGuesses -= 1)
    }

  }

  const clearLetterStates = () => {
    setGuessedLetters([])
    setWrongLetters([])
  } 

  // função é executada toda vez que um dado monitorado é alterado
  useEffect(() => {
    if(guesses <= 0) {
      // reseta todos os estados
      clearLetterStates()

      setGameStage(stages[2].name)
    }
  }, [guesses]) 

  // check win condition
  useEffect(() => {
    const uniqueLetters = [...new Set(letters)]
    
    // win condition
    if(guessedLetters.length === uniqueLetters.length) {
      // add score
      setScore((actualScore) => (actualScore += 100))

      // restart game with new word
      startGame()
    }

  }, [guessedLetters, letters, startGame])

  const retry = () => {
    setScore(0)
    setGuesses(guessesQty)

    setGameStage(stages[0].name)
  }


  return (
    <div className='App'>
      {gameStage == 'start' && <StartScreen startGame={startGame} />}
      {gameStage == 'game' && <Game 
        verifyLetter={verifyLetter} 
        pickedWord={pickedWord}
        pickedCategory={pickedCategory}
        letters={letters}
        guessedLetters={guessedLetters}
        wrongLetters={wrongLetters}
        guesses={guesses}
        score={score}
      />}
      {gameStage == 'end' && <GameOver retry={retry} score={score}/>}
    </div>
  )
}

export default App
