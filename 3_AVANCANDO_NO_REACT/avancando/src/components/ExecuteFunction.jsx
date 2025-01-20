// eslint-disable-next-line react/prop-types
const ExecuteFunction = ({myFunction}) => {
    return (
        <div>
            <h1>Execute Function</h1>
            <button onClick={myFunction}>Executar Função</button>
        </div>
    )
}
export default ExecuteFunction