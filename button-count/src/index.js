import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Button from './Button';
import * as serviceWorker from './serviceWorker';

function Button(props){
    // const [numberOfClicks, updateNumberOfClicks] = useState(0);
    const handleClick = () => props.counter(props.incrementAmount);
    return (
        <div>
            <button onClick={handleClick}>
                Click to increment counter below by {props.incrementAmount}
            </button>
        </div>
    )
}

function Display(props){
    return(
        <div>

            From Display: {props.message}

        </div>
    )
}

function App(){
    //Generic variable to hold the amount to increment
    // const incrementBy = 3;
    const [numberOfClicks, updateNumberOfClicks] = useState(0);
    const incrementCounter = (incrementValue) => updateNumberOfClicks(numberOfClicks + incrementValue);
    return(
        <>
            <Button counter={incrementCounter} incrementAmount={1}/>
            <Button counter={incrementCounter} incrementAmount={3}/>
            <Button counter={incrementCounter} incrementAmount={5}/>
            <Button counter={incrementCounter} incrementAmount={10}/>
            <Button counter={incrementCounter} incrementAmount={20}/>
            <Button counter={incrementCounter} incrementAmount={100}/>
            <Display message={numberOfClicks}/>
        </>
    )
}

//Using our Button component as a self closing tag - <Button />
//The second argument is where we wish to show the component - this is the
//entry point for react
ReactDOM.render( <App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
