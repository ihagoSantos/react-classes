import { useState, useEffect, useMemo } from "react"

export const HookUseMemo = () => {
    const [number, setNumber] = useState(0)
    // const premiumNumbers = ["0", "100", "200"]
    const premiumNumbers = useMemo(() => { // dessa forma, o array não será carregado toda vez que o componente for renderizado
        return ["0", "100", "200"]
    }, [])

    useEffect(() => {
        console.log("Premium Numbers foi alterado")
    }, [premiumNumbers])

    return (
        <div>
            <h2>HookUseMemo</h2>
            <input type="text" onChange={(e) => setNumber(e.target.value)} placeholder="digite um número" />
            {premiumNumbers.includes(number) ? <p>Acertou o número!!!</p> : ""}
            <hr />
        </div>
    )
}