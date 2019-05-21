const express = require('express');
const next = require('next');
const routes = require('../routes');
const authService= require('./services/auth');
const Mongoose = require('mongoose');
const bodyParser=require('body-parser');
const bookRoutes=require('./routes/bookroutes');
const portfolioRoutes=require('./routes/portfolioroutes');


 

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = routes.getRequestHandler(app)
const config= require('./config')

const secretData=[
    {
        title:'secretData 1',
        description:'plans on how to build spaceship'
    },
    {
        title:'secretData 2',
        description:'How to become a fullstack web developer'
    }
]


Mongoose.connect(config.DB_URI,{useNewUrlParser: true})
.then(()=>{
  console.log('connected')
}).catch(err=>{
  console.log(err);
}); 


app
  .prepare()
  .then(() => {
    const server = express()

    server.use(bodyParser.json());

    server.use('/api/v1/books', bookRoutes);
    server.use('/api/v1/portfolio', portfolioRoutes);


    server.get('/api/v1/secret', authService.checkJWT,(req, res)=>{
        return res.json(secretData);

    }) 

    
    server.get('/api/v1/onlySiteOwner', authService.checkJWT, authService.checkRole('siteOwner'),(req, res)=>{
      return res.json(secretData);

  }) 


    server.get('*', (req, res) => {
      return handle(req, res)
    })


    server.use(function (err, req, res, next) {
        if (err.name === 'UnauthorizedError') {
          res.status(401).send({title:'unauthorized', details:'unauthorised access'});
        }
      });

    server.use(handle).listen(3000, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })