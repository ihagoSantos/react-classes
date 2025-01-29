import { useEffect, useState } from "react"
export const HookUseEffect = () => {
    const [number, setNumber] = useState(0)
    // 1 - useEffect: sem dependências
    useEffect(() => {
        console.log("Estou sendo executado!")
    }, [number])

    const changeSomething = () => {
        setNumber(number + 1)
    }

    // 2 - Array de dependências vazio
    useEffect(() => {
        console.log("Serei executado apenas uma vez")
    }, [])

    // 3 - Item no array de dependências
    const [anotherNumber, setAnotherNumber] = useState(0)
    useEffect(() => {
        if(anotherNumber > 0){
            console.log("Serei executado apenas quando anotherNumber mudar")
        }
    }, [anotherNumber])

    // 4 - cleanup do useEffect
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         console.log("hello world")

    //         // setAnotherNumber(anotherNumber + 1)
    //     }, 2000)

    //     return () => clearTimeout(timer)
    // }, [anotherNumber])
    return (
        <div>
            <h2>useEffect</h2>
            <p>Number: {number}</p>
            <button onClick={changeSomething}>Change Number!</button>
            <p>Another Number: {anotherNumber}</p>
            <button onClick={() => {setAnotherNumber(anotherNumber + 1)}}>Change Number!</button>
            <hr />
        </div>
    )
}