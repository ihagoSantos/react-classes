import './ChangeCounter.css'
import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"
export const ChangeCounter = () => {
    const {counter, setCounter} = useContext(CounterContext)
    return (
        <button className="counter" onClick={() => setCounter(counter + 1)}>Incrementar Contador</button>
    )
}