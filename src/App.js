import React, { Component } from 'react'

export default class App extends Component {
componentDidMount(){
  localStorage.setItem("name","John Doe");
  sessionStorage.setItem("name","mark");


}
  funJs=(event)=>{
    event.preventDefault();
  }

  herfAdd=(event)=>{
event.preventDefault();
  }
  render() {
    return (
      <div className="App">
      <h1>JS value propertity......!</h1>
<form action="index.html">
  <label>
   Enter your name
  </label>
  <input 
    type="text" id="i"/>
  <br></br>
  <button onClick={this.funJs} type="submit">submit</button>
</form>
<a href="www.google.com" onClick={this.herfAdd}>google</a>
<h3>localStorage....!</h3>
<h3>{localStorage.getItem("name")}</h3>
<h3>sessionStorage....!</h3>
<h3>{sessionStorage.getItem("name")}</h3>
    </div>
   
    )
  }
}
