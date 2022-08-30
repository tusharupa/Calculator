const display=document.querySelector('.display');
const operators=document.querySelectorAll('.operator');
const numbers=document.querySelectorAll('.number');
const del=document.querySelector('.delete');
const clear=document.querySelector('.clear');
const equals=document.querySelector('.equal');
let previousOperand="",currentOperand="";
let operation ="";
function appendNumber(number){
    
        currentOperand=currentOperand.toString() + number.toString(); 
        display.textContent=currentOperand;                
    
}

function clearDisplay()
{
    display.textContent="";
    previousOperand="";
    currentOperand="";
    operation="";
}

numbers.forEach(button => {
    button.addEventListener('click',()=>appendNumber(button.innerText));
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
 
    });
});
function compute(operator)
{
    let computation;
    const prev = parseInt(previousOperand);
    const curr =parseInt(currentOperand);
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
             computation=prev/curr;
             break;
         default:
             return;
    }
    currentOperand=computation;
    operation="";
    previousOperand="";
    display.textContent=currentOperand;
    
}
equals.addEventListener('click',()=>{
    compute(operation);
});
del.addEventListener('click',()=>{
    currentOperand=currentOperand.toString().slice(0,-1);
    display.textContent= currentOperand;
})