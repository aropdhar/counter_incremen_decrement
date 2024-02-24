import { useState } from "react"


function App() {

  let [count , setcount ] = useState(0);
 
  let [error , seterror] = useState("");

  let [passShow , setpassshow] = useState(false)

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

//  password section

let handleShow = () =>{

  if(passShow){
    setpassshow(false)
  }
  else{
    setpassshow(true)
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
     
      <div className="password_main">

          <input type={passShow ? "text" : "password"} placeholder="Enter Your Password"/>
          <button onClick={handleShow}>{passShow ? "hide" : "show"}</button>
          
      </div>
    </>
  )
}

export default App
