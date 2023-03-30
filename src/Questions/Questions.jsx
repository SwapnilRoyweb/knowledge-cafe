import React from 'react';
import './Questions.css';

const Questions = () => {
    return (
        <div className='container coral p-3 rounded'>
            <h5 className='text-dark text-center fw-bold'>What is the difference between props and state?</h5>
                <p className='p-1 bg-light rounded text-center text-dark'>Props are used for carry data or properties. On the other hand, State is using for all data in a array.</p>
            <h5 className='text-dark text-center fw-bold'>How useState works?</h5>
                <p className='p-1 bg-light rounded text-center text-dark'>UseState works as an array.Before using it we have to destructure some variables which also in a array.</p>
            <h5 className='text-dark text-center fw-bold'>What are useEffect works without data loading?</h5>
                <p className='p-1 bg-light rounded text-center text-dark'>Without data loading useEffect also works as a event handler or side effect.</p>
            <h5 className='text-dark text-center fw-bold'>How React works?</h5>
                <p className='p-1 bg-light rounded text-center text-dark'>React works by allowing developers to create UI components that are rendered into the HTML of the web page, using a virtual DOM to update the UI when necessary, and providing a way to manage the state of the application.</p>
        </div>
    );
};

export default Questions;