const Challenge = () => {
    const num1 = 10
    const num2 = 20

    const handleSum = () => {
        console.log(`A soma dos números é ${num1 + num2}`)
    }
    return (
        <div>
            <h1>Challenge</h1>
            <p>Clique no botão abaixo para ver a soma dos dois valores {num1} e {num2}</p>
            <button onClick={handleSum}>Somar</button>
        </div>
    )
}

export default Challenge