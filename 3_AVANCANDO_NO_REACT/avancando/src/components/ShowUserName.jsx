const ShowUserName = (props) => {
    return (
        <div>
            <h1>Show User Name</h1>
            <h2>O nome do usuário é: {props.name} {props.lastName}</h2>
        </div>
    )
}

export default ShowUserName