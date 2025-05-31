import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import useAuth from '../../hooks/UseAuth';
import Swal from "sweetalert2";
import { GoSignOut } from "react-icons/go";


const Profile = () => {
    const { signOutUser, user } = useAuth();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef(null);

    // User Sign Out:
    const handleSignOut = async () => {

        // Sweet Alert :
        Swal.fire({
            title: "Are you sure?",
            text: "You want to log out!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Logout"
        })
            .then(async (result) => {
                if (result.isConfirmed) {
                    await signOutUser();
                    navigate('/login');

                    Swal.fire({
                        title: "Logged out!",
                        text: "You are successfully logged out.",
                        icon: "success"
                    });
                }
            });
    };

    // Close modal when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative">
            {/* Navbar Profile Picture */}
            <img
                src={user?.photoURL || "/default-user.png"}
                alt="User"
                className="w-10 h-10 rounded-full border-3 border-slate-200 dark:border-slate-300 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            />

            {/* Conditional Picture and Email */}
            {isOpen && (
                <div
                    ref={modalRef}
                    className="absolute top-13 right-0 w-48 bg-[#f3f5fa] dark:bg-[#343a46] shadow-sm rounded-xl p-4 z-50"
                >
                    <div className="flex flex-col items-center gap-2">
                        <img
                            src={user?.photoURL || "/default-user.png"}
                            alt="Large User"
                            className="w-16 h-16 rounded-full"
                        />
                        <h2 className="text-sm font-semibold text-center text-black dark:text-[var(--color-dark-primary)]">
                            {user?.email || "User"}
                        </h2>
                    </div>

                    {/* Horizontal Line */}
                    <hr className="text-gray-600 my-3" />

                    {/* Logout Button */}
                    <button onClick={handleSignOut} className="group mt-2 w-full flex gap-2 items-center justify-center  bg-red-500 text-white px-4 py-2 rounded-full  hover:bg-linear-to-r/srgb hover:from-red-500 hover:to-red-600 transition-all duration-300 hover:-translate-y-1">Sign Out <GoSignOut className='transition-all duration-300 group-hover:translate-x-2' /> </button>
                </div>
            )}
        </div>
    );
};

export default Profile;
