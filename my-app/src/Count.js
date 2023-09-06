import React from 'react'
import { useState } from 'react'

export const Count = () => {

    // Increment and Decrement code
    const [num,setNum] = useState(0);
      const plus = () => {
        setNum(num + 1);
      }
      const sub = () => {
        setNum(num - 1);
      }
      const reset = () => {
        setNum(0);
      }

      // Dropdown code color pick
      const [color, setColor] = useState('red');
      const [resultsPerPage, setResultsPerPage] = useState('black');
      const colorChange = (event) => {
        const selectedOption = event.target.value;
        setResultsPerPage(selectedOption);
        setColor(selectedOption);
      };

        //Single click to color change randomly
        const [color1, setColor1] = useState('white');
        const colorNames = ['yellow', 'green', 'blue', 'violet', 'red','black'];
        const colorChange1 = () => {
            const randomIndex = Math.floor(Math.random() * colorNames.length);
            setColor1(colorNames[randomIndex]);
        };

        //To Change the background color randomly
        const [backgroundColor, setBackgroundColor] = useState('#ffffff');
        const colorNames2 = ['red', 'green', 'blue', 'violet', 'white'];
        const colorChange2 = () => {
        const randomIndex = Math.floor(Math.random() * colorNames.length);
        setBackgroundColor(colorNames2[randomIndex]);
        };

  return (
    <div style={{backgroundColor: backgroundColor}}> <br />
        <h2>This is the Count component</h2>

        <div class='box' style={{backgroundColor: color}}></div> <br />
        <div>
            <select value={resultsPerPage} onChange={colorChange}>
                <option value={'red'}>Red</option>
                <option value={'green'}>Green</option>
                <option value={'blue'}>Blue</option>
            </select>
        </div> <br />

        <div class='box' style={{backgroundColor: color1}}></div> <br />
        <button onClick={colorChange1}>Click me</button> <br />
    

        <div> <br />
            <button onClick={colorChange2}>Click me</button>
        </div>
    
        <h1>{num}</h1>
        <button onClick={plus}>+</button> &nbsp;
        <button onClick={sub}>-</button> &nbsp;
        <button onClick={reset}>reset</button> <br /><br />
    </div>
  )
}
