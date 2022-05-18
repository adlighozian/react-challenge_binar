import logo from "./logo.svg";
import "./App.css";

function App() {
  let $buttons = document.querySelectorAll("button");
  let ui = document.querySelector(".userEntry");
  let finalCalc = document.querySelector(".finalCalc");
  let opPressed = false;

  let valOne = [];
  let valTwo = [];
  var operator = [];
  let finalAnswer = 0;

  function clearDisplay() {
    ui.textContent = "";
    finalCalc.textContent = "";
    valOne = [];
    valTwo = [];
    operator = [];
  }

  function removeNumber(e) {
    valOne.pop();
    ui.textContent = valOne.join("");
  }

  function makeNegative() {
    if (valOne.length < 1) {
      return false;
    } else if (valOne[0] == "-") {
      valOne.shift();
    } else {
      valOne.unshift("-");
    }
    ui.textContent = valOne.join("");
  }

  function makeCalculation() {
    if (valTwo.length > 0 && operator.length !== 0) {
      //finalAnswer = valTwo.concat(operator, valOne).join("");
      finalAnswer = eval(valTwo + operator + valOne.join(""));
      finalCalc.textContent = "";
      finalCalc.textContent = eval(finalAnswer).toFixed(2);
      ui.textContent = "";
      valTwo = eval(finalAnswer);
      valOne = [];
      //operator = [];
    } else if (operator.length == 0) {
      alert("invalid calculation there is no operator");
    } else {
      //finalAnswer = valTwo.concat(operator, valOne).join
      finalAnswer = finalAnswer = eval(valTwo + operator + valOne.join(""));

      console.log("final answer");
      console.log(finalAnswer);
      finalCalc.textContent = "";
      ui.textContent = "";
      finalCalc.textContent = eval(finalAnswer).toFixed(2);
      //operator = [];
      valTwo = eval(finalAnswer);
      valOne = [];
    }
  }

  function storeValue() {
    if (valOne.length == 0 && valTwo.length == 0) {
      return false;
    } else if (valTwo.length > 0) {
      finalCalc.textContent = valTwo + " " + operator;
    } else if (valTwo.length == 0) {
      valTwo.push(valOne.join(""));
      valOne = [];
      ui.textContent = "";
      finalCalc.textContent = "";
      finalCalc.textContent = valTwo + " " + operator;
    }
    finalCalc.textContent = valTwo + " " + operator;
  }

  [...$buttons].map((x) => {
    x.addEventListener("click", function (e) {
      switch (this.innerHTML) {
        case "AC":
          clearDisplay();
          break;
        case "DEL":
          removeNumber();
          break;
        case "+/-":
          makeNegative();
          break;
        case "=":
          makeCalculation();
          break;
        case "+":
          operator.splice(0, 1, this.innerHTML);
          console.log(operator);

          storeValue();
          break;
        case "*":
          operator.splice(0, 1, this.innerHTML);
          console.log(operator);

          storeValue();
          break;
        case "/":
          operator.splice(0, 1, this.innerHTML);
          console.log(operator);

          storeValue();
          break;
        case "-":
          operator.splice(0, 1, this.innerHTML);
          console.log(operator);
          storeValue();
          break;
        default:
          if (valOne.length > 11) {
            alert("No more values beyond 8");
          } else {
            valOne.push(this.innerText);
            ui.textContent = valOne.join("");
            console.log(valOne);
          }
          break;
        case ".":
          if (valOne.includes(".")) {
            alert("You cannot use anymore decimals");
          } else {
            valOne.push(this.innerText);
            ui.textContent = valOne.join("");
          }
          break;
      }
    });
  });

  return (
    <div class="calculator">
      <div class="userInput">
        <p class="userEntry"></p>
        <p class="finalCalc"></p>
      </div>

      <div class="calcButtons">
        <button>+/-</button>
        <button>AC</button>
        <button>DEL</button>
        <button class="operator">*</button>

        <button class="number">1</button>
        <button class="number">2</button>
        <button class="number">3</button>
        <button class="operator">+</button>

        <button class="number">4</button>
        <button class="number">5</button>
        <button class="number">6</button>
        <button class="operator">/</button>

        <button class="number">7</button>
        <button class="number">8</button>
        <button class="number">9</button>
        <button class="operator">-</button>

        <button class="number">0</button>
        <button class="decimal">.</button>
        <button class="operator">=</button>
      </div>
    </div>
  );
}

export default App;
