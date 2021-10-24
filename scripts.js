class Calculator{
    
    constructor(previousOperandTextElement,presentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.presentOperandTextElement = presentOperandTextElement
        this.clear()
    }
    
    clear(){
        this.presentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
        console.log(this.presentOperand)
        console.log(this.previousOperand)
    }
    
    delete(){
        this.presentOperand=this.presentOperand.toString().slice(0,-1)
    }
    
    appendNumber(number){
        if(number==='.'&& this.presentOperand.includes('.')) return 
        this.presentOperand = this.presentOperand.toString() + number.toString()

    }
    chooseOperation(operation){
        if(this.presentOperand === '') return
        if(this.presentOperand !== ''){
            this.compute()
        }
        this.operation = operation
        this.previousOperand=this.presentOperand
        this.presentOperand=''
    
    }

    compute(){
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.presentOperand)
        //if ( isNaN (prev) || isNaN (curent)) return
        switch(this.operation){
            case '+':
                computation=prev+current
                break
            case '-':
                computation=prev-current
                break
            case '×':
                computation=prev*current
                break
            case '÷':
                computation=prev/current
                break
            default:
                return
        }
        //console.log(computation)

        this.presentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }
    updateDisplay(){
        this.presentOperandTextElement.innerText =
        this.presentOperand
        if(this.operation != null){
        this.previousOperandTextElement.innerText=
        `${this.previousOperand} ${this.operation}`
        }else{
        this.previousOperandTextElement.innerText=this.previousOperand}
    }

}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const presentOperandTextElement = document.querySelector('[data-present-operand]')

const calculator = new Calculator(previousOperandTextElement,presentOperandTextElement)

numberButtons.forEach(button=>{
    button.addEventListener('click',()=>{
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()}
    )
})

operationButtons.forEach(button=>{
    button.addEventListener('click',()=>{
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()}
    )
})

equalsButton.addEventListener('click',()=>{
    //console.log('HEYYY')
    calculator.compute()
    calculator.updateDisplay()
})


allClearButton.addEventListener('click',()=>{
    //console.log('Hello')
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click',()=>{
    //console.log('Hey')
    calculator.delete()
    calculator.updateDisplay()
})