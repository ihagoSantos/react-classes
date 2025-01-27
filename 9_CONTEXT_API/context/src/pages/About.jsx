import './About.css'
// import { useContext } from 'react'
// import { CounterContext } from '../context/CounterContext'
import { useCounterContext } from '../hooks/useCounterContext'
import { useTitleColorContext } from '../hooks/useTitleColorContext'

export const About = () => {
    // const {counter} = useContext(CounterContext)
    const { counter } = useCounterContext()
    const { color } = useTitleColorContext()

    return (
        <div className='About'>
            <h2 style={ { color } }>About</h2>
            {/* 3 - Change Counter */}
            <p>Valor do Contador: {counter}</p>
        </div>
    )
}