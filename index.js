
const operators=document.querySelectorAll('.operator');
const numbers=document.querySelectorAll('.number');
const del=document.querySelector('.delete');
const clear=document.querySelector('.clear');
const equals=document.querySelector('.equal');
const upperDisplay=document.querySelector('.upperDisplay');
const lowerDisplay=document.querySelector('.lowerDisplay');

let previousOperand="",currentOperand="";
let operation =undefined;

function updateDisplay()
{
    
    if(operation != null){
        upperDisplay.innerText=`${previousOperand} ${operation}`
    }
    else
    upperDisplay.innerText="";
}
function appendNumber(number){
        if(number==='.' && currentOperand.includes('.') ) return;
        if(currentOperand.length > 10)
        return;
        currentOperand=currentOperand.toString() + number.toString(); 
        lowerDisplay.textContent=currentOperand;
        updateDisplay();              
    
}

function clearDisplay()
{
    lowerDisplay.textContent="";
    upperDisplay.textContent="";
    previousOperand="";
    currentOperand="";
    operation=undefined;
}

numbers.forEach(button => {
    button.addEventListener('click',()=>{
        appendNumber(button.innerText);
    updateDisplay();
});
});

clear.addEventListener('click',clearDisplay);

operators.forEach(operator =>{
    operator.addEventListener('click',()=>{

        if(currentOperand ==="")               
        return;
        if(previousOperand !=="")
        compute(operation);

            operation=operator.innerText;
            previousOperand=currentOperand;
            currentOperand="";

        updateDisplay();
 
    });
});
function compute(operator)
{
    let computation;
    const prev = parseFloat(previousOperand); 
    const curr = parseFloat(currentOperand);
    if(isNaN(prev) || isNaN(curr))         //return when there is no previous and current 
    return;                                   //values
    switch(operator)
    { 
        case '+':
           computation = prev + curr;
           break;
         case '-':
             computation = prev-curr;
             break;
         case 'X':
             
             computation=prev*curr;
             break;
         case '/':
            if(curr===0)
            {
               alert("you can't divide by 0");
               return;
            }
             computation=prev/curr;
             break;
         default:
             return;
    }
    currentOperand=computation;
    operation=undefined;
    previousOperand="";
    lowerDisplay.textContent=currentOperand;
    updateDisplay();
    
}
equals.addEventListener('click',()=>{
    compute(operation); 
});
del.addEventListener('click',()=>{
    currentOperand=currentOperand.toString().slice(0,-1);
    lowerDisplay.textContent= currentOperand;
    updateDisplay();
})
