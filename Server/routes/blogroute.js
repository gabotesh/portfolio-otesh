const express=require('express');
const router=express.Router();
const blogClt=require('../controller/blogController')
const authService= require('../services/auth');


router.post('', authService.checkJWT, authService.checkRole('siteOwner'), blogClt.createBlog); 
router.get('', blogClt.getBlogs);
router.get('/me', authService.checkJWT, authService.checkRole('siteOwner'), blogClt.getUserBlogs);
router.get('/:id', blogClt.getBlogById);
router.get('/s/:slug', blogClt.getBlogBySlug);
router.patch('/:id', authService.checkJWT, authService.checkRole('siteOwner'), blogClt.updateBlog);  
router.delete('/:id', authService.checkJWT, authService.checkRole('siteOwner'), blogClt.deleteBlog);  


//router.get('/:id',portfolioClt.getPortfolioById);
//router.patch('/:id', authService.checkJWT, authService.checkRole('siteOwner'),portfolioClt.updatePortfolio);
//router.delete('/:id', authService.checkJWT, authService.checkRole('siteOwner'), portfolioClt.deletePortfolio);




module.exports=router;
  
  
  