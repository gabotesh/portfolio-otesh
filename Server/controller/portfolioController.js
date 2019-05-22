const Portfolio=require('../models/portfolioModel')

exports.getPortfolios=(req,res)=>{
    Portfolio.find({},(err,allPortfolios)=>{

      if(err){
        return res.status(422).send(err);

      }
      return res.json(allPortfolios);

    });


}


exports.savePortfolio=(req,res)=>{
    const portfolioData=req.body;
    const user=req.user && req.user.sub;
    const portfolio=new Portfolio(portfolioData);
    portfolio.userId=user;
    portfolio.save((err,createdPortfolio)=>{

      if(err){
        return res.status(422).send(err);

      }
        return res.json(createdPortfolio);

    });    

}

exports.updatePortfolio=(req,res)=>{
    const portfolioId=req.params.id;
    const portfoioData=req.body;

    Portfolio.findById(portfolioId,(err,foundPortfolio)=>{
     if(err){
       return res.status(422).send(err);
     }
     foundPortfolio.set(portfoioData);
     foundPortfolio.save((err,savedPortfolio)=>{
       if(err){
         return res.status(422).send(err);
       }
         return res.json(foundPortfolio);
     });

    })      

}

exports.deletePortfolio=(req,res)=>{
    const portfolioId=req.params.id;

    Portfolio.deleteOne({_id: portfolioId},(err,deletedBook)=>{
     if(err){
       return res.status(422).send(err);
     }
     
         return res.json({status:'Deleted'});
     
    })      

}

exports.getPortfolioById=(req, res )=>{
    const portfolioId=req.params.id;

    Portfolio.findById(portfolioId)
             .select('-__v')
             .exec((err, foundPortfolio)=>{
              if(err){
                return res.status(422).send(err);
            }
            return res.json(foundPortfolio);

             })


}
