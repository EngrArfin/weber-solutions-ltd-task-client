import React from 'react';
import { Link } from 'react-router-dom';

const CreateUser = () => {
    return (
        <section>
            <div>
                <div>
                    <div className="hero min-h-screen bg-sky-600">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                                <form className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="name" placeholder="Name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" placeholder="password" className="input input-bordered" required />

                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Upload</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* part -2 */}
            <div>
                <div>
                    <Link className="btn btn-outline btn-warning">Back</Link >
                    <div className="hero min-h-screen bg-sky-600">
                        <div className="hero-content flex-col lg:flex-row-reverse">

                            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                                <form className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="name" placeholder="Name" className="input input-bordered" required />
                                    </div>
                                    
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Upload</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CreateUser;