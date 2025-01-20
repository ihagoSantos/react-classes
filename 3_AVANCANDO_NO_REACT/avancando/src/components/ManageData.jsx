import {useState} from 'react'
const ManageData = () => {
    let someData = 10
    const [number, setNumber] = useState(15)
    return (
        <div>
            <div>
                <p>Valor: {someData}</p>
                <button onClick={() => someData = 15}>Mudar Variável</button>
            </div>
            <div>
                <p>Valor 2: {number}</p>
                <button onClick={() => setNumber(25)}>Mudar Variável</button>
            </div>
        </div>
    )
}

export default ManageData