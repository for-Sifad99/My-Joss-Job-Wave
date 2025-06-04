import axios from 'axios';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useParams } from 'react-router';
import Swal from 'sweetalert2';

const ViewApplications = () => {
    const { job_id } = useParams();
    const applications = useLoaderData();
    console.log(applications)

    const handleUpdateStatus = (e, appId) => {
        const status = e.target.value;

        // Update status to db
        axios.patch(`http://localhost:3000/applications/${appId}`, { status })
            .then(res => {
                // console.log(res);
                if (res.data.modifiedCount) {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.onmouseenter = Swal.stopTimer;
                            toast.onmouseleave = Swal.resumeTimer;
                        }
                    });
                    Toast.fire({
                        icon: "success",
                        title: "Status update done."
                    });
                };
            })
            .catch(error => {
                console.log(error);
            })
    }

    return <>
        {/* Helmet */}
        <Helmet>
            <title>View Applications | Job Wave</title>
            <meta name="description" content="Check how many posts you posted for this application. View post counts." />
        </Helmet>


        {/* Content */}
        <section className='max-w-7xl mx-auto gap-6 px-6 lg:px-4 md:px-24 sm:px-10 md:py-8 py-6'>
            <div className='text-[var(--color-text-primary)] dark:text-[var(--color-dark-primary)]'>
                <h1 className='lg:text-5xl sm:text-3xl text-xl font-bold'>A<span className='text-blue-400'>PP</span>LICATION- <br /><span className='lg:text-5xl sm:text-3xl text-base'>{job_id}</span></h1>
                <h1 className='md:tex-xl text-base'>Total Posts - <span className='text-blue-300 font-extrabold'>{applications.length}</span></h1>
            </div>

            {applications.length == 0 ? ''
                : <>
                    {/* Posted Jobs List */}
                    <div className="overflow-x-scroll w-full mx-auto mt-4">
                        <table className="table dark:text-[var(--color-dark-primary)]">
                            {/* head */}
                            <thead className='dark:text-[var(--color-dark-primary)]'>
                                <tr>
                                    <th>Serial</th>
                                    <th>Applicant</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>View Posts</th>
                                </tr>
                            </thead>
                            <tbody>
                                {applications.map((application, index) =>
                                    <tr key={application._id} className="bg-base-200 border-b border-gray-700 dark:bg-[#22313d]">
                                        <th>{index + 1}</th>
                                        <td className='text-sm text-xs'>{application.applicantName}</td>
                                        <td className='text-sm text-xs'>{application.applicantEmail}</td>
                                        <td>{application.applicantPhone}</td>
                                        <td><select onChange={e => handleUpdateStatus(e, application._id)} defaultValue={application.status} name='status' className='dark:text-[var(--color-dark-primary)] dark:bg-[var(--color-section-bg)] select w-1/3 md:w-1/2'>
                                            <option disabled={true}>Update Status</option>
                                            <option>Pending</option>
                                            <option>Interview</option>
                                            <option>Hired</option>
                                            <option>Rejected</option>
                                        </select></td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </>
            }
        </section >
    </>

};

export default ViewApplications;