class calculator{
    constructor(){
        this.value=0;
        this.history=[];
    }

    executeCommand(command){
        this.value=command.execute(this.value);
        this.history.push(command);
    }
    undoCommand(){
        const command=this.history.pop();
        this.value=command.undo(this.value);
    }

    // add(valueToAdd){
    //     this.value=this.value+valueToAdd;
    //     return this.value;
    // }

    subtract(valueToSubtract){
        this.value=this.value-valueToSubtract;
        return this.value;
    }

    multiply(valueToMultiply){
        this.value=this.value*valueToMultiply;
        return this.value;
    }

    divide(valueToDivide){
        this.value=this.value/valueToDivide;
        return this.value;
    }

}


// Add command Class
class addCommand{
    constructor(valueToAdd){
        this.valueToAdd=valueToAdd;
    }

    execute(currentValue){
        let newValue=this.valueToAdd+currentValue;
        return newValue;
    }
    undo(currentValue){
        return currentValue-this.valueToAdd;
    }
}


// Multiply command class

class multiplyCommand{
    constructor(valueToMultiply){
        this.valueToMultiply=valueToMultiply;
    }

    execute(currentValue){
        let newValue=this.valueToMultiply*currentValue;
        return newValue;
    }
    undo(currentValue){
        return currentValue/this.valueToMultiply;
    }
}

class addThenMultiplyCommand{
    constructor(valueToAdd,valueToMultiply){
        this.valueToAdd=valueToAdd;
        this.valueToMultiply=valueToMultiply;
    }

    execute(currentValue){
        const newValue=new addCommand(this.valueToAdd).execute(currentValue);
        return new multiplyCommand(this.valueToMultiply).execute(newValue);
    }
    undo(currentValue){
        const newValue=new multiplyCommand(this.valueToMultiply).undo(currentValue);
        return new addCommand(this.valueToAdd).undo(newValue);
    }
}


const calc=new calculator();

// calc.add(10);
// console.log(calc.value);

// const addTest=new addCommand(10);
// const addTest1=addTest.execute(10);
// console.log(addTest1);
// console.log(addTest.undo(addTest1));

calc.executeCommand(new addCommand(10));
console.log(calc.value);
calc.undoCommand();
console.log(calc.value);

calc.executeCommand(new addThenMultiplyCommand(10,2));
console.log(calc.value);
calc.undoCommand();
console.log(calc.value);

// const addThenMultiply=new addThenMultiplyCommand(10,2);

// console.log(addThenMultiply.execute(10));
// const neww=addThenMultiply.execute(10);
// console.log(addThenMultiply.undo(neww));
