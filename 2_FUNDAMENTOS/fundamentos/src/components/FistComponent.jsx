import MyComponent from "./MyComponent"

const FirstComponent = () => {
    return (
        <>
            {/* 
            Comentário do componente com múltiplas linhas é definido dessa forma 
            */}
            {
            // asdasd
            }
            <h2>Meu Primeiro Componente</h2>
            <p className='test'>Meu texto</p>
            <MyComponent/>
        </>
    )
}

export default FirstComponent