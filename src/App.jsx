import React, { useState } from "react";
import './App.css'

function App() {
  const [input, setInput] = useState("0");  // To show input/output
  const [previousInput, setPreviousInput] = useState(""); // To store the previous input
  const [operator, setOperator] = useState(""); // To store the current operator
  const [calculated, setCalculated] = useState(false); // To handle new calculations after "="

  // Handle clicking on digits
  const handleDigitClick = (digit) => {
    if (calculated) {
      setInput(digit);  // Start new calculation
      setCalculated(false);
    } else {
      setInput((prevInput) => (prevInput === "0" ? digit : prevInput + digit)); // Prevent multiple leading zeros
    }
  };

  // Handle clicking on operators
  const handleOperatorClick = (op) => {
    if (input !== "" && operator !== "") {
      setPreviousInput(input);
      setInput("");
      setOperator(op);
    } else if (input !== "") {
      setPreviousInput(input);
      setOperator(op);
      setInput("");
    }
  };

  // Handle calculation
  const handleCalculate = () => {
    let result;
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(input);

    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        return;
    }

    setInput(result.toString());
    setPreviousInput("");
    setOperator("");
    setCalculated(true);
  };

  // Handle decimal point
  const handleDecimal = () => {
    if (!input.includes(".")) {
      setInput(input + ".");
    }
  };

  // Handle clear button
  const handleClear = () => {
    setInput("0");
    setPreviousInput("");
    setOperator("");
  };

  return (
    <div className="calculator">
      <div id="display" className="display">
        {input}
      </div>
      <div className="buttons">
        <button id="clear" onClick={handleClear}>C</button>
        <button id="divide" onClick={() => handleOperatorClick("/")}>&#247;</button>
        <button id="multiply" onClick={() => handleOperatorClick("*")}>*</button>
        <button id="subtract" onClick={() => handleOperatorClick("-")}>-</button>

        <button id="seven" onClick={() => handleDigitClick("7")}>7</button>
        <button id="eight" onClick={() => handleDigitClick("8")}>8</button>
        <button id="nine" onClick={() => handleDigitClick("9")}>9</button>
        <button id="add" onClick={() => handleOperatorClick("+")}>+</button>

        <button id="four" onClick={() => handleDigitClick("4")}>4</button>
        <button id="five" onClick={() => handleDigitClick("5")}>5</button>
        <button id="six" onClick={() => handleDigitClick("6")}>6</button>

        <button id="one" onClick={() => handleDigitClick("1")}>1</button>
        <button id="two" onClick={() => handleDigitClick("2")}>2</button>
        <button id="three" onClick={() => handleDigitClick("3")}>3</button>

        <button id="zero" onClick={() => handleDigitClick("0")}>0</button>
        <button id="decimal" onClick={handleDecimal}>.</button>
        <button id="equals" onClick={handleCalculate}>=</button>
      </div>
    </div>
  );
}

export default App;
