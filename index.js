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

console.log("Inserire /event nell'URL per aprire la lotteria") //output
const router = require('./router.js');

webServer.use('/', router); 

webServer.use('/event', express.static('evento')); //MIDDLEWARE


webServer.get('/', function(req,res){
  res.send('Per aprire la lotteria digita nell URL "/event"');
});

webServer.use('/event/login', express.static('login'));
webServer.get('/login', function(req,res){
   res.sendFile(path.join(__dirname, '/index.html'));
});

webServer.use('/event/home', express.static('home'));
webServer.get('/home', function(req,res){
   res.sendFile(path.join(__dirname, '/homePage.html'));
});

webServer.use('/event/grattaevinci', express.static('grattaevinci'));
webServer.get('/grattaevinci', function(req,res){
   res.sendFile(path.join(__dirname, '/index.html'));
});

webServer.use('/event/biglie', express.static('biglie'));
webServer.get('/biglie', function(req,res){
   res.sendFile(path.join(__dirname, '/index.html'));
});

webServer.use('/event/roulette', express.static('roulette'));
webServer.get('/roulette', function(req,res){
   res.sendFile(path.join(__dirname, '/index.html'));
});

webServer.listen(port, function(){ //funzione per output in console
const P = ['/','-', '|']; //vettore con simboli
let x = 0;
const loader = setInterval(() => {
  process.stdout.write(`\r${P[x++]}`);
  x %= P.length;
}, 150);
console.log(`\x1b[40m\x1b[36m Programma in esecuzione alla porta: ${port}`) //output in console
});

var num = Math.floor(Math.random()*1000);
alert('Hai vinto: ' + num + '€')