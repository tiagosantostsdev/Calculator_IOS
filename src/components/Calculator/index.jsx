import { useState } from 'react';
import './Calculator.css';

export const Calculator = () => {

    const [num, setNum] = useState(0);
    const [oldNum, setoldNum] = useState();
    const [numOld, setnumOld] = useState();
    const [operator, setOperator] = useState();
    const [res, setRes] = useState();

    const handleClick = (e) => {
        if (num === 0) {
            setNum(e.target.value)
        } else {
            setNum(num + e.target.value)
        }
    }

    const Clear = () => {
        setNum(0);
        setoldNum();
        setOperator();
        setnumOld();
    }

    const changeOperator = () => {
        if (num > 0) {
            setNum(- num)
        } else {
            setNum(Math.abs(num));
        }
    }

    const Porc = () => {
        setNum(num / 100);
    }

    const dot = (e) => {
        setNum(num + e.target.value)
    }

    const operatorClick = (e) => {
        setOperator(e.target.value);
        setoldNum(num);
        setNum(0);
    }

    const equalClick = () => {
        switch (operator) {
            case ("/"):
                setNum(oldNum / num);
                setnumOld(num)
                break;
            case ("x"):
                setNum(oldNum * num);
                setnumOld(num)
                break;
            case ("-"):
                setNum(oldNum - num);
                setnumOld(num)
                break;
            case ("+"):
                setNum(parseFloat(oldNum) + parseFloat(num));
                setnumOld(num)
                break;
        }
        setnumOld();
        setoldNum();
        setOperator();
    }

    return (
        <>
            <div className='Container'>
                <div className='Container_btn'>
                    <div className='display'>
                        <p className='oldNum'>{oldNum} {operator} {numOld}</p>
                        <p>{num}</p>
                    </div>
                    <button onClick={Clear}>AC</button>
                    <button onClick={changeOperator}>+/-</button>
                    <button onClick={Porc}>%</button>
                    <button onClick={operatorClick} value={'/'} className='btn_orange'>/</button>
                    <button onClick={handleClick} value={7} className='btn_gray'>7</button>
                    <button onClick={handleClick} value={8} className='btn_gray'>8</button>
                    <button onClick={handleClick} value={9} className='btn_gray'>9</button>
                    <button onClick={operatorClick} value={'x'} className='btn_orange'>x</button>
                    <button onClick={handleClick} value={4} className='btn_gray'>4</button>
                    <button onClick={handleClick} value={5} className='btn_gray'>5</button>
                    <button onClick={handleClick} value={6} className='btn_gray'>6</button>
                    <button onClick={operatorClick} value={'-'} className='btn_orange'>-</button>
                    <button onClick={handleClick} value={1} className='btn_gray'>1</button>
                    <button onClick={handleClick} value={2} className='btn_gray'>2</button>
                    <button onClick={handleClick} value={3} className='btn_gray'>3</button>
                    <button onClick={operatorClick} value={'+'} className='btn_orange'>+</button>
                    <button onClick={handleClick} value={0} className='btn_zero'>0</button>
                    <button onClick={dot} value="." className='btn_gray'>.</button>
                    <button onClick={equalClick} className='btn_orange'>=</button>
                </div>
            </div>
        </>
    )
}