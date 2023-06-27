class Calculator{
    constructor(screen){
        this.screen = screen;
        this.currentOperand = "";
        this.previousOperand = "";
        this.operation = undefined;
        this.secondNumber = false;
    }

    clear(){
        this.currentOperand = "0";
        this.previousOperand = "";
        this.secondNumber = false;
        this.operation = undefined;
    }

    delete(){
        //console.log(this.currentOperand);
        let OperandInArray = [...this.currentOperand];
        OperandInArray.pop()
        this.currentOperand = OperandInArray.join('');
    }

    appendNumber(number){

        if(this.currentOperand === "0"){
            this.currentOperand = Number(number) + 0;
        }
        else if(this.operation != undefined){
            if(!this.secondNumber){
                this.secondNumber = true;
                this.currentOperand = "";
            }

            this.currentOperand += number;

            console.log(typeof number);
        }
        else {
            this.currentOperand += number;
        }

    }
/*problem: when typing an equation in
  i want the firstOperand to stay visible
  until another number is typed in

  strategies:  */
  /* so i make the previous number
   the number that i typed before
   i pressed the operation button,

   when i press the operation button i still
   want the number to be present

   i can keep the currentOperand as the number on
   screen, and i can make the previous whatever number
   i put in the calculator

   i can do if the operation = true and there is
   numbers in the currentOperand dududududu*/
    chooseOperation(operation){
        console.log('chose ', operation);
        if(operation === "+"){
          this.previousOperand = this.currentOperand;
          this.operation = "+";
        //   this.currentOperand = "";
        //   this.appendNumber(this.previousOperand);
        };
        if(operation === "-"){
            this.previousOperand = this.currentOperand;
            this.operation = "-";
        }
        if(operation === "X"){
            this.previousOperand = this.currentOperand;
            this.operation = "X";
        }
        if(operation === "/"){
            this.previousOperand = this.currentOperand;
            this.operation = "/";
        }
    }

    compute(){
        if(this.operation === "+") this.currentOperand = Number(this.currentOperand) + Number(this.previousOperand);
        if(this.operation === "-") this.currentOperand = Number(this.previousOperand) - Number(this.currentOperand);
        if(this.operation === "X") this.currentOperand = Number(this.previousOperand) * Number(this.currentOperand);
        if(this.operation === "/") this.currentOperand = Number(this.previousOperand) / Number(this.currentOperand);
        this.secondNumber = false;
    }

    updateDisplay(){
        screen.innerText = this.currentOperand;
        this.screen.classList.add("number"); //keep styling
    }


}




const number = document.querySelectorAll("[data-number]");
const operation = document.querySelectorAll("[data-operation]");
const screen = document.querySelector("[data-screen]");
const equals = document.querySelector("[data-equals]");
const del = document.querySelector("[data-delete]");
const reset =  document.querySelector("[data-reset]");


const calculator = new Calculator(screen);

number.forEach(button => {
    button.addEventListener("click", () => {
      //console.log("Button clicked!"); // Added console log
      calculator.appendNumber(button.innerText);
      calculator.updateDisplay();
    });
  });

reset.addEventListener("click", () =>{
   // console.log('reset button clicked')
    calculator.clear();
    calculator.updateDisplay();
})

del.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
})

operation.forEach(button => {
    button.addEventListener('click', ()=> {
        calculator.chooseOperation(button.innerText);
        button.classList.add('button-pressed');
        calculator.updateDisplay();
    })
})

equals.addEventListener('click', ()=>{
    calculator.compute();
    calculator.updateDisplay();
})

function changeColor(){

}
