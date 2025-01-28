import { auth } from '../firebase/config'

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
} from 'firebase/auth'

import { useState, useEffect } from 'react'

export const useAuthentication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    // cleanup
    // deal with memory leak
    const [cancelled, setCancelled] = useState(false)

    const checkIfisCancelled = () => {
        if(cancelled) { return }
    }

    // Register
    const createUser = async (data) => {
        checkIfisCancelled()
        
        setLoading(true)
        setError(null)

        try {
            const {user} = await createUserWithEmailAndPassword(auth, data.email, data.password)
            await updateProfile(user, {displayName: data.displayName})

            setLoading(false)
            
            return user
        } catch (error) {

            let systemErrorMessage
            
            if(error.message.includes("Password")) {
                systemErrorMessage = "A senha precisa ter pelo menos 6 caracteres."
            } else if (error.message.includes('email-already')){
                systemErrorMessage = "Não foi possível cadastrar o usuário."
            } else {
                systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde."
            }

            setError(systemErrorMessage)
        }

        setLoading(false)

    }

    // Logout
    const logout = async () => {
        checkIfisCancelled()

        signOut(auth)
    } 

    // Login
    const login = async (data) => {
        checkIfisCancelled()
        
        setLoading(true)
        setError(null)

        try {
            const {user} = await signInWithEmailAndPassword(auth, data.email, data.password)
            
            setLoading(false)
            
            return user

        } catch (error) {
            let systemErrorMessage
            
            if(error.message.includes("invalid-credential") || error.message.includes("wrong-password") || error.message.includes("user-not-found")) {
                systemErrorMessage = "Não foi possível realizar o login."
            } else {
                systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde."
            }

            setError(systemErrorMessage)
        }

        setLoading(false)

    }

    useEffect(() => {
        setCancelled(true)
    }, [])

    return {
        auth,
        createUser,
        error,
        loading,
        logout,
        login
    }

}