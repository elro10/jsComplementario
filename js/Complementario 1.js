const hi = prompt("¿hay alguien?")
if (hi=="si")
document.write("¡Hola mundo!"+"<br>");


    const tabla = prompt("¿la tabla de que numero quieres saber?")
    document.write("Los resultados de la tabla del "+tabla+" son:"+"<br>")
for(let i=0;i<=10;i++)
document.write("El resultado de "+tabla+"*"+ i + " es "+ i*tabla+ "<br>")
let animals= Number(prompt("¿Cuántos animales metió Moisés en el arca? "+ 'cuatro oportunidades'));
let counter =0;
while(animals!==0 && counter < 3) {
    console.log('No, volvé a leer la pregunta')
    animals= Number(prompt("¿Cuántos animales metió Moisés en el arca?"))
    counter++;
}
if(counter<3){
    console.log("Felicidades, sobreviviste al diluvio")
} else{
    console.log("Te ahogaste :(")
}