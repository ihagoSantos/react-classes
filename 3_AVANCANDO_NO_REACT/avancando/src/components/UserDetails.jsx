const UserDetails = ({
    id,
    name,
    age,
    job,
}) => {
    
    return (
        <p key={id}>
                <h2>{name}</h2>
                <b>Idade:</b> {age} <br />
                <b>Profissão:</b> {job} <br />
                <b>Situação:</b> {(age > 18) ? <span>Pode tirar carteira de habilitação</span> : <span>Menor de Idade</span> }
        </p>
    )
}

export default UserDetails