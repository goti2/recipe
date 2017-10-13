import XssFilter from 'xss-filters';
import PostEntity from './../Entities/Post';



class PostConverter
{
    GetEntity(dto)
    {
        const entity = new PostEntity;

        entity.title = XssFilter.inHTMLData(dto.title);
        entity.shortDescription = XssFilter.inHTMLData(dto.shortDescription);
        entity.author = XssFilter.inHTMLData(dto.author);
        entity.text = XssFilter.inHTMLData(dto.text);
        entity.categories = XssFilter.inHTMLData(dto.categories);
        entity.comments = XssFilter.inHTMLData(dto.comments);

        return entity;
    }
}

export default new PostConverter;
