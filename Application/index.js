import Router from './router';


const Application = (req, res) => {
    try 
    {
        const { parameters, handler } = Application.Router.GetRouteHandler(req.method, req.url);

        if (req.method !== 'GET') {
            let jsonString = '';
            
            req.on('data', (data) => jsonString += data);
            req.on('end', () => {
                req.post = JSON.parse(jsonString);
                handler(req, res, parameters);        
            });
        }
        else
        {
            handler(req, res, parameters);
        }
    }
    catch(ex)
    {
        console.log(ex);
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end(ex);
    }
};

//Default Routing
Application.Router = new Router;

export default Application;
