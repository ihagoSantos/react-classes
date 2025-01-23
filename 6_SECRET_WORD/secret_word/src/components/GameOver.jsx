import './GameOver.css'
const GameOver = ({retry, score}) => {
    return (
        <div>
            <h1>Fim do jogo!</h1>
            <h2>A sua pontuação foi: <br /> <span>{score}</span></h2>
            <button onClick={retry}>Recomeçar o jogo</button>
        </div>
    )
}

export default GameOver