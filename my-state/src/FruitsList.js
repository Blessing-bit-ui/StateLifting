import React, { useContext } from 'react';
import { FruitsContext } from './App';
function FruitsList(){
    const fruits =useContext(FruitsContext);
   return(
    <div>
        <p>This fruits is called:{fruits.map((fruit,index)=>(
            <li key={index}>{fruit.name}</li>
        ))}</p>
    </div>
   )
}
export default FruitsList;