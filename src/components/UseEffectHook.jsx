   import {useState,useEffect} from "react"
   // useEffect(() => {
    //   first //? componentDidMount
    
    //   return () => {
    //     second //? Cleanup function (componentWillUnmount)
    //   }
    // }, [third]) //? Dependency Array



const UseEffectHook = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
     setTimeout(() => {
        alert("Data fetched")
     }, 3000);
    }, [count])
    

 const handleInc = () => {

    setCount(count+1)

  
 }


  return (
    <div className="container text-center" width="200px">
        <h1 className="text-danger">USEEFFECT</h1>
        <h3>COUNT:{count}</h3>
        <button className="btn btn-info" onClick={handleInc}>INC</button>
    </div>
  )
}

export default UseEffectHook 