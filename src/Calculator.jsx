import React, {useState} from 'react';

function Calculator() {

    const [currentValue, setCurrentValue] = useState('');
    const [prevValue, setPrevValue] = useState('');
    const [operator, setOperator] = useState();
    let result = 0;

    function handleValue(value){
        setCurrentValue(currentValue+value);
    }
    function handleOperator(op){
        setPrevValue(parseFloat(currentValue));
        setCurrentValue('');
        setOperator(op);
    }
    function handleDecimal(){
        setCurrentValue(currentValue + '.');
    }
    function handlePercentage(){
        setCurrentValue(currentValue / 100);
    }
    function handleResult(){
        const num1 = prevValue;
        const num2 = parseFloat(currentValue);

        switch(operator) {
            case '+':
                result = num1+num2;
            break;
            case '-':
                result = num1-num2;
            break;
            case 'x':
                result = num1*num2;
            break;
            case '÷':
                result = num1/num2;
            break;
        }
        setCurrentValue(result);
    }
    function handleClear(){
        setCurrentValue('');
    }

    return(<div className="container">
        <input className="input" type='text' value={currentValue} readOnly/><br/>
        <span>
            <button className="clear" onClick={handleClear}>CLEAR</button>
            <button className="percentage" onClick={()=>handlePercentage()}>%</button>
            <button className="divide" onClick={()=>handleOperator('÷')}>÷</button>
        </span><br/>
        <span>
            <button className="seven" onClick={()=>handleValue(7)}>7</button>
            <button className="eight" onClick={()=>handleValue(8)}>8</button>
            <button className="nine" onClick={()=>handleValue(9)}>9</button>
            <button className="multiply" onClick={()=>handleOperator('x')}>x</button>
        </span><br/>
        <span>
            <button className="four" onClick={()=>handleValue(4)}>4</button>
            <button className="five" onClick={()=>handleValue(5)}>5</button>
            <button className="six" onClick={()=>handleValue(6)}>6</button>
            <button className="minus" onClick={()=>handleOperator('-')}>-</button>
        </span><br/>
        <span>
            <button className="one" onClick={()=>handleValue(1)}>1</button>
            <button className="two" onClick={()=>handleValue(2)}>2</button>
            <button className="three" onClick={()=>handleValue(3)}>3</button>
            <button className="add" onClick={()=>handleOperator('+')}>+</button>
        </span><br/>
        <span>
            <button className="zero" onClick={()=>handleValue(0)}>0</button>
            <button className="decimal" onClick={()=>handleDecimal()}>.</button>
            <button className="equal" onClick={()=>handleResult()}>=</button>
        </span>
    </div>);
}
export default Calculator