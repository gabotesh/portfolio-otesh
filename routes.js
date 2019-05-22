const routes = require('next-routes')


module.exports = routes()                         
.add('portfoliodetails', '/portfoliodetails/:id')  
.add('portfolioEdit', '/portfolio/:id/edit')                                              