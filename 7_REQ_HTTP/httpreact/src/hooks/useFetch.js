import { useState, useEffect } from "react";

// 4 - custom hook

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    // 5 - refatorando hook
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)

    // 6 - loading
    const [loading, setLoading] = useState(false)

    // 7 - tratando erros
    const [error, setError] = useState(null)

    // 8 - desafio
    const [itemId, setItemId] = useState(null)

    const httpConfig = (data, method, id = null) => {
        if(["POST", "DELETE"].includes(method)) {
            setConfig({
                method,
                headers: {
                    'Content-type': 'application/json'
                },
                body: method === 'POST' ? JSON.stringify(data): null
            })
        }

        if(id) {
            setItemId(id)
        }

        setMethod(method)
    }

    useEffect(() => {
        const fetchData = async () => {
            // 6 - loading
            setLoading(true)

            try {
                const res = await fetch(url)
                const json = await res.json()
                
                setData(json)
            } catch (error) {
                console.error(error.message)
                setError("Houve algum erro ao carregar os dados!")
            }

            setLoading(false)
        }

        fetchData()
    }, [url, callFetch])// se mudar a url executa novamente o hook

    // 5- refatorando post
    useEffect(() => {
        const httpRequest = async () => {
            if(method === 'POST') {
                const fetchOptions = [url, config]
    
                const res = await fetch(...fetchOptions)
                const json = await res.json()
                console.log(json)
                setCallFetch(json)
            }
            
        }
        httpRequest()
    },[config, method, url])

    useEffect(() => {
        const deleteRequest = async () => {
            if(method === 'DELETE') {
                const res = await fetch(`${url}/${itemId}`, config)
                const json = await res.json()
                
                setCallFetch(json)
            }
        }
        deleteRequest()
    }, [config, method, url, itemId]) 

    return { data, httpConfig, loading, error }// retornando os dados da aplicação 
}