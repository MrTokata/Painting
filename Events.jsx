import React from "react";
class Events extends React.Component{
    HandleONclick(){
        alert("So this Event JSX Element");
    }
    render(){
      return(
        <button onClick={this.HandleONclick}>Click Me</button>
    );  
    }
}
export default Events;