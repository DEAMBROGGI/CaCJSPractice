// Practica

//Variable y tipos de datos

// var nombre
// nombre = "Adrian"
// nombre = "Miguel"

// const dataDos = {
//     nombre:"Manuel"
// }

// let nombreTres
// var npmbreCuatro


// const dataTRes =[1,2,3,4]

// function testVar(){
//     if(true){
//     var segundoNombre="Miguel"
//     }
//     console.warn(nombre)
//      dataDos.nombre = "Maria"
//      dataDos.apellido = "XXXX"
//      dataTRes.push(6)
//     console.log(dataTRes)
//     console.log(segundoNombre)
// }



// function messag(){
//     if(true){
//         let message = "AAAAA"
//         var mesaggeDos = "BBBBB"
//     }
// console.log(message)
// console.log(mesaggeDos)

// }


// let car = {
//     marca:"Fiat",
//     modelo:"Siena",
//     motor:{
//         cilindros:4,
//         capacidad:1.4,
//         valvulas: 8
//     },
//     automatico:false

// }

// console.log(car.motor.cilindros)


// const Frutas =["Banana", "Pera", "Uva"]

// console.log(Frutas)

// const cars = [
//     {
//         marca:"Fiat",
//         modelo:"Siena",
//         motor:{
//             cilindros:4,
//             capacidad:1.4,
//             valvulas: 8
//         },
//         automatico:false

//     },
//     {
//         marca:"Ford",
//         modelo:"Mustang",
//         motor:{
//             cilindros:8+4,
//             capacidad:5,
//             valvulas: 32
//         },
//         automatico:false

//     },
//     "Juan",
//     5+6,
//     true
// ]

// console.log(cars)

// var testTypeOf = Boolean("true")

// if(!testTypeOf){
//     console.log(typeof(testTypeOf))
//     console.log(testTypeOf)
// }else{
//     console.log("OK es un "+ typeof(testTypeOf))
// }

// console.log(typeof(cars))

// Estructuras de control

// var edad = 17

// //IF, ELSE IF, ELSE

// // if(edad > 18){
// //     console.log("Es MAYOR de edad")
// // }else if(edad <=17 && edad >15){
// //     console.log("Es Menor pero puede votar")
// // }
// // else{
// //     console.log("Es MENOR de edad")
// // }

// // OPERADORES TERNARIOS
// edad > 18 ?
//     console.log("Es MAYOR de edad")
//     :
//     (edad <= 17 && edad > 15 ?
//         console.log("Es Menor pero puede votar")
//         :
//         console.log("Es MENOR de edad"))

// //SWITCH
// let arrayDeDatos =["dato"]
// console.log(arrayDeDatos)
// arrayDeDatos.length >0
// ?
// PageToDisplay("Locations")
// :
// console.log("No existe datos para mostrar en la pagina")

// function PageToDisplay(page){

// switch (page) {
//     case "Characters":
//         console.log("Estas en Characters")
//         break;
//     case "Episodes":
//         console.log("Estas en Episode")
//         break;
//     case "Locations":
//         console.log("Estas en Locations")
//         break;
//     case "Compare":
//         console.log("Estas en Compare")
//         break;
//     default:
//         console.log("Estas en Home")

// }
// }

// //Operadores Logicoos y Aritmeticos

// let number = 5


// let text = "Hola"

// let operador = "potencia"

// // if(operador == "suma"){
// //     number ++
// //     console.log(number)
// // }else{
// //     number --
// //     console.log(number)
// // }
// let multiplo = ""

// // if(multiplo == number && operador == "potencia"){

// //     number = number * number
// //     console.log(number)
// // }


// // console.log(text+ " Mundo")
// // console.log(number)

// console.log(!multiplo || multiplo =="")
// console.log(multiplo)
// if(!multiplo || multiplo ==""){

//     console.log("El input esta vacio debo mostrar todo el array de datos")
// }else{
//     console.log("El input no esta vacio debo filtar el array de datos por el valor del input")
// }


const cars = [
    {
        marca: "Fiat",
        modelo: "Siena",
        motor: {
            cilindros: 4,
            capacidad: 1.4,
            valvulas: 8
        },
        automatico: false

    },
    {
        marca: "Ford",
        modelo: "Mustang",
        motor: {
            cilindros: 8,
            capacidad: 5,
            valvulas: 32
        },
        automatico: false

    },
    {
        marca: "Ford",
        modelo: "Fiesta",
        motor: {
            cilindros: 4,
            capacidad: 1.2,
            valvulas: 8
        },
        automatico: false

    },
    {
        marca: "VW",
        modelo: "Bora",
        motor: {
            cilindros: "4",
            capacidad: 2,
            valvulas: 16
        },
        automatico: false

     }
    // ,
    // "Juan",
    // 5 + 6,
    // true
]

let carsBrand = ["Fiat", "VW", "Ford", "Chevrolet", "Chery"]

// cars.pop()
// cars.push("Ingreso con Push")
// cars.shift()
// cars.unshift("Ingreso con Unshift")
// let index = cars.indexOf("Pedro")


// console.log("Index de Pedro " + index)
// console.log(cars)
// console.log(cars.length)

// var newArray = []
// newArray = cars.concat(carsBrand)
// console.log(newArray)

// var arrayToString = cars.toString() 
// console.log(arrayToString)

// var arraytoJoin = carsBrand.join("/...A/")
// console.log(arraytoJoin)

// var arraytoSplit = arraytoJoin.split("...A")
// console.log(arraytoSplit)

// let stringTEST = "ARGENTINA"

// console.log(stringTEST.split(""))

// console.log(carsBrand)
// for(var i=0;i<carsBrand.length;i++){
    
//     let filter = []
//     if(carsBrand[i] === "Fiat"){
//         filter.push(carsBrand[i])
//     }
//     console.log(filter)

// }
// let filterArray = []
// for(var i=0;i<cars.length;i++){
//     // console.log(cars)
   
//     if( cars[i].motor.cilindros == 4){
//         filterArray.push(cars[i])
//     }    

// }


// let btnNav = document.querySelectorAll(".btnNav")

// console.log(btnNav)

// for(var i = 0; i<btnNav.length;i++){
//     if(btnNav[i].innerText === "Home"){
//         console.log(btnNav[i])

//     }
// }


// let carObject = cars[0]
// console.log(carObject)

// for(motor in carObject){
//     console.log(carObject[motor])
// }


// for(props in carObject){
//     console.log(props+": "+ carObject[props] )
// }


// var i = 0
// // console.log(carsBrand)
// // while(i<carsBrand.length){
// //     console.log(i)
// //     console.log(carsBrand[i]);
// //     i++;
// // }

// do{
//     console.log(carsBrand[i])
//     i++;
// }while(i<carsBrand.length)



// function NombreFunction(nombre){

// console.log(nombre)

// }
//  let sum
// const arrowFunction = (uno, dos, tres)=>{

//  sum = uno + dos + tres
 
// return "ARROWFUNCTION: "+sum

// }



// elementox.addEventListener(()=>{

// })

// (function (){

// })()

// tradicional o flecha
// nombrada o anonima
// callback functions

let coche = {
    marca: "Random",
    modelo: "Test",
    funcTradicional : function (){
        console.log("Test de scope de funcion tradicional: "+this.marca+" "+this.modelo)
    },
    funcFlecha : ()=>{console.log("Test de funcion flecha: "+coche.marca+" "+coche.modelo)}
}



 let filterArray = cars.filter(car=> car.marca ==="Fords")

console.log(filterArray)
console.log(cars)


let arraySuma = [5,10,15,20,100]
//PASAR EJEMPLO DE REDUCE CON ACUMULADOR DE OBJETOS
let result = cars.reduce((valorActual, nuevoValor)=>{
   
    // console.log(valorActual)
    // console.log(nuevoValor)
    let ford = []
   if(nuevoValor.marca==="Ford"){
    ford.push(valorActual)
   }
   
    return ford
    
})

let Indice = cars.some(auto => auto.marca === "Ford")
console.log(Indice)

console.log(cars)

let nombre = [
    {nombre:"Juan"},
    {nombre: "Martin 22"},
    {nombre: "Pedro"},
    {nombre: "Sandra" },
    {nombre:"Martin 21"},
    {nombre:"Ariel"}
    ]

let ordenado = nombre.sort((a,b)=>{
    if(a.nombre<b.nombre){return 1}
    if(a.nombre>b.nombre){return -1}
    return 0

})

console.log(ordenado)

const productos = [
    { nombre: 'Casa de Papel', cantidad: 3 },
    { nombre: 'Cosa', cantidad: 0 },
    { nombre: 'Perro', cantidad: 2 },
    { nombre: 'Petardo', cantidad: 1 },
  ];
  
  const resultado = productos.reduce((acumulador, producto) => {
    if (producto.cantidad > 0) {
      if (!acumulador[producto.nombre]) {
        acumulador[producto.nombre] = 0;
      }
      acumulador[producto.nombre] += producto.cantidad;
    }
    return acumulador;
  }, {});
  
  console.log(resultado);

  const resultadoDos = productos.filter(producto=>producto.cantidad >0)
  
console.log(resultadoDos)


let cadena = "           Transformacion de la CADENA               "
//Quitar espacion
let cadenaSinEspacio = cadena.trim()
console.log(cadenaSinEspacio)

//Pasar a mayuscula y quitar espacios
let cadenaUpper = cadena.toUpperCase().trim()

console.log(cadenaUpper)

//Pasar a minuscula
let cadenaLower = cadenaUpper.toLowerCase()
console.log(cadenaLower)

console.log(cadena)

//Largo de la cadena
console.log(cadenaSinEspacio.length)

// Obtener posicion 
let posicionChart = cadenaSinEspacio.charAt(5)
console.log(posicionChart)

//Obtener parte de la cadena
let partedeCadena= cadenaSinEspacio.slice(5,9)
console.log(partedeCadena)

let parteCadenaSibstring = cadenaSinEspacio.substring(5,9)
console.log(parteCadenaSibstring)

let cadenaReplace = cadenaSinEspacio.replace("cadena","string")
console.log(cadenaReplace)

let cadenaSplit = cadenaSinEspacio.split(" ")
console.log(cadenaSplit)

let inicioCadena = cadenaSinEspacio.startsWith("trans")
console.log(inicioCadena)


let capturaDesdeInputSearch = "  per   "


let searchResult = productos.filter(producto=>
    // console.log(producto.nombre.trim().toLowerCase())
    // console.log(capturaDesdeInputSearch.trim().toLowerCase())
    producto.nombre.trim().toLowerCase().startsWith(capturaDesdeInputSearch.trim().toLowerCase())
)
console.log(searchResult)

let testSearch=[]
let search = document.getElementById("inputSearch")
search.addEventListener("keyup", (e)=>{
    let searchResult = productos.filter(producto=>

        producto.nombre.trim().toLowerCase().includes(e.target.value.trim().toLowerCase())
    )
    testSearch = []
    testSearch.push(...searchResult)
    console.log(e.target.value)
    console.log(searchResult)
    console.log(testSearch)
})


let numberTo = "125.493656"
let numberDos = 2

console.log(isNaN(numberTo))
console.log(typeof(numberTo))
console.log(isNaN(numberDos))

let resultadoTest = Number(numberDos) + Number(numberTo)
console.log(resultadoTest)

console.log(resultadoTest.toFixed(2))


console.log(Math.min(2,5,9,15,0.7))
console.log(Math.max(2,5,9,15,0.7))


console.log(Math.random())

console.log(Math.round(resultadoTest))


var fechaActual = new Date()
var fechaResta = new Date("07/12/2000")
var fechaBase = new Date("01/01/1970")

let resta= fechaResta.getTime() - fechaBase.getTime()

let years = fechaResta.getFullYear() - fechaBase.getFullYear()

let months = fechaResta.getMonth() - fechaBase.getMonth() + (12*years)
console.log(resta)
console.log(months)
console.log(years)

console.log(new Date(Date.UTC("3")))
console.log(Date.UTC(2022,12,3))


let formulario = document.querySelector("form")

const getData =(evento)=>{

    let dataOfForm = {
        name: evento.target[0].value,
        apellido: evento.target[1].value,
        pais: evento.target[2].value, 
        tecnologia: (()=>{
            let marcadas = []
            let checkboxs = evento.target.querySelectorAll("input[type=checkbox]")

            checkboxs.forEach(checkbox => {
                if(checkbox.checked){
                    marcadas.push(checkbox.value)
                }
            });
            
          return marcadas
        })()
    }
    console.log(dataOfForm)
}

formulario.addEventListener("submit", (e)=>{
    console.log(e.target)
    e.preventDefault()
    getData(e)

})

async function getDataAsync() {
    var dataA = []
   await  fetch("../data.json")
        .then(response => response.json())
        .then(json => dataA.push(json))

        return dataA
}

console.log(getDataAsync())
