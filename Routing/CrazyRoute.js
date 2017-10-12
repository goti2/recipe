import RecipeRepository from './../Repositories/Recipe';
import PostRepository from './../Repositories/Post';
import CategoryRepository from './../Repositories/Category';


export default (Router) => {

    Router.GET('/api/crazy/category/:resource', async (req, res, params) => {

        const recipe = RecipeRepository.GetRecipeById(params.resource);
        const post = PostRepository.GetPostById(params.resource);
    
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify( (await recipe || await post).categories ));

    });

    Router.GET('/api/crazy/resource/:id', async (req, res, params) => {

        const recipe = RecipeRepository.GetRecipeById(params.id);
        const post = PostRepository.GetPostById(params.id);

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(await recipe || await post));
    });

    Router.GET('/api/crazy/resource/category/:category', async (req, res, params) => {
        const recipe = await RecipeRepository.GetAllRecipeByCategory(params.category);
        const post = await PostRepository.GetPostsByCategory(params.category);

        let resources = [].concat(recipe, post);

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(resources));
    });
};