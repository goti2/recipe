import RecipeRepository from './../Repositories/Recipe';


export default (Router) => {
    
    Router.GET('/api/recipe', async (req, res) => {
        const recipes = await RecipeRepository.GetAllRecipe();

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(recipes));
    });

    Router.GET('/api/recipe/:id', async (req, res, params) => {
        const recipe = await RecipeRepository.GetRecipeById(params.id);

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(recipe));
    });

    Router.POST('/api/recipe', async (req, res)=> {
        
        let recipe = await RecipeRepository.Save(req.post);

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(recipe));

    });

    Router.PUT('/api/recipe/:id', async (req, res, params)=> {
        
        await RecipeRepository.Update(params.id, req.post);

        res.end();
    });

    Router.DELETE('/api/recipe/:id', async (req, res, params)=> {
        
        await RecipeRepository.Delete(params.id);

        res.end();
    });


};
