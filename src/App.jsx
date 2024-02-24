import { useState } from "react"


function App() {

  let [count , setcount ] = useState(0);
 
  let [error , seterror] = useState("");

  let handleincrement = () =>{

        if (count >= 10){
          
          seterror("10 boro nawa jabe na");

        }
        
        else{

          seterror("")
          count++
          setcount(count)

        }

  }

  let handledecrement = () =>{

    if( count <= 0 ){
      
      seterror("0 niche jawa jabe na");
    }
    else{
      seterror("")
      count--
      setcount(count)
    }
  }

  return (
    <>

     <div className="count_main">
      
          {count >= 10 

          ?
          <button className="btn disable">Increment</button>
          :
          <button className="btn" onClick={handleincrement}>Increment</button>
          }

          <p>{count}</p>

          {count <= 0

          ?
          <button className="btn disable">Decrement</button>
          :
            <button className="btn" onClick={handledecrement}>Decrement</button>
          }
     </div>
     
     
    </>
  )
}

export default App
