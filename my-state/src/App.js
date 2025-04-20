import logo from './logo.svg';
import './App.css';
import FruitsList from './FruitsList'
import { createContext } from 'react'
import { useContext } from 'react'

export const FruitsContext = createContext([
  { name: "Apple", id: "1" },
  { name: "Orange", id: "2" },
  { name: "Lemon", id: "3" },
]);

function App(){
  const fruit = useContext(FruitsContext)
  return(
    <div>
      <FruitsList name={fruit} />
    </div>
  )  
}
export default App;
