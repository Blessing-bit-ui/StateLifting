import React, { useContext } from 'react';
import { FruitContext } from 'App'
function FruitsList(){
    const fruit =useContext(FruitContext)
   return(
    <div>
        This fruits is called:{fruit}
    </div>
   )
}
export default FruitsList;