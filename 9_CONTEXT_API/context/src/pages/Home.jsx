import './Home.css'

// import { useContext } from 'react'
// import { CounterContext } from '../context/CounterContext'
import { ChangeCounter } from '../components/ChangeCounter'

// 4 - Refatorando com hook
import { useCounterContext } from '../hooks/useCounterContext'

// 5 - context mais complexo
import { useTitleColorContext } from '../hooks/useTitleColorContext'
export const Home = () => {
    // const { counter } = useContext(CounterContext)
    const { counter } = useCounterContext()
    const { color, dispatch } = useTitleColorContext()

    // 6 - Alterando contexto complexo
    const setTitleColor = (color) => {
        dispatch({type: color})
    }

    return (
        <div className='Home'>
            <h2 style={ { color } }>Home</h2>
            <p>Valor do Contador: {counter}</p>
            {/* 3 - Change Counter */}
            <ChangeCounter />
            {/* 6 - Alterando contexto complexo */}
            <div>
                <button onClick={() => setTitleColor("RED")}>Vermelho</button>
                <button onClick={() => setTitleColor("BLUE")}>Azul</button>
                <button onClick={() => setTitleColor("PURPLE")}>Default</button>

            </div>
        </div>
    )
}