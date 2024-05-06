import React from "react"

class LifeCycleMethods extends React.Component {

  constructor(props) {
    console.log("1 - constructor run")
    super(props)
    this.state = {
      count: 0,
    }
  }

  componentDidMount() {
    console.log("3 - componentDidMount")
  }
  componentDidUpdate() {
    console.log("4 - componentDidUptade")
  }

  componentWillUnmount() {
    console.log("5 - componentWillUnmount")
  }

   handleInc = () => {
    this.setState({
      count: this.state.count + 1
    })
   }

  
  
  render() {
 console.log("2 - render run")
    return (
      <div className="container text-center">
        <h1 className="text-danger">LIFECYCLE METHODS</h1>
        <h3>COUNT:{this.state.count}</h3>
        <button className="btn btn-info" onClick={this.handleInc}  >
          INC
        </button>
      </div>
    )
  }
}
export default LifeCycleMethods
