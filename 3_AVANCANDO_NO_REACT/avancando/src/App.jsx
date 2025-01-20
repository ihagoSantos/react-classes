import './App.css'
import { useState } from 'react'

import City from './assets/city.jpg'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Fragments from './components/Fragments'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'
import UserDetails from './components/UserDetails'

function App() {
  const name = "Ihago"
  const [lastName] = useState("Santos")
  const cars = [
    {id: 1, brand: "Ferrari", km: 0, color: "Amarela", newCar: true},
    {id: 2, brand: "KIA", km: 1000, color: "Branco", newCar: false},
    {id: 3, brand: "Renault", km: 1003, color: "Azul", newCar: false},
  ]

  const showMessage = () => {
    console.log("Mensagem")
  }

  const [message, setMessage] = useState("")
  const handleMessage = (msg) => {
    setMessage(msg)
  }
  const users = [
    {id: 1, name: "João", age: 25, job: "Engenheiro"},
    {id: 2, name: "José", age: 15, job: "Estudante"},
    {id: 3, name: "Maria", age: 39, job: "Médica"},
]
  return (
    <>
      <h1>Avançando em React</h1>
      {/** Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      <hr />
      {/** Imagem em asset */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <hr />
      
      <ManageData/>

      <hr />

      <ListRender/>

      <hr />
      <ConditionalRender/>

      <hr />
      <ShowUserName
        name={name}
        lastName={lastName}
      />

      <hr />
      {/**Destructuring */}
      <CarDetails
        brand="BMW"
        km={100000}
        color="Azul" 
        newCar={false}
      />
      {/**Reaproveitando */}
      <CarDetails
        brand="Ford"
        km={0}
        color="Vermelho" 
        newCar={true}
      />
      <CarDetails
        brand="Fiat"
        km={4500}
        color="Branco" 
        newCar={false}
      />
      <hr />

      {cars.map(car => {
        return (
          <CarDetails
            key={car.id}
            brand={car.brand}
            km={car.km}
            color={car.color}
            newCar={car.newCar}
          />
        )
      })}

      <hr />
      {/**Fragments */}
      <Fragments/>

      <hr />
      {/**Children */}
      <Container myValue="Teste">
        <h3>E este é o conteúdo do container.</h3>
      </Container>

      <hr />
      {/**Executar a função */}
      <ExecuteFunction myFunction={showMessage}/>
      
      <hr />
      {/**State Lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
      
      <hr />
      {/**Desafio */}
      <h1>Desafio</h1>
      {
        users.map((user, i) => {
          return (
            <UserDetails
              id={user.id}
              name={user.name}
              age={user.age}
              job={user.job}
            />
          )
        })
      }
      
    </>
  )
}

export default App
