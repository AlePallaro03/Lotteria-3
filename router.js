const express= require('express');
const router = express.Router();

router.get('/event',function(req, res){
  res.redirect('/event/index.html')
});


module.exports=router;