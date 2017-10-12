import UrlPattern from 'url-pattern';


class Router 
{
    constructor()
    {
        this.routes = {};
    }

    GetRouteHandler(method, path)
    {
        if(method in this.routes === false || this.routes[method].length === 0) 
        {
            throw new Error(`You need to set at least 1 route for this method: ${method}`);
        }
        
        for(let index in this.routes[method]) 
        {
            const {route, handler} = this.routes[method][index];
            const parameters = route.match(path);

            if(parameters !== null)
            {
                return { parameters, handler };
            }
        }
        
        throw new Error(`Route for ${path} not found`);
    }

    AddRouteWithMethod(method, path, handler) 
    {
        if (!path) 
        {
            throw new Error('You need to set a valid path');
        } 

        if (!handler)
        {
            throw new Error('You need to set a valid handler');
        } 

        const route = new UrlPattern(path);
        
        if(method in this.routes === false)
        {
            this.routes[method] = [];
        }

        this.routes[method].push({route, handler});
    }

    GET(path, handler) 
    {
       this.AddRouteWithMethod('GET', path, handler);
    }

    POST(path, handler)
    {
        this.AddRouteWithMethod('POST', path, handler);
    }

    DELETE(path, handler)
    {
        this.AddRouteWithMethod('DELETE', path, handler);
    }

    PUT(path, handler)
    {
        this.AddRouteWithMethod('PUT', path, handler);
    }
}


export default Router;
