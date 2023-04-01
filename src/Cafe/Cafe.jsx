import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Blog from '../Blog/Blog';
import './Cafe.css';
const Cafe = () => {
    const [cafes, setCafes] = useState([]);
    const [bookMarked, setBookMarked] = useState([]);
    const [readTime, setReadTime] = useState(0);

    useEffect(() => {
        fetch('knowledge-cafe.json')
        .then(res => res.json())
        .then(data => setCafes(data))
    }, []);

    useEffect(() => {
        
    }, []);
    const handleBookmarked = (title) => {
        const allTitle = [...bookMarked, title];
        setBookMarked(allTitle);
        }

        
        const handleMarkAsRead = (read) => {
            setReadTime(readTime + read);
            // console.log(readTime);
        }
    
    return (
        <div className='container d-flex  justify-content-between g-3'>
            <div>
            {
                cafes.map(cafe => <Blog cafe={cafe} key={cafe.id} handleBookmarked={handleBookmarked} handleMarkAsRead={handleMarkAsRead}></Blog>)
            }
            </div>
            <div className='mb-3 mt-3 d-flex flex-column align-items-center'>
                <div className='read-time rounded'>
                    <p className='fw-bold text-center'>Spend time on read: {readTime}</p>
                </div>
                <div className='mt-3 grey p-3 rounded'>
                    <h5 className='fw-bold text-center'>Bookmarked Blogs: {bookMarked.length}</h5>
                        {
                        bookMarked.map(bookMark => <div className='bg-light rounded mb-2'>
                            <h6 className='p-2'>{bookMark}</h6>
                        </div>)
                        }
                    
                </div>
            </div>
        </div>
    );
};

export default Cafe;