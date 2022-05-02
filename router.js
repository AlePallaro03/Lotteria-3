const express= require('express');
const router = express.Router();

router.get('/event',function(req, res){
  res.redirect('/event/login.html') //se viene eseguita in URL la dicitura /event verremo reinderizzati alla nostra pagina
});


module.exports=router; //esportiamo il modulo express