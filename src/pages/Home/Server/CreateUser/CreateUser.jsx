import React from 'react';
import { Link } from 'react-router-dom';
import "./CreateUser.css";


const CreateUser = () => {
    return (
        <section className='flex pl-20'>
            <div className="login">
                <form className="login-form">
                    <h2>Create User</h2>
                    <div>
                        <label className="label">
                            <span className="label-text ">User ID</span>
                        </label>
                        <input type="text" name="" id="" placeholder="User ID" />
                    </div>


                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="" id="" placeholder="Password" />

                    <input type="submit" value="Submit" />
                </form>
            </div>
            {/* part -2 */}
            <div>
                <div className='pl-20'>

                    <h1 className='text-3xl'>View User</h1>
                    <div className="hero min-h-screen ">

                        <div className="hero-content flex-col lg:flex-row-reverse">

                            <div className='flex flex-col gap-5'>

                                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-indigo-100">


                                    <div className="p-5 grid flex-grow h-40 w-80 card bg-indigo-100 rounded-box place-items-center">
                                        <input type="text" placeholder="5644" className="  input input-bordered input-primary w-full max-w-xs" />

                                    </div>
                                </div>

                                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-indigo-100">
                                    <div className="p-5 grid flex-grow h-40 w-80 card bg-indigo-100 rounded-box place-items-center">
                                        <input type="text" placeholder="5644" className="  input input-bordered input-primary w-full max-w-xs" />

                                    </div>
                                </div>
                                <Link to='/userlist' className="btn btn-active btn-primary">View</Link>


                            </div>

                        </div>
                    </div>

                </div>
            </div>





        </section >
    );
};

export default CreateUser;