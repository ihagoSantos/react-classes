import { useState } from "react"
export const HookUseState = () => {
    // 1 - useState
    let userName = "João"
    const [name, setName] = useState("Maria")

    const changeNames = () => {
        userName = "João Souza"
        setName("Maria Souza")

        console.log("Variável:", userName)
        console.log("useState:", name)
    }

    // 2 - useState e input
    const [ age, setAge ] = useState(18)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Idade:", age)
    }
    return (
        <div>
            {/* 1 - useState */}
            <h2>useState</h2>
                <p>Variável: {userName}</p>
                <p>useState: {name}</p>
                <button onClick={changeNames}>Mudar Nomes</button>
            {/* 2 - useState e input */}
            <br />
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Digite a sua idade:</span><br />
                    <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
                    <input type="submit" value="Enviar"/>
                </label>
            </form>
            <p>Você tem {age} anos.</p>

            <hr />
        </div>
    )
}