import React from 'react';
import photo from "../../../../assets/Logo.jpg";
import { Link } from 'react-router-dom';


const PhotoNotAccepted = () => {
    return (
        <section>
            <div className='flex'>
                <div>
                    <div className="">

                        <div className="login">
                            <form className="login-form">

                                <div>
                                    <label className="label">
                                        <span className="label-text ">User ID</span>
                                    </label>
                                    <input type="text" name="" id="" placeholder="User ID" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <input type="upload" placeholder="upload" className="input input-bordered" required />
                                </div>
                                <input type="submit" value="Upload" />
                            </form>
                        </div>
                    </div>
                </div>
                {/* part -2 */}
                <div>
                    <div className=" pt-20 pl-8 ">
                        <Link to='/upload' className="btn btn-primary">Back</Link>
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <div className=''>
                                    <img className='w-15 h-15' src={photo} alt="" />
                                </div>

                                <p className='text-red-500'>Photo Not Accepted By Admin</p>

                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PhotoNotAccepted;