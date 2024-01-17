import React from 'react';
import Logo from "../../../../assets/Logo.jpg";
import { Link } from 'react-router-dom';

const AdminLogin = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-sky-600">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className='text-5xl font-bold'>Admin Login!</h1>

                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Admin User ID</span>
                                </label>
                                <input type="email" placeholder="User ID" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <Link to='/createuser' className="btn btn-primary"> AdminLogin</Link>
                            </div>
                        </form>
                    </div>
                    <div className="text-center lg:text-left">
                        <img src={Logo} alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AdminLogin;