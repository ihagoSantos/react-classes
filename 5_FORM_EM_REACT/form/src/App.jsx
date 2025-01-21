import './App.css'
import MyForm from './components/MyForm'

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm
      user={{
        name: "Josias",
        email: "teste@teste.com",
        bio: "teste",
        role: "admin"
      }}
      />
    </div>
  )
}

export default App
