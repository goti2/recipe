import mongoose from 'mongoose';


class CategoryEntity extends mongoose.Schema
{
    constructor()
    {
        const Entity = super({
            name: String,
            color: String,
            parent: [{ type: ObjectId, ref: CategoryEntity.CollectionName }]
        });
        
        return Entity;
    }
}


CategoryEntity.CollectionName = 'Category';

export default CategoryEntity;
