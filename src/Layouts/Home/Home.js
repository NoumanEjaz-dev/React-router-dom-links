import React, { useState } from 'react';
import Navigationbar from '../../compnents/Navigationbar';

const Home  = ()=>{

    const [count , setcount] = useState(0);
 return(
     <>
      <div>
          <Navigationbar/>
      </div>
 
     <div className='count-box'>
        <p>You have clicked the counter <h2> {count} </h2> times</p>
        <button onClick={()=> setcount(count+1)}>Increase</button>
        <button onClick={()=> setcount(count-1)}>Decrease</button>
        <button onClick={()=> setcount(0)}>Reset</button>
     </div>

     
     </>
 )
}
export default Home;