import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


// class Button extends React.Component{
//
//   constructor(props) {
//     super(props);
//     this.state = {numberOfClicks: 0};
//   }
//
//   //This is not Javascript but JSX that is being
//   //converted to react API calls using Babel that converts
//   //JSX to react API calls
//   render(){
//     return (
//         <div>
//           <button onClick={ () => this.setState({numberOfClicks: this.state.numberOfClicks + 1})}>{this.state.numberOfClicks}</button>
//         </div>
//     );
//   }
// }

function Button(){
  const [numberOfClicks, updateNumberOfClicks] = useState(0);
  return (
      <div>
        <button onClick={
          () => updateNumberOfClicks(numberOfClicks + 1)
        }>
          {numberOfClicks}
        </button>
      </div>
  )
}

export default Button;
