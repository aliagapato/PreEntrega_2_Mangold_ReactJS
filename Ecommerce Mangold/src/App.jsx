import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavBar />
        <ItemListContainer greeting = {'¡Bienvenidos!'} />
        <ItemCount />
      </div>
      
    </>
  )
}

export default App
