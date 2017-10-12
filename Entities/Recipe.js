import mongoose from 'mongoose';


class RecipeEntity extends mongoose.Schema
{
    constructor()
    {
        const Entity = super({
            title:  String,
            author: String,
            text: String,
            categories: Array
        });
        
        return Entity;
    }
}

export default RecipeEntity;
