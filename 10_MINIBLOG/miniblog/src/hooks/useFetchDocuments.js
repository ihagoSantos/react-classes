import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, query, orderBy, onSnapshot, where, Timestamp } from "firebase/firestore";

const formatDate = (date) => {
    const timestamp = new Timestamp(date.seconds, date.nanoseconds)
    return new Date(timestamp.toDate()).toISOString("pt-BR").split("T")[0]
}

export const useFetchDocuments = (docCollection, search = null, uid = null) => {
    const [ documents, setDocuments ] = useState(null)
    const [ error, setError ] = useState(null)
    const [ loading, setLoading ] = useState(null)

    // deal with memory leak
    const [ cancelled, setCancelled ] = useState(false)

    useEffect(() => {
        async function loadData() {
            if(cancelled) return

            setLoading(true)

            const collectionRef = await collection(db, docCollection)
            
            try {
                let q

                if (search) {
                    q = await query(collectionRef, where('tagsArray', 'array-contains', search), orderBy("createdAt", 'desc'))
                } 
                else if (uid) {
                    q = await query(collectionRef, where('uid', '==', uid), orderBy("createdAt", 'desc'))
                }
                else {
                    q = await query(collectionRef, orderBy("createdAt", "desc"))
                }
                
                await onSnapshot(q, (querySnapshot) => {
                    
                    setDocuments(
                        querySnapshot.docs.map((doc) => {
                            const data = doc.data()
                            
                            
                            return {
                                id: doc.id,
                                ...data,
                                createdAt: formatDate(data.createdAt)
                            }
                        })
                    )
                })
                
            } catch (error) {
                console.log(error)
                setError(error.message)
                
            } finally {
                setLoading(false)
            }
        }

        loadData() // função loadData só será chamada quando algum dado do array observado mudar
    }, [docCollection, search, uid, cancelled])

    // lida com vazamento de memória
    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return {
        documents,
        error,
        loading
    }
}