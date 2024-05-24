/* Funciones flecha */

//Convierte la siguiente función en una función flecha:

/* function greetings() {
    return "Hola";
  } */

const greetings = saludo => {
    return "Hola";
}

console.log(greetings("saludos"))

  
//Convierte la siguiente función en una función flecha en línea:

/* function division(a,b) {
    return a / b;
  } */

const division = (a,b) => a/b 

console.log(division(4,2)) //porque da error


//Convierte la siguiente función en una función flecha:

/* function myName(name) {
    return `Mi nombre es ${name}`;
  }
 */
const myName = name => `Mi nombre es ${name}`
console.log(myName("Carlo"));


//Convierte las siguientes funciones en funciones flecha:

/* function test2() {
    console.log("Función test 2 ejecutada.");
  }

function test1(callback) {
    callback();
  }	
   */

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
console.log (agefilter)

//Crea un array con la gente que empieza por J. ----------------------------

const withJ = []
people.forEach ((name) => {
    if (name === /^h/i) {
        withJ.push(name)
    }
})
console.log (withJ)


//Map

/* Utilizando el array de antes crea un array con la gente mayor de 25 años y muéstralo por consola. */

const mas25 = []
people.map ((ages) => {
  if (ages.age > 25 )
    mas25.push (ages)

})
console.log (mas25)

/* Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo: */

const numbers = [ 4, 5, 6, 7, 8, 9, 10]
// Resultado esperado
// [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]

const elevado = numbers.map((numero)=>
    Math.pow(numero,numero))
  
  console.log (elevado)


/*Filter*/

/* Crea un segundo array que devuelva los impares */
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const impares = numbers1.filter (number => number %2 !== 0)
console.log (impares)


//Filtar los platos verganos y sacar una frase

const foodList = [
    { name: 'Tempeh', isVeggie: true },
    { name: 'Cheesbacon burguer', isVeggie: false },
    { name: 'Tofu burguer', isVeggie: true },
    { name: 'Entrecot', isVeggie: false }
  ]

const vegan = foodList.filter(plate => plate.isVeggie)
vegan.forEach(veganplate => {
  console.log ('Hoy comemos', veganplate )
});

/*Reduce*/
//obtén la multiplicación de todos los elementos
const numbers2 = [39, 2, 4, 25, 62]
const multiply = numbers2.reduce ((a,b)=> a*b)
console.log (multiply)

