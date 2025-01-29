import { useCallback, useState } from "react"
import {List} from './List'
export const HookUseCallback = () => {
    
    const [counter, setCounter] = useState(0)

    const getItemsFromDatabase = useCallback(() => {
        return ['a', 'b', 'c']
    }, []) // com o useCallback, a função não será mais chamada. Os dados ficam salvos na memória e não são recarregados toda vez que o componente for renderizado
    
    return (
        <div>
            <h2>useCallback</h2>
            <List getItems={getItemsFromDatabase}/> {/** sempre que o componente for recarregado, faz a chamada ao banco de dados. para resolver esse problema, usa-se o hook useCallback */}
            <button onClick={() => setCounter(counter + 1)}>Alterar</button>
            <br />
            <br />
            {counter}

            <hr />
        </div>
    )
}