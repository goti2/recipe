import CategoryRepository from './../Repositories/Category';


export default (Router) => {

    Router.GET('/api/category', async (req, res) => {

        const categories = await CategoryRepository.GetAllCategories();

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(categories));
    });


    Router.GET('/api/category/:id', async (req, res, params) => {
        
        const category = await CategoryRepository.GetCategoryById(params.id);

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(category));
    });

    Router.POST('/api/category', async (req, res) => {
        
        const category = await CategoryRepository.Create(req.post);

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(category));
    });

    Router.PUT('/api/category/:id', async (req, res, params) => {
        
        await CategoryRepository.Update(params.id, req.post);

        res.end();
    });

    Router.DELETE('/api/category/:id', async (req, res, params) => {
        
        await CategoryRepository.Delete(params.id);

        res.end();
    });

};