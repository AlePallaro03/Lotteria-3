const express = require('express'); //importiamo modulo esterno (express)
const path = require('path'); //importo path
const webServer = express();
const port = 30120; //numero della porta
const soldi = 0;
console.log("\x1b[40m\x1b[36m Lotteria realizzata da: ") //output
console.log(`
 █████╗ ██╗     ███████╗    ███████╗    ██╗     ██╗   ██╗██╗  ██╗
██╔══██╗██║     ██╔════╝    ██╔════╝    ██║     ██║   ██║██║ ██╔╝
███████║██║     █████╗      █████╗      ██║     ██║   ██║█████╔╝ 
██╔══██║██║     ██╔══╝      ██╔══╝      ██║     ██║   ██║██╔═██╗ 
██║  ██║███████╗███████╗    ███████╗    ███████╗╚██████╔╝██║  ██╗
╚═╝  ╚═╝╚══════╝╚══════╝    ╚══════╝    ╚══════╝ ╚═════╝ ╚═╝  ╚═╝
  `)

//console.log("Inserire /event nell'URL per aprire la lotteria") //output
const router = require('./router.js');

webServer.use('/', router); 

webServer.use('/', express.static('evento')); //MIDDLEWARE

webServer.get('/', function(req,res){
  res.send('Per aprire la lotteria digita nell URL "/event"');
});

webServer.use('/login', express.static('login')); //pagine del login
webServer.get('/login', function(req,res){
   res.sendFile(path.join(__dirname, '/index.html'));
});

webServer.use('/home', express.static('home')); //home per la scelta dei giochi
webServer.get('/home', function(req,res){
   res.sendFile(path.join(__dirname, '/index.html'));
});

webServer.use('/grattaevinci', express.static('grattaevinci')); //gratta e vinci
webServer.get('/grattaevinci', function(req,res){
   res.sendFile(path.join(__dirname, '/index.html'));
});

webServer.use('/biglie', express.static('biglie')); //gioco delle biglie
webServer.get('/biglie', function(req,res){
   res.sendFile(path.join(__dirname, '/index.html'));
});

webServer.use('/roulette', express.static('roulette')); //roulette
webServer.get('/roulette', function(req,res){
   res.sendFile(path.join(__dirname, '/index.html'));
});

webServer.use('/slot', express.static('slot')); //slot machine
webServer.get('/slot', function(req,res){
   res.sendFile(path.join(__dirname, '/index.html'));
});

webServer.listen(port, function(){ //funzione per output in console
const P = ['//','--', '||']; //vettore con simboli
let x = 0;
const loader = setInterval(() => {
  process.stdout.write(`\r${P[x++]}`);
  x %= P.length;
}, 130);
console.log(`\x1b[40m\x1b[36m Programma in esecuzione alla porta: ${port}`) //output in console
});

//Vincita in console, non toccare per ora
var num = Math.floor(Math.random()*1000);
alert('Hai vinto: ' + num + '€')