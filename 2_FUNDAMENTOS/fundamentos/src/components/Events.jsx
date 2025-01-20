const Events = () => {
    const handleMyEvent = (e) => {
        console.log("Evento", e.type)
    }

    const renderSomething = (x) => {
        if(x) {
            return <h1>Renderizando isso!</h1>
        } else {
            return <h1>Também posso renderizar isso!</h1>
        }
    } 

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={() => {console.log("Evento inline")}}>Clique aqui também!</button>
                <button onClick={(e) => {
                    if(e.type == "click") {
                        console.log("Isso não deveria existir. ;)")
                    }
                    
                }}>Clique aqui também 2!</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events