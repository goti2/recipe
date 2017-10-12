import mongoose from 'mongoose';
import config from 'config';
import RecipeEntity from './../Entities/Recipe';



class RecipeRepository
{
    constructor()
    {
        mongoose.connect(config.get('db.uri'));

        this.storage = mongoose.model('Recipe', new RecipeEntity);
    }

    async Save(recipe)
    {
        return this.storage.create(recipe);
    }

    async Update(id, recipe)
    {
        return this.storage.update({_id: id}, recipe);
    }

    async Delete(id)
    {
        return this.storage.remove({_id: id});
    }

    async GetAllRecipe()
    {
        return this.storage.find();
    }

    async GetAllRecipeByCategory(category)
    {
        return this.storage.find({ categories: {$in: [category]} });
    }

    async GetRecipeById(id)
    {
        return this.storage.findOne({_id: id});
    }
}

export default new RecipeRepository;
