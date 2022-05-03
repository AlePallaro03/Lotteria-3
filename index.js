const express = require('express'); //importiamo modulo esterno (express)
const webServer = express();
const port = 30120; //numero della porta
const soldi = 0;
console.log("\x1b[40m\x1b[32m Lotteria realizzata da: ") //output
console.log(`
 █████╗ ██╗     ███████╗    ███████╗    ██╗     ██╗   ██╗██╗  ██╗
██╔══██╗██║     ██╔════╝    ██╔════╝    ██║     ██║   ██║██║ ██╔╝
███████║██║     █████╗      █████╗      ██║     ██║   ██║█████╔╝ 
██╔══██║██║     ██╔══╝      ██╔══╝      ██║     ██║   ██║██╔═██╗ 
██║  ██║███████╗███████╗    ███████╗    ███████╗╚██████╔╝██║  ██╗
╚═╝  ╚═╝╚══════╝╚══════╝    ╚══════╝    ╚══════╝ ╚═════╝ ╚═╝  ╚═╝
  `)

console.log("Inserire /event nell'URL per aprire la lotteria") //output
const router = require('./router.js');

webServer.use('/', router); 

webServer.use('/event', express.static('evento')); //MIDDLEWARE


webServer.get('/', function(req,res){
  res.send('Per aprire la lotteria digita nell URL "/event"');
});

webServer.listen(port, function(){ //funzione per output in console
const P = ['/','-', '|']; //vettore con simboli
let x = 0;
const loader = setInterval(() => {
  process.stdout.write(`\r${P[x++]}`);
  x %= P.length;
}, 150);
console.log(`\x1b[40m\x1b[32m Programma in esecuzione alla porta: ${port}`) //output in console
});

var num = Math.floor(Math.random()*1000);
alert('Hai vinto: ' + num + '€')
