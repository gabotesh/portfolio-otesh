const express=require('express');
const router=express.Router();
const portfolioClt=require('../controller/portfolioController')
const authService= require('../services/auth');


router.post('', authService.checkJWT, authService.checkRole('siteOwner'), portfolioClt.savePortfolio);
  
router.get('', authService.checkJWT, authService.checkRole('siteOwner'), portfolioClt.getPortfolios);  
  


module.exports=router;
  
  
  