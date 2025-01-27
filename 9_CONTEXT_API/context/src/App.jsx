import './App.css'

import {
  BrowserRouter,
  Routes,
  Route

} from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Navbar } from './components/Navbar'
import { Perfil } from './pages/Perfil'
function App() {

  return (
    <div className='App'>
      <h1>Context API</h1>
      
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/perfil" element={<Perfil/>}/>
          <Route path="/about" element={<About/>}/>

        </Routes>

      </BrowserRouter>
    </div>

  )
}

export default App
