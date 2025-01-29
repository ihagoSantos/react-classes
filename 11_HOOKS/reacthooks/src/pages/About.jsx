import  {useContext} from 'react'
import { SomeContext } from '../components/HookUseContext'


export const About = () => {
    const {contextValue} = useContext(SomeContext)
    return (
        <div>
            <h1>About</h1>
            <h2>useContext</h2>
            <p>Valor do contexto: {contextValue}</p>
            <hr />
        </div>
    )
}