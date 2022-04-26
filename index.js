const express = require('express');
const webServer = express();
const port = 30120;

const router = require('./router.js');

webServer.set('view engine', 'ejs');

webServer.use('/', router);

webServer.use('/event', express.static('evento'));

webServer.listen(port, function(){
  console.log(`Il server ascolta alla porta: ${port}!`)
});
