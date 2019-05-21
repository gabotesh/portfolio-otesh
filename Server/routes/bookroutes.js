const express=require('express');
const router=express.Router();
const bookClt=require('../controller/bookController')

router.post('',bookClt.saveBook);
  
router.get('',bookClt.getBook);  
  
router.patch('/:id',bookClt.updateBook);



module.exports=router;
  
  
  