import { useCounterContext } from '../hooks/useCounterContext'
import './Perfil.css'
// import { useContext } from 'react'
// import { CounterContext } from '../context/CounterContext'

export const Perfil = () => {
    // const {counter} = useContext(CounterContext)
    const { counter } = useCounterContext()
    return (
        <div>
            <h2>Perfil</h2>
            {/* 3 - Change Counter */}
            <p>Valor do Contador: {counter}</p>
        </div>
    )
}