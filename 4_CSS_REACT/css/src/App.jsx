import './App.css'
import MyComponent from './components/MyComponent'
import {useState} from 'react'
import Title from './components/Title'
function App() {
  const n = 9
  const [name] = useState('Matheus')
  const redTitle = true
  return (
    <div className='App'>
      {/**CSS Global */}
      <h1>React Com CSS</h1>
      {/**CSS de componente */}
      <MyComponent/>
      <p>Esse parágrafo é do App.jsx</p>

      {/**Inline css */}
      <p style={{color: "blue", padding: '25px', borderTop: '2px solid red'}}>Este elemento foi estilizado de forma inline</p>

      {/**CSS inline dinâmico */}
      <h2 style={n < 10 ? {color: "purple"} : {color: "pink"}} >CSS Dinâmico</h2>
      <h2 style={name == 'Matheus' ? {color: "green", backgroundColor: "#000"} : null} >CSS Dinâmico</h2>

      {/**Classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>Este título terá classe dinâmica</h2>

      {/**CSS Modules */}
      <Title/>
      <h2 className="my_title">Meu Título 2</h2>
    </div>
  )
}

export default App
