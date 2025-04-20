import logo from './logo.svg';
import './App.css';
import FruitsList from './FruitsList'
import { createContext } from 'react'

export const FruitsContext = createContext([
  { name: "Apple", id: "1" },
  { name: "Orange", id: "2" },
  { name: "Lemon", id: "3" },
]);

function App(){
  return(
    <div>
   <FruitsContext.Provider value={[
{ name: "Apple", id: "1" },
  { name: "Orange", id: "2" },
  { name: "Lemon", id: "3" },
   ]}>
      <FruitsList />
    </FruitsContext.Provider>
    </div>
  )  
}
export default App;
