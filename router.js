/*

  _   _  ____  _   _   _______ ____   _____ _____          _____  ______ 
 | \ | |/ __ \| \ | | |__   __/ __ \ / ____/ ____|   /\   |  __ \|  ____|
 |  \| | |  | |  \| |    | | | |  | | |   | |       /  \  | |__) | |__   
 | . ` | |  | | . ` |    | | | |  | | |   | |      / /\ \ |  _  /|  __|  
 | |\  | |__| | |\  |    | | | |__| | |___| |____ / ____ \| | \ \| |____ 
 |_| \_|\____/|_| \_|    |_|  \____/ \_____\_____/_/    \_\_|  \_\______|
                                                                         
                                                                         

*/
const express= require('express');
const router = express.Router();

router.get('/event',function(req, res){
  res.redirect('/event/index.html') //se viene eseguita in URL la dicitura /event verremo reinderizzati alla nostra pagina
});

module.exports=router; //esportiamo il modulo express