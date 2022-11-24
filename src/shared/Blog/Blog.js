import React from 'react';

const Blog = () => {
    return (
        <div className="flex flex-col w-full p-5">
        <div className="grid h-20 card bg-green-200 rounded-box place-items-center mb-4">
            <h2>What are the different ways to manage a state in a React application?</h2>
            <p>hi</p>
        </div> 
        
        <div className="grid h-20 card bg-green-200 rounded-box place-items-center mb-4">
            <h2>How does prototypical inheritance work?</h2>
            <p>h</p>
        </div>

        <div className="grid h-20 card bg-green-200 rounded-box place-items-center mb-4">
            <h2>What is a unit test? Why should we write unit tests?</h2>
            <p>s</p>
        </div>

        <div className="grid h-20 card bg-green-200 rounded-box place-items-center mb-4">
            <h2> React vs. Angular vs. Vue?</h2>
            <p>d</p>
        </div>
      </div>
    );
};

export default Blog;