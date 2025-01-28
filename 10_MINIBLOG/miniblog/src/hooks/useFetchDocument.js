import { useEffect, useState } from "react"
import { db } from "../firebase/config"
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { useFormatDate } from "./useFormatDate"
export const useFetchDocument = (docCollection, id) => {
    const [ document, setDocument ] = useState(null)
    const [ error, setError ] = useState(null)
    const [ loading, setLoading ] = useState(null)
    const formatDate = useFormatDate()
    // deal with memory leak
    const [ cancelled, setCancelled ] = useState(false)
    useEffect(() => {
        async function loadDocument() {
            if(cancelled) return

            setLoading(true)

            try {
                const docRef = await doc(db, docCollection, id)
                const docSnap = await getDoc(docRef)
                const data = docSnap.data()
                setDocument({
                    ...data,
                    createdAt: formatDate(data.createdAt)
                })
            } catch (error) {
                console.error(error)
                setError(error.message)
            } finally {
                setLoading(false)
            }
            
        }

        loadDocument()
    }, [docCollection, id, cancelled, formatDate])

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return {
        document,
        error,
        loading
    }
}