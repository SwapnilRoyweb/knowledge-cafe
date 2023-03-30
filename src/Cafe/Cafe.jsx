import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Blog from '../Blog/Blog';
import './Cafe.css';
const Cafe = () => {
    const [cafes, setCafes] = useState([]);

    useEffect(() => {
        fetch('knowledge-cafe.json')
        .then(res => res.json())
        .then(data => setCafes(data))
    }, []);

    return (
        <div>
            {
                cafes.map(cafe => <Blog cafe={cafe} key={cafe.id}></Blog>)
            }
        </div>
    );
};

export default Cafe;