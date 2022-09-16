import hello from "./modulo";

//clases
class calculator {
    constructor(){
        this.valueA= 0;
        this.valueB=0;
    }
    sum(A,B){
        this.valueA = A;
        this.valueB= B;
        return A+B
    }
}
const calc = new calculator();
console.log(calc.sum(2,2));
//import {hello} from './modulo';
hello();
//import hello from './modulo'
//console.log(hello);

//generators function
//serie de algortimo fibonacci
function* helloworld(){
 if(true){
   yield 'hello';
 }
 if (true){

 
 yield 'World';
 }
 else{
   
 }
 yield 'hola'
};

const generatorshello= helloworld();
console.log(generatorshello.next().value);
console.log(generatorshello.next().value);
console.log(generatorshello.next().value);

