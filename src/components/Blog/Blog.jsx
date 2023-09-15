import PropTypes from 'prop-types';
import { FaBeer } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookmark}) => {
    const {title, cover_photo, author,  author_img, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='mb-20 '>
            <img className='w-full' src={cover_photo} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex my-4 gap-3'>
                    <img className='w-16' src={author_img} alt="" />
                    <div>
                        <h3 className='text-4xl'>{author}</h3>
                        <p className=''>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={handleAddToBookmark} className='ml-4 mt-3 text-red-400 text-3xl'>{<FaBeer></FaBeer>}</button>
                    
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};
Blog.propTypes = {
    blog:PropTypes.object
}

export default Blog;