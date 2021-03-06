module.exports = function(app){

 var products = require('./../controllers/product.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');

//API routes
 app.route('/api/products')
	.get(products.list)
	.post(users.requiresLogin, products.create);

  app.route('/api/products/:productId')
	.get(products.read)
  .delete(users.requiresLogin, products.delete);

	app.route('/api/products/edit/:productId')
	.get(products.read)
	.put(users.requiresLogin, products.update);

//Routes to render views
  app.route('/products/new').get(products.new);
  app.route('/products/all').get(products.all);
  app.route('/products/edit/:productId').get(products.edit);
  app.route('/products/:productId').get(products.view);

app.param('productId', products.productByID);
}