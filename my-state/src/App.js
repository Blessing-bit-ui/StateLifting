import logo from './logo.svg';
import './App.css';
import FruitsList from './FruitsList'
import { createContext } from 'react'
import { useContext } from 'react'

function App(){
  const fruits = createContext([
    {name:"Apple", id:"1"},
    {name:"Orange", id:"2"},
    {name: "Lemon", id:"3"}
  ])
  const fruit =useContext()
  return(
    <div>
      <FruitsList name={fruits} />
    </div>
  )  
}
export default App;
