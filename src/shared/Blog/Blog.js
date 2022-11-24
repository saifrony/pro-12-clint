import React from 'react';

const Blog = () => {
    return (
        <div className="flex flex-col w-full p-5">
        <div className="grid  card bg-green-200 rounded-box place-items-center mb-4">
            <h2 className='text-xl'>What are the different ways to manage a state in a React application?</h2>
            <p>There are four main types of state you need to properly manage in your React apps:</p>
            <ol>
                <li>1. Local state</li> 
                <li>2. Global state</li>
                <li>3. Server state</li>
                <li>4. URL state</li> 
            </ol> 
        </div> 
        
        <div className="grid card bg-green-200 rounded-box place-items-center mb-4 p-5">
            <h2 className='text-xl'>How does prototypical inheritance work?</h2>
            <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
        </div>

        <div className="grid card bg-green-200 rounded-box place-items-center mb-4 p-5">
            <h2 className='text-xl'>What is a unit test? Why should we write unit tests?</h2>
            <p>In computer programming, unit testing is a software testing method by which individual units of source code—sets of one or more computer program modules together with associated control data, usage procedures, and operating procedures—are tested to determine whether they are fit for use.</p>
            <p>They enable you to catch bugs early in the development process. Automated unit tests help a great deal with regression testing. They detect code smells in your codebase. For example, if you're having a hard time writing unit tests for a piece of code, it might be a sign that your function is too complex.</p>
        </div>

        <div className="grid card bg-green-200 rounded-box place-items-center mb-4 p-5">
            <h2 className='text-xl'> React vs. Angular vs. Vue?</h2>
            <p>React: React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.</p>
            <p>Angular: Angular is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS. </p>
            <p>Vue: Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members.</p>
        </div>
      </div>
    );
};

export default Blog;