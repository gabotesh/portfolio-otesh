const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const namespace ='http://localhost:3000/';



exports.checkJWT=jwt({

  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute:15,
    jwksUri: 'https://dev--6co5wip.auth0.com/.well-known/jwks.json'
  }),
  audience: 'cll8udsUgkQOvMIEcE3ZBm1SVxm1qHtO',
  issuer: 'https://dev--6co5wip.auth0.com/',
  algorithms:['RS256'] 

})

exports.checkRole=function(role){

  return function(req, res, next){
    const user=req.user;
    if(user && (user[namespace +'role']===role)){

      next();

    }else{
      return res.status(401).send({title:'Not Authorized', description:'You are not authorized to view this data'})
    }
  }

}

