import http from 'http';
import Application from './Application';

//Routing 
import AddRecipeRoute from './Routing/RecipeRoute';
import AddPostRoute from './Routing/PostRoute';
import AddCategoryRoute from './Routing/CategoryRoute';
import AddCrazyRoute from './Routing/CrazyRoute';

AddRecipeRoute(Application.Router);
AddPostRoute(Application.Router);
AddCategoryRoute(Application.Router);
AddCrazyRoute(Application.Router);

http.createServer(Application).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');