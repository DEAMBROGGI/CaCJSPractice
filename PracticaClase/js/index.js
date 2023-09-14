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


var i = 0
// console.log(carsBrand)
// while(i<carsBrand.length){
//     console.log(i)
//     console.log(carsBrand[i]);
//     i++;
// }

do{
    console.log(carsBrand[i])
    i++;
}while(i<carsBrand.length)



function NombreFunction(nombre){

console.log(nombre)

}
 let sum
const arrowFunction = (uno, dos, tres)=>{

 sum = uno + dos + tres
 
return "ARROWFUNCTION: "+sum

}



elementox.addEventListener(()=>{

})

(function (){

})()

// tradicional o flecha
// nombrada o anonima
// callback functions