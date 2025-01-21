import './App.css'
import Card from './components/Card'
function App() {

  return (
    <div>
      <h1>Carros</h1>

      <Card
        brand="BMW"
        km={100000}
        color="Azul" 
        image_url="https://acroadtrip.blob.core.windows.net/catalogo-imagenes/xl/RT_V_069eb6f44f5547dca80f74d4c1974d77.jpg"
      />
      <Card
        brand="Ford"
        km={0}
        color="Vermelho" 
        image_url="https://http2.mlstatic.com/D_NQ_NP_747642-MLB31671762549_082019-O.webp"
      />
      <Card
        brand="Fiat"
        km={4500}
        color="Prata" 
        image_url="https://servicos.fiat.com.br/content/dam/recalls/8498-argo.png"
      />
    </div>
  )
}

export default App
