import { useReducer, useState } from "react"

export const HookUseReducer = () => {
    // 1 - começando com useReducer
    const [number, dispatch] = useReducer((state, action) => {
        return Math.random(state) // state é o valor atual da variável
    }) //dispatch é a função usada para alterar o valor da variável

    // 2 - avançando com o useReducer
    const initialTask = [ // estado inicial do reducer
        { id: 1, texto: "alguma coisa" },
        { id: 2, texto: "alguma coisa 2" },
    ] 
    const [taskText, setTaskText] = useState("")
    const taskReducer = (state, action) => { // função que será executada no reducer
        switch(action.type) {
            case "ADD": // o padrão é adicionar o action.type em uppercase
                { const newTask = {
                    id: Math.random(),
                    texto: taskText
                }

                setTaskText("")

                return [...state, newTask] } // adiciona um novo item ao array
            case "DELETE": 
                return state.filter(task => task.id !== action.id)
            default: 
                return state // estado inicial (initialTask)
        }
    } 

    const [tasks, dispatchTasks] = useReducer(taskReducer, initialTask)
    
    const handleTaskSubmit = (e) => {
        e.preventDefault()
        dispatchTasks({ type: "ADD", texto: taskText })
    }

    const removeTask = (id) => {
        dispatchTasks({ type: "DELETE", id})
    }
    return (
        <div>
            <h2>useReducer</h2>
            <p>Número: {number}</p>
            <button onClick={dispatch}>Alterar Número</button>
            <br />
            <h3>Tarefas</h3>
            <form onSubmit={handleTaskSubmit}>
                <label>
                    <span>Task: </span>
                    <input type="text" value={taskText} onChange={(e) => setTaskText(e.target.value)} />
                    <input type="submit" value="Adicionar Task" />
                </label>
            </form>
            {tasks.map(task => {
                return <li key={task.id} onDoubleClick={() => removeTask(task.id)}>{task.texto}</li>
            })}
            <hr />
        </div>
    )
}