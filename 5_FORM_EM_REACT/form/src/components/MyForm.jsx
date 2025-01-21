import { useState } from 'react'
import './MyForm.css'
const MyForm = ({user}) => {
    // 6 - Controlled Inputs

    // 3 - Gerenciamento de dados
    const [name, setName] = useState(user && user.name ? user.name : '')
    const [email, setEmail] = useState(user && user.email ? user.email : '')
    const [bio, setBio] = useState(user && user.bio ? user.bio : '')
    const [role, setRole] = useState(user && user.role ? user.role : "")
    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('name:', name)
        console.log('email:', email)
        console.log('bio:', bio)
        console.log('role:', role)

        // 7 - Limpar formulário
        setName('')
        setEmail('')
        setBio('')
        setRole('')
    }
    return(
        <form onSubmit={handleSubmit}>
            {/** 5 - envio de form */}
            {/** 1- Criacao de form */}
            <div>
                <label htmlFor="name">Nome:</label>
                <input 
                    type="text" 
                    name="name" 
                    placeholder='Digite o seu nome' 
                    onChange={handleName}
                    value={name}
                />
            </div>

            {/** 2 - Label envolvendo o input */}
            <label>
                <span>E-mail</span>
                {/** 4 - Simplificação de manipulação de state */}
                <input 
                    type="email" 
                    name="email" 
                    placeholder='Digite o seu e-mail' 
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </label>

            {/** 8 - Textarea */}
            <label>
                <span>Bio</span>
                <textarea
                    name="bio" 
                    onChange={(e) => setBio(e.target.value)}
                    value={bio}
                ></textarea> 
            </label>

            <label>
                <span>Função no sistema</span>
                <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                </select>
            </label>
            <input type="submit" value="Enviar" />
        </form>
    )
}

export default MyForm