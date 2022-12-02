import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className="hero  bg-base-200">
        <div className="hero-content flex-col lg:flex">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold">SignUp Now!</h1>
           
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="password" className="input input-bordered" />
                <label className="label">
                  <Link to='/' className="label-text-alt link link-hover">Forgot password?</Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
             <p> Already have an <Link className='text-yellow-400' to='/login'> account?</Link></p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Signup;