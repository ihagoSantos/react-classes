import { useState, useEffect } from "react"
export const List = ({getItems}) => {

    const [items, setItems] = useState([])

    useEffect(() => {
        console.log("Buscando itens do DB...")
        setItems(getItems())
        
    },[getItems])
    return (
        <div>
            <h2>List</h2>
            {items.map((item) => (
                <div key={item}>{item}</div>
            )) }
        </div>
    )
}