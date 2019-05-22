const express=require('express');
const router=express.Router();
const portfolioClt=require('../controller/portfolioController')
const authService= require('../services/auth');


router.post('', authService.checkJWT, authService.checkRole('siteOwner'), portfolioClt.savePortfolio);  
router.get('', portfolioClt.getPortfolios);
router.get('/:id',portfolioClt.getPortfolioById);
router.patch('/:id', authService.checkJWT, authService.checkRole('siteOwner'),portfolioClt.updatePortfolio);
router.delete('/:id', authService.checkJWT, authService.checkRole('siteOwner'), portfolioClt.deletePortfolio);

  


module.exports=router;
  
  
  