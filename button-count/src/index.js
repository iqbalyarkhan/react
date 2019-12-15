import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Button from './Button';
import * as serviceWorker from './serviceWorker';

function Button(props){
    // const [numberOfClicks, updateNumberOfClicks] = useState(0);
    // const handleClick = () => updateNumberOfClicks(numberOfClicks + 1);
    return (
        <div>
            <button onClick={props.counter}>
                Click to increment counter below....
            </button>
        </div>
    )
}

function Display(props){
    return(
        <div>

            {props.message}

        </div>
    )
}

function App(){
    const [numberOfClicks, updateNumberOfClicks] = useState(0);
    const incrementCounter = () => updateNumberOfClicks(numberOfClicks + 1)
    return(
        <>
            <Button counter={incrementCounter}/>
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
