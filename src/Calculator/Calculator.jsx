import React, { useState } from 'react';
import './style.css';

const Calculator = ({ input1, input2 }) => {
    const [num, setNum] = useState(0);
    return (
        <div>
            <div>
                <button onClick={() => {
                    setNum(+input1 + +input2)
                }}>+</button>

                <button onClick={() => {
                    setNum(+input1 - +input2)
                }}>-</button>

                <button onClick={() => {
                    setNum(+input1 * +input2)
                }}>*</button>

                <button onClick={() => {
                    setNum(+input1 / +input2)
                }}>/</button>

                <button onClick={() => {
                    setNum(Math.pow(input1, input2))
                }}>степень</button>

                <button onClick={() => {
                    setNum(Math.pow(input1, 1/ input2))
                }}>корень</button>

            </div>


            <h1>{num}</h1>
        </div>
    );
}

export default Calculator;


