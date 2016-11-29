var num1='';
var num2='';
var result
var operator
var calcButtons = document.getElementsByClassName('calc-btn');
var operButtons = document.getElementsByClassName('oper-btn');
var eqButtons = document.getElementsByClassName('eq-btn');
var show = document.getElementById('show');
var clearButtons = document.getElementById('clear-btn');

function calculate() {
number();

  function number() {
    for(var i = 0; i < calcButtons.length; i++) {
      var calcButton = calcButtons[i];
      calcButton.addEventListener('click', function() {
        num1 = (parseInt(this.innerText));
        console.log(num1);
        showCalculations(num1);
        operators();
      });
    }
  }

  function operators() {
    for(var i = 0; i < operButtons.length; i++) {
      var operButton = operButtons[i];
      operButton.addEventListener('click', function() {
        operator = (this.innerText);
        console.log(operator)
        showCalculations(num1 + operator);
        number2();
      });
    }
  }

  function number2() {
    for(var i = 0; i < calcButtons.length; i++) {
      var calcButton = calcButtons[i];
      calcButton.addEventListener('click', function() {
        num2 = (parseInt(this.innerText));
        console.log(num2);
        showCalculations(num1 + operator + num2);
        compile();
      });
    }
  }

  function compile() {
    for(var i = 0; i < eqButtons.length; i++) {
      var eqButton = eqButtons[i];
      eqButton.addEventListener('click', function() {
        eq = (this.innerText);
        proccess();
      });
    }
  }

  function proccess() {
    switch(operator) {
      case '+':
      result = num1 + num2;
      break;
      case '-':
      result = num1 - num2;
      break;
      case '*':
      result = num1 * num2;
      break;
      case '/':
      result = num1 / num2;
      break;
      default:
      result = 'Not a valid operator';
    }
    console.log(num1, operator, num2, eq, result);
    showCalculations(result);
    number();
  }

  function showCalculations(val) {
    show.innerHTML = val;
  }

  clearButtons.addEventListener('click', function() {
    showCalculations(0)
    num1 = '';
    num2 = '';
    operator = undefined;
    result = undefined;
    calculate();
  });
}

calculate();
