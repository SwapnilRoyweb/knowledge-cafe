import React from 'react';
import './Blog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
const Blog = ({cafe, handleBookmarked, handleMarkAsRead}) => {
    const {name, profile, cover, title, published, read} = cafe;
    return (
        <div className='blog mb-3'>
            <img className='w-100 h-75 img-fluid rounded' src={cover} alt="" />
            <div className='d-flex justify-content-between mt-3'>
                <div className='d-flex'>
                    <img className='rounded-circle profile-pic' src={profile} alt="" />
                    <div className='ms-2'>
                        <h5 className='fw-bold'>{name}</h5>
                        <p>{published}</p>
                    </div>
                </div>
                <div className='d-flex'>
                    <p>{read} min read</p>
                    <button className='h-25 bg-light border-0 btn-bookmark' onClick={() => handleBookmarked(cafe)}><FontAwesomeIcon icon={faBookmark}/></button>
                </div>
            </div>
            <div>
                <h3 className='fw-bold'>{title}</h3>
                <button className='btn-mark' onClick={() => handleMarkAsRead(JSON.parse(read))}>Mark as read</button>
            </div>
        </div>
    );
};

export default Blog;