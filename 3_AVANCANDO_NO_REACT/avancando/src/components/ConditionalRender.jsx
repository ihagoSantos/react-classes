import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(true)
    const [name, setName] = useState("Matheu")
    return (
        <div>
            <h1>Conditional Render</h1>

            <h2>Isso Será exibido?</h2>
            {x && <p>Se x for true, sim!</p>}
            {!x && <p>Agora x é false!</p>}

            {name == "João" ? <p>Bem vindo, João!</p> : <p>Quem é você?</p>}
            <button onClick={() => setName("João")}>Eu sou João</button>
        </div>
    )
}

export default ConditionalRender