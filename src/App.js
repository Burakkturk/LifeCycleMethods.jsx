// import LifeCycleMethods from "./components/LifeCycleMethods"
// import { useState } from "react"
// import UseEffectHook from "./components/UseEffectHook"
import { useState } from "react"
import LifeCycleMethods from "./components/LifeCycleMethods"
import User from "./components/User"
import UseEffectHook from "./components/UseEffectHook"

function App() {
  const [visible,setVisible] = useState(false)
  // const [visible, setVisible] = useState(false)
  return (
    <div className="container text-center mt-4">
      {/* <button className="btn btn-danger" onClick={() => setVisible(!visible)}> */}
      {/* Show/Hide
      </button> */}

      {/* {visible && <LifeCycleMethods />} */}

      {/* {visible && <UseEffectHook />} */}
      <button className="btn btn-danger" onClick={() => setVisible(!visible)}>Show/Hide</button>
{/* 
      {visible && <LifeCycleMethods/>} */}
      {visible && <UseEffectHook/>}



{/* <LifeCycleMethods/> */}


      {/* <User /> */}
    </div>
  )
}

export default App
