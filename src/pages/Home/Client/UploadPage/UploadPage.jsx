import React from 'react';
import { Link } from 'react-router-dom';


const UploadPage = () => {

/*     const {register , formState: {errors}} = useForm();
 */    return (
        <div>
            <Link className="btn btn-outline btn-warning">View</Link >
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
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="upload" placeholder="upload" className="input input-bordered" required />

                                {/* <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Photo </span>
                                    </label>
                                    <input type="text" {...register("photoURL", { required: true })} placeholder="upload..." className="input input-bordered" />
                                    {errors.photoURL && <span className="text-red-600">Uploadig....</span>}
                                </div> */}

                            </div>
                            <div className="form-control mt-6">
                                <Link to='/photonotaccept' className="btn btn-primary">Upload</Link>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default UploadPage;