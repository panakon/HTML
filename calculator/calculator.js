let current_input = '';
let previous_input = ''; 
let operator ='';
let memory = '';

function updateDisplays() {
    /*
    Update the displays with current values.
    */
    document.getElementById('main_display').innerHTML = current_input;
    document.getElementById('secondary_display').innerHTML = previous_input;
    document.getElementById('op_display').innerHTML = operator;
}

function setOperator(op) {
    /*
    Sets the operator for the desired calculation.
    */
     
    // if current input is not empty accept it as first number.
    if (isFinite(parseFloat(current_input))){
        if (operator != '' && previous_input != '')
            calculate()
        previous_input = parseFloat(current_input);
        current_input = '';
    }
    operator = op;
    console.log(operator)
    updateDisplays()
}

function appendNumber(number) {
    /*
    Appends the input provided to the current input and update the display. Input must be either a number digit or the decimal point.
    */
    if (isNaN(current_input))
        current_input = ''
    current_input += number; 
    console.log(current_input)
    updateDisplays()
}

function calculate() {
    /*
    Does the calculation between previous input and current input and updates the displays.
    */
    // if (isFinite(current_input))
    //     console.log(isNaN(current_input))
    //     // updateDisplays()
    //     // return
    let result;
    let a = parseFloat(previous_input)
    let b = parseFloat(current_input)

    if (isNaN(a) || isNaN(b)){
        console.log("error, both inputs must be number.")
        return
    }

    switch (operator){
    case '+':
        result = a + b;
        break;
    case '-':
        result = a - b;
        break;
    case '*':
        result = a * b;
        break;
    case '/':
        if (b == 0)
            result = 'division error'
        else
            result = a / b;
        break;
    case '':
        // if the operator is not set do not perform any action
        return
    default:
        result = 'error'
        break;
    }
    previous_input = b 
    current_input = result.toString();
    operator = ''; 
    console.log("%f %s %f = %f", a, operator, b, result)
    updateDisplays()
}

function clearDisplay() {
    /*
    Clears both inputs and the operator.
    */
    current_input = '';
    previous_input = '';
    operator = '';
    updateDisplays()
}

function memoryStore() {
    /*
    Store current input in memory.
    */
    if (isFinite(current_input))
        memory = current_input
        current_input = 'memory stored'
        updateDisplays()
}

function memoryRecall() {
    /*
    Recall stored memory.
    */
    current_input = memory
    updateDisplays()
}