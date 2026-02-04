import {sumar, restar, multiplicar, dividir} from './operaciones.js';
import inquirer from "inquirer";

const {operacion} = await inquirer.prompt([
 {
    type: "select",
    name: "operacion",
    message: "Elige una operación:",
    choices:[
        {
            name: "Sumar",
            value: "sumar",
        },
        {
            name: "Restar",
            value: "restar",
        },
        {
            name: "Multiplicar",
            value: "multiplicar",
        },
        {
            name: "Dividir",
            value: "dividir",
        }
    ]
 },
    ]);

    const { a, b} = await inquirer.prompt([{
        type: "input",
        name: "a",
        message: "Dame el primer numero:",
    },
    {
        type: "input",
        name: "b",
        message: "Dame el segundo numero:",
    }
    ]);

    let resultado = 0;

    switch (operacion) {
        case "sumar":
            resultado = sumar(parseFloat(a), parseFloat(b));
            break;
            
        case "restar":
            resultado = restar(parseFloat(a), parseFloat(b));
            break;
           
        case "multiplicar":
            resultado = multiplicar(parseFloat(a), parseFloat(b));
            break;
            
        case "dividir":
            resultado = dividir(parseFloat(a), parseFloat(b));
            break;
            default:
            resultado = null;
            break;
    }


    console.log(resultado);


// console.log("suma", sumar(5,3));
// console.log("resta", restar(8,2));
// console.log("multiplicacion", multiplicar(4,6));
// console.log("division", dividir(10,2));