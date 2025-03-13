import { useState } from "react";
import { Button } from "react-bootstrap";

export default function Calculator() {
  const[output, setOutput] = useState("");
  const[expression, setExpression] = useState("");
  
  function appendExpression(char) {
    let tempChar = char;
    if (char === "*") tempChar = "x";
    if (char === "/") tempChar = "÷";

    setOutput(output + tempChar)
    setExpression(expression + char)
  }


  function handleClear() {
    setOutput("")
    setExpression("")
  }

  function handleEquals() {
    try{
      const result = eval(expression);
      setOutput(result.toString());
      setExpression(result.toString());
    }
    catch(error) {
      alert("Please enter a valid expression.")
      return;
    }
  }

  return(
    <>
      <title>Calculator</title>
      <div className="calc-container rounded shadow-lg">
        <Display content = {output}/>
        <div className="buttons-container">
          <div className="main-button-container">
            <Button variant="btn btn-light"  onClick={() => appendExpression("+")}>+</Button>
            <Button variant="btn btn-light"  onClick={() => appendExpression("-")}>-</Button>
            <Button variant="btn btn-light"  onClick={() => appendExpression("*")}>x</Button>
            <Button variant="btn btn-light"  onClick={() => appendExpression("7")}>7</Button>
            <Button variant="btn btn-light"  onClick={() => appendExpression("8")}>8</Button>
            <Button variant="btn btn-light"  onClick={() => appendExpression("9")}>9</Button>
            <Button variant="btn btn-light"  onClick={() => appendExpression("4")}>4</Button>
            <Button variant="btn btn-light"  onClick={() => appendExpression("5")}>5</Button>
            <Button variant="btn btn-light"  onClick={() => appendExpression("6")}>6</Button>
            <Button variant="btn btn-light"  onClick={() => appendExpression("1")}>1</Button>
            <Button variant="btn btn-light"  onClick={() => appendExpression("2")}>2</Button>
            <Button variant="btn btn-light"  onClick={() => appendExpression("3")}>3</Button>
            <Button variant="btn btn-light"  onClick={() => appendExpression("0")}>0</Button>
            <Button variant="btn btn-light"  onClick={() => appendExpression(".")}>.</Button>
            <Button variant="btn btn-light"  onClick={() => handleClear()}>C</Button>
          </div>
          <div className="right-column-container">
            <Button variant="btn btn-light"  onClick={() => appendExpression("/")}>÷</Button>
            <Button variant="primary" className="rounded" id="equal-btn" onClick={() => handleEquals("/")}>=</Button>
          </div>
        </div>
      </div>
    </>
  )
}

function Display({content}) {
  return(
    <>
      <p className="display-text h1 rounded">{content}</p>
    </>
  )
}