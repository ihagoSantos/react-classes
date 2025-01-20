const Container = ({ children, myValue }) => {
    return (
        <div>
            <h1>Este é o título do container</h1>
            {children}
            <p>{myValue}</p>
        </div>
    )
}

export default Container