import mongoose from 'mongoose';


class CategoryEntity extends mongoose.Schema
{
    constructor()
    {
        const Entity = super({
            name: String,
            color: String
        });
        
        return Entity;
    }
}

export default CategoryEntity;
