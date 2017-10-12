import mongoose from 'mongoose';


class PostEntity extends mongoose.Schema
{
    constructor()
    {
        const Entity = super({
            title:  String,
            shortDescription: String,
            author: String,
            text: String,
            categories: Array,
            comments: Array
        });

        return Entity;
    }

}

export default PostEntity;
