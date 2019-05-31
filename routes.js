const routes = require('next-routes')


module.exports = routes()                         
.add('portfoliodetails', '/portfoliodetails/:id')  
.add('portfolioEdit', '/portfolio/:id/edit') 
.add('blogEditor', '/blogs/new')
.add('blogDetails', '/blogs/:slug')
.add('blogEditorUpdate', '/blogs/:id/edit')
