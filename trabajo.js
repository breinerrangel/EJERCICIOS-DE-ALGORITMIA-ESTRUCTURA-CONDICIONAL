// PRIMER PUNTO
// let num=+prompt("ingrese un numero ")
// let numm2=+prompt("ingrese otro numero : ")
// if (num<numm2 ){
//     console.log(`${num},${numm2}`)
// }else if(numm2<num){
//     console.log(`${numm2},${num}`)
// }

// SEGUNDO PUNTO
// let num=+prompt("ingrese un nuemro : ")
// if(num>=1 && num<=10){
//     switch(num){
//         case 1:
//             console.log("impar");
//             break;
//         case 2:
//             console.log("par") ;
//             break;
//         case 3:
//             console.log("impar");
//             break ;
//         case 4:
//             console.log("par");
//             break ;  
//         case 5:
//             console.log("impar");
//             break;
//         case 6:
//             console.log("par");
//             break ;
//         case 7:
//             console.log("impar");
//             break;  
//         case 8:
//             console.log("par");
//             break; 
//         case 9:
//             console.log("impar");
//             break  
//         case 10:
//             console.log("par");
//             break ;
//         default:

       
        
        


        
//     }
// }else{
//     console.log("error")
// }


//TERCER PUNTO
// let num=+prompt("ingrese un nuemro : ")
// if(num>=1 && num<=10){
//     switch(num){
//         case 1:
//             console.log("uno");
//             break;
//         case 2:
//             console.log("dos") ;
//             break;
//         case 3:
//             console.log("tres");
//             break ;
//         case 4:
//             console.log("cuatro");
//             break ;  
//         case 5:
//             console.log("cinco");
//             break;
//         case 6:
//             console.log("seis");
//             break ;
//         case 7:
//             console.log("siete");
//             break;  
//         case 8:
//             console.log("ocho");
//             break; 
//         case 9:
//             console.log("nueve");
//             break  
//         case 10:
//             console.log("diez");
//             break ;
//         default:

       
        
        


        
//     }
// }else{
//     console.log("error")
// }


//CUARTO PUNTO
// const precio=200
// let  tiempo=+prompt("ingrese  el tiempo de la llamada: ")
// if(tiempo>=1 && tiempo<=3){
//     console.log("el valor a pagar por su llamada es de "+precio)
    
        
// }
// else if(tiempo>3){
//     let pagar=((tiempo*100)-precio)+100
//     console.log("el valor a pagar por su llamada es  de "+pagar)
    
// }

//QUINTO PUNTO

// let conejosN=+prompt("cuantos conejos de color negro desea llevar? : ")
// let conejosB=+prompt("cuantos conejos de color blanco desea llevar? : ")
// const precioN=15000
// const precioB=15000
// if(conejosB>conejosN){
//     let pagar=(conejosB*precioB)+(conejosN*precioN)
//     let conejos=conejosB+conejosN
//     console.log(`la cantidad total a pagar es de \n${pagar}\nel total de los conejos fueron ${conejos}\n los conejos que mas se vendiron furon los blancos`)
// }
// else if(conejosN>conejosB){
//     let pagar=(conejosB*precioB)+(conejosN*precioN)
//     let conejos=conejosB+conejosN
//     console.log(`la cantidad total a pagar es de \n${pagar}\nel total de los conejos fueron ${conejos}\n los conejos que mas se vendiron furon los negros`)
// }



// SEXTO PUNTO
// let evaluacion1=parseFloat(prompt("ingrese la nota de la evalucion 1 : "))
// let evaluacion2=parseFloat(prompt("ingrese la nota de la evalucion  2: "))
// let evaluacion3=parseFloat(prompt("ingrese la nota de la evalucion 3 : "))
// let trabajo1=parseFloat(prompt("ingtrese la nota del trabajo 1: "))
// let trabajo2=parseFloat(prompt("ingrese la nota del trabajo 2 : "))
// total=(((evaluacion1+evaluacion2+evaluacion3)/3)*0.6)+(((trabajo1+trabajo2)/2)*0.4)
// if( total>=1.0 && total<=5.0){
//     console.log(`la nota final es de ${total}`)

// }
// else{
//     console.log("error")
// }




//SEPTIMO PUNTO
// let producto=prompt("ingrese el nombre del producto : ")
// let cantidad=+prompt("ingrese la cantidad de productos : ")
// let precio=+prompt("ingrese el precio del producto : ")
// let clave=+prompt("ingerse clave para hacer descuanto : ")
// if(clave==1){

//     let total=(cantidad*precio)*0.1
//     let pagar=(cantidad*precio)-total
//     console.log(`${producto} tiene un precio de ${precio} la clave ingresada  es ${clave} cantidad del producto ${cantidad} y el total a pagar con descueto ${pagar}`)
// }
// else if (clave==2){
//     let total=(cantidad*precio)*0.2
//     let pagar=(cantidad*precio)-total
//     console.log(`${producto} tiene un precio de ${precio} la clave ingresada  es ${clave} cantidad del producto ${cantidad} y el total a pagar con descueto ${pagar}`)
// }


//OCTAVO PUNTO


// let km=+prompt("ingrese la distancia  a recorrer : ")
// let numero=prompt("ingrese el numero de dias de estacia : ")
// if  (numero>=7 && km>800){
//     let total=(km*2.5)*0.3
//     let pagar=(km*2.5)-total
//     console.log(`el billete de avion tiene un precio de ${pagar}$ dolares `)
// }
// else if(numero<7 && km<=800){
//     let total=km*2.5
//     console.log(`el billete de avion tiene un precio de ${total}$ dolares `)
// }


