import { useState } from "react"

const ListRender = () => {
    const [list] = useState(["Matheus", "Pedro", "Josias"])
    const [users, setUsers] = useState([
        {id: 1, name: "Matheus", age: 25},
        {id: 2, name: "João", age: 21},
        {id: 3, name: "Pedro", age: 22},
    ])
    const deleteRandom = () => {

        const randomNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers) => {
            return prevUsers.filter(u => u.id !== randomNumber + 1)
        })
    }
    return (
        <div>
            <h1>List Render</h1>
            <ul>
                { list.map((item, index) => (
                    <li key={index}>{item}</li>
                )) }
            </ul>
        
            <ul>{
                users.map((item) => (
                    <li key={item.id}>Nome: {item.name} | Idade: {item.age}</li>
                ))    
            }</ul>
            <button onClick={deleteRandom}>Delete Random User</button>
        </div>
    )
}

export default ListRender