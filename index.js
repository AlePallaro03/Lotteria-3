const express = require('express');
const webServer = express();
const port = 30120;
console.log("Lotteria realizzata da")
console.log()
console.log("Alessandro Pallaro e Luca Buscema")
console.log()
const router = require('./router.js');

webServer.use('/', router);
webServer.use('/event', express.static('evento'));

webServer.listen(port, function(){ //funzione per output in console
const P = ['/','-', '|'];
let x = 0;
const loader = setInterval(() => {
  process.stdout.write(`\r${P[x++]}`);
  x %= P.length;
}, 150);
console.log(`Programma in esecuzione alla porta: ${port}`)
});