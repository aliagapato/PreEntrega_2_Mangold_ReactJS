import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavBar />
        <ItemListContainer greeting = {'¡Bienvenidos!'} />
        <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada',quantity)}/>
        <ItemDetailContainer />
      </div>
      
    </>
  )
}

export default App
