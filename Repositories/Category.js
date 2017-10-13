import mongoose from 'mongoose';
import config from 'config';
import CategoryEntity from './../Entities/Category';


class CategoryRepository
{
    constructor()
    {
        mongoose.connect(config.get('db.uri'));

        this.storage = mongoose.model(CategoryEntity.CollectionName, new CategoryEntity);
    }

    async Create(category)
    {
        return this.storage.create(category);
    }

    async Delete(id)
    {
        return this.storage.remove({_id: id});
    }

    async Update(id, category)
    {
        return this.storage.update({_id: id}, category);
    }

    async GetAllCategories()
    {
        return this.storage.find();
    }

    async GetCategoryById(id)
    {
        return this.storage.findById(id);
    }
}

export default new CategoryRepository;
