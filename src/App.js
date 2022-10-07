import DigitButton from "./DigitButton";
import "./style.css";

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
  PERCENT: "percent",
  CHANGE_SIGN: "change-sign",
};

function App() {
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">123.123</div>
        <div className="current-operand">222.222</div>
      </div>
      <button>AC</button>
      <button>C</button>
      <button>%</button>
      <button>÷</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>±</button>
      <button>0</button>
      <button>.</button>
      <button className="equal">=</button>
    </div>
  );
}

export default App;
