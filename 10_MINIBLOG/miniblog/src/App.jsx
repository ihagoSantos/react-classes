import './App.css'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { onAuthStateChanged } from 'firebase/auth' //mapeia se a autenticação do usuário foi feita com sucesso
//hooks
import { useState, useEffect } from 'react'
import { useAuthentication } from './hooks/useAuthentication'

// pages
import { Home } from './pages/Home/Home'
import { About } from './pages/About/About'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Login } from './pages/Login/Login'
import { Register } from './pages/Register/Register'
import { CreatePost } from './pages/CreatePost/CreatePost'
import { Dashboard } from './pages/Dashboard/Dashboard'

// context
import { AuthProvider } from './context/AuthContext'
import { Search } from './pages/Search/Search'
import { Post } from './pages/Post/Post'
import { EditPost } from './pages/EditPost/EditPost'
function App() {

  const [user, setUser] = useState(undefined)
  const {auth} = useAuthentication()
  
  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  },[auth])

  if(loadingUser){
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
      <AuthProvider value={{user}}> {/** Passa para o provider o usuário logado */}
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<Home/>}></Route>
              <Route path="/about" element={<About/>}></Route>
              <Route path="/search" element={<Search /> }></Route>
              <Route path="/posts/:id" element={<Post /> }></Route>

              {/* Private routes */}
              <Route path="/login" element={ !user ? <Login/> : <Navigate to="/"/> }></Route>
              <Route path="/register" element={ !user ? <Register/> : <Navigate to="/"/> }></Route>
              <Route path="/posts/create" element={user ? <CreatePost /> : <Navigate to="/login"/> }></Route>
              <Route path="/posts/edit/:id" element={user ? <EditPost /> : <Navigate to="/login"/> }></Route>
              <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login"/> }></Route>
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
      
    </div>
  )
}

export default App
