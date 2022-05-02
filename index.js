const express = require('express'); //importiamo modulo esterno (express)
const webServer = express();
const port = 30120; //numero della porta
const nomi = ['Alessandro Pallaro', 'Luca Buscema'] //constante coi nomi dei Developer
console.log("Lotteria realizzata da") //output
console.log() //spazio in console
console.log(nomi) //output con la variabile creata
console.log() //spazio in console
console.log("Inserire /event nell'URL per aprire la lotteria") //output
console.log() //spazio in console
const router = require('./router.js');

webServer.use('/', router); 
webServer.use('/event', express.static('evento')); //MIDDLEWARE
webServer.listen(port, function(){ //funzione per output in console
const P = ['/','-', '|']; //vettore con simboli
let x = 0;
const loader = setInterval(() => {
  process.stdout.write(`\r${P[x++]}`);
  x %= P.length;
}, 150);
console.log(`Programma in esecuzione alla porta: ${port}`) //output in console
});