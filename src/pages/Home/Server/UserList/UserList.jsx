import React from 'react';
import profile1 from "../../../../assets/profile1.jpg";
import { Link } from 'react-router-dom';


const UserList = () => {
    return (
        <div className='pt-5 pl-10'>
            <div className='pb-5'>
                <Link to='/createuser' className="btn btn-active btn-primary ">Back</Link>

            </div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='border border-black p-4'>
                            <th className='border border-black p-4'>User Id</th>
                            <th className='border border-black p-4'>Name</th>
                            <th className='border border-black p-4'>Photo</th>
                            <th className='border border-black p-4'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className='border border-black p-4'>
                            <th className='border border-black p-4'>
                                <h3>5644</h3>
                            </th>
                            <td className='border border-black p-4'>
                                <h2>Arfin</h2>
                            </td>
                            <td className='border border-black p-4'>
                                <div >
                                    <div className=" flex align-cente w-12 h-12">
                                        <img src={profile1} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </td>
                            <th>
                                <button className="btn btn-primary">Done </button>
                                <button className="btn btn-outline btn-primary">Delete</button>
                            </th>
                        </tr>

                        {/* row 2 */}
                        <tr className='border border-black p-4'>
                            <th className='border border-black p-4'>
                                <h3>5644</h3>
                            </th>
                            <td className='border border-black p-4'>
                                <h2>Arfin</h2>
                            </td>
                            <td className='border border-black p-4'>
                                <div >
                                    <div className=" flex align-cente w-12 h-12">
                                        <img src={profile1} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </td>
                            <th>
                                <button className="btn btn-primary">Done </button>
                            </th>
                        </tr>


                        {/* row 3 */}
                        <tr className='border border-black p-4'>
                            <th className='border border-black p-4'>
                                <h3>5644</h3>
                            </th>
                            <td className='border border-black p-4'>
                                <h2>Arfin</h2>
                            </td>
                            <td className='border border-black p-4'>
                                <div >
                                    <div className=" flex align-cente w-12 h-12">
                                        <img src={profile1} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </td>
                            <th>
                                <button className="btn btn-primary">Done </button>
                            </th>
                        </tr>

                        {/* row 4 */}
                        <tr className='border border-black p-4'>
                            <th className='border border-black p-4'>
                                <h3>5644</h3>
                            </th>
                            <td className='border border-black p-4'>
                                <h2>Arfin</h2>
                            </td>
                            <td className='border border-black p-4'>
                                <div >
                                    <div className=" flex align-cente w-12 h-12">
                                        <img src={profile1} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </td>
                            <th>
                                <button className="btn btn-primary">Done </button>
                            </th>
                        </tr>


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default UserList;