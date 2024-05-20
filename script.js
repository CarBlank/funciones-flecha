/* Funciones flecha */

//Convierte la siguiente función en una función flecha:

function greetings() {
    return "Hola";
  }

/* const greetings = saludo => {
    return "Hola";
}

console.log(greetings("saludos"))
 */
  
//Convierte la siguiente función en una función flecha en línea:

function division(a,b) {
    return a / b;
  }

const division = (a,b) => a/b

console.log(division(4,2)) //porque da error


//Convierte la siguiente función en una función flecha:

function myName(name) {
    return `Mi nombre es ${name}`;
  }

const myName = name => `Mi nombre es ${name}`
console.log(myName("Carlo"));


//Convierte las siguientes funciones en funciones flecha:

function test2() {
    console.log("Función test 2 ejecutada.");
  }

function test1(callback) {
    callback();
  }	

  
const test2 = () => "Funcion test 2 ejecutada"
console.log ("Funcion test 2 ejecutada")

const test1 = callback => callback()
console.log (test1)



//Foreach

//Utiliza la siguiente array para resolver los próximos ejercicios: 

let people = [
    { name: 'Jamiro', age: 45 },
    { name: 'Juan', age: 35 },
    { name: 'Paco', age: 34 },
    { name: 'Pepe', age: 14 },
    { name: 'Pilar', age: 24 },
    { name: 'Laura', age: 24 },
    { name: 'Jenny', edad: 10 },
   ]
   
//Crea un array con la gente mayor de 25 años y muéstralo por consola.

const agefilter = []
people.forEach ((ages) => {
  if (ages.age > 25) {
    agefilter.push(ages)
  }
} )

//Crea un array con la gente que empieza por J. 

const 