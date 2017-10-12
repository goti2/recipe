import mongoose from 'mongoose';
import config from 'config';
import PostEntity from './../Entities/Post';


class PostRepository 
{
    constructor()
    {
        mongoose.connect(config.get('db.uri'));
        
        this.storage = mongoose.model('Post', new PostEntity);
    }

    async GetPostById(id)
    {
        return this.storage.findOne({_id: id});
    }

    async GetAllPosts()
    {
        return this.storage.find();
    }

    async GetPostsByCategory(category)
    {
        return this.storage.find({ categories: {$in: [category] } });
    }

    async Save(post)
    {
        return this.storage.create(post);
    }

    async Update(id, post)
    {
        return this.storage.update({_id: id}, post);
    }

    async Delete(id)
    {
        return this.storage.remove({_id: id});
    }
}

export default new PostRepository;
