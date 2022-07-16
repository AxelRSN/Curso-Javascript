// do {
//     numero1 = parseFloat(prompt("Ingrese un numero"))
//     numero2 = parseFloat(prompt("Ingrese otro numero"))
//     operacion = prompt("Ingrese una operacion matematica (+,-,*,/)")

//     if(isNaN(numero1) || isNaN(numero2)) {
//         alert("Por favor ingresa numeros validos")
//     }

//     if(operacion == "/" && numero2 === 0) {
//         alert("No se puede dividir entre cero")
//     }

// } while((isNaN(numero1) || isNaN(numero2)) || (operacion == "/" && numero2 === 0)) //Repetir si es TRUE

// switch(operacion) {
//     case "+":
//         alert(`El resultado es ${numero1 + numero2}`)
//         break
//     case "-":
//         alert(`El resultado es ${numero1 - numero2}`)
//         break
//     case "/":
//         alert(`El resultado es ${numero1 / numero2}`) 
//         break  
//     case "*":
//         alert(`El resultado es ${numero1 * numero2}`)
//         break
//     default:
//         alert("Operacion no valida")
// }


    do {
        sueldo = parseFloat(prompt("Ingresa tu sueldo"))
        impuestos = prompt("Tu empresa retiene tus impuestos (si / no)").toLowerCase

        if(isNaN(sueldo)){
            alert("Ingrese su sueldo en formato numerico")
        }
        if(!isNaN(impuestos)){
            alert("Porfavor ingreso si / no para continuar")
        } 
        
    } while ((isNaN(sueldo)) || (!impuestos == "si"))
    
    switch(impuestos){
        case "si":
            alert(`Tu saldo neto es de ${saldo}`)
            break
        case "no":
            alert(`Tu saldo neto es de ${saldo / 1.16}`)
            break
        default:
            alert("Empieza de nuevo y selecciona si / no")
    }



