import PostRepository from './../Repositories/Post';
import PostConverter from './../Converter/Post';


export default (Router) => {

    Router.GET('/api/post', async (req, res) => {

        const posts = await PostRepository.GetAllPosts();


        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(posts));
    });

    Router.GET('/api/post/:id', async (req, res, params) => {

        const post = await PostRepository.GetPostById(params.id);


        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(post));
    });

    Router.POST('/api/post', async (req, res) => {

        const entity = PostConverter.GetEntity(req.post);
        
        const post = await PostRepository.Save(entity);
        // Or use
        //const post = await entity.save();

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(post));
    });

    Router.PUT('/api/post/:id', async (req, res, params) => {

        const post = await PostRepository.Update(params.id, req.post);

        res.end(JSON.stringify(post));
    });

    Router.DELETE('/api/post/:id', async (req, res, params) => {

        await PostRepository.Delete(params.id);

        res.end();
    });

};