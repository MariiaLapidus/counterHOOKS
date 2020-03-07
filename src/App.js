import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./component/button/Button";
import Input from "./component/input/Input";
import Counter from "./component/counter/Counter";


function App() {
    const [count,setCount] = useState(0);
    const [inputValue, setValueCount] = useState('')

    const addMe = (number)=>{
        if(count+number>= 0){
            setCount(count+number)
        }
    };
    const clearCount = () => {
            setCount( 0)
            // setValueCount('') // для обнуления поля инпут
    };

    const saveValue = () => {
        setCount (+(count + +inputValue) >= 0 ? count + +inputValue : count +0 )
         // setValueCount('')
    };

    const changeInput = (event) => {
        setValueCount(event.target.value);
    };




    return (

    <div className="App">
        <div>
            <Counter count={count}/>
            <Button add={addMe} clear={clearCount} save={saveValue} change={changeInput } />
        </div>
    </div>
);
}

export default App;
