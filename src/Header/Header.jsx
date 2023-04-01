import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='container'>
            <div className='d-flex justify-content-between ms-5 me-5 mt-3'>
                <h1 className='fw-bold'>Knowledge <span className='red'>Cafe</span></h1>
                <img className='rounded-pill border border-danger' src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=1060&t=st=1680191229~exp=1680191829~hmac=1bbb8f92547c34ed4c8791c4a17b9fcb8851a7f4974e525b29f63c44cda50cdf" alt="" />
            </div>
            <hr className='ms-5 me-5 mt-0 red' />
        </div>
    );
};

export default Header;