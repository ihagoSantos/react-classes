import './App.css'

// 1 - config react router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// 2 - Components
import Navbar from './components/Navbar'

// 3 - Pages
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Info from './pages/Info'
import NotFound from './pages/NotFound'
import SearchForm from './components/SearchForm'
import Search from './pages/Search'

function App() {
  return (
    <div>
      {/* Elementos fora do BrowserRouter serão repeditos em todas as páginas*/}
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar /> {/* Navbar precisa ficar dentro do BrowserRouter pois ele utiliza elementos do mesmo*/}

        {/* 9 - search */}
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          {/* 4 - Rota Dinâmica */}
          <Route path="/products/:id" element={<Product />} />
          {/* 5 - nested routes */}
          <Route path="/products/:id/info" element={<Info />} />
          {/* 9 - search */}
          <Route path="/search" element={<Search />}/>
          {/* 10 - redirect */}
          <Route path="/company" element={<Navigate to="/about"/>}/>

          {/* 7 - no match route */}
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
