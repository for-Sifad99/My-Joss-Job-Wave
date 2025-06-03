import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AiFillRead } from "react-icons/ai";
import { MdDeleteSweep } from "react-icons/md"
import { Link } from 'react-router';
import myApplicationsPromise from '../../api/applicationsApi';
import Loader from '../Shared/Loader';
import Swal from 'sweetalert2';

const ApplicationsList = ({ email }) => {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);

    // FETCH DATA in UseEffect
    useEffect(() => {
        const fetchApplications = async () => {
            if (!email) return;
            setLoading(true);

            try {
                const res = await myApplicationsPromise(email);
                setApplications(res);
            } catch (error) {
                console.log(error.code);
            } finally {
                setLoading(false);
            }
        };

        fetchApplications();
    }, [email]);

    
    const handleDelete = async (_id) => {
        try {
            // Sweet Alert :
            Swal.fire({
                title: "Are you sure?",
                text: "You want to Delete!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Delete"
            })
                .then(async (result) => {
                    if (result.isConfirmed) {
                        // Delete From Db by axios
                        const res = await axios.delete(`http://localhost:3000/applications/${_id}`);
                        if (res.data?.deletedCount > 0 || res.data?.success) {
                            // console.log('Deleted Successfully', res);
                            const updated = applications.filter(application => application._id !== _id);
                            setApplications(updated);

                            Swal.fire({
                                title: "Deleted!",
                                text: "This job application is deleted successfully.",
                                icon: "success"
                            });
                        };
                    };
                });
        } catch (error) {
            console.log(error);
        };
    };

    // set loading
    if (loading) return <Loader />;
    return (
        <>
            {/* Container */}
          
        </>
    );
};

export default ApplicationsList;
