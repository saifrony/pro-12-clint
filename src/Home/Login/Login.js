import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

  const handleLogin = event =>{
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const user = {email,password};
    console.log(user); 
    event.target.reset();
  }
       

    return (
        <div className="hero  bg-base-200">
        <div className="hero-content flex-col lg:flex">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold">Login now!</h1>
           
          </div>
          <div onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name='email' type="email" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name='password' type="password" placeholder="password" className="input input-bordered" />
                <label className="label">
                  <Link to='' className="label-text-alt link link-hover">Forgot password?</Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
             <p> Please Create an <Link className='text-yellow-400' to='/signup'> account</Link></p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;