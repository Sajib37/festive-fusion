import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

const Navbar = () => {
    const { user, logOut } = useAuth();
    const [photoURL, setPhotoURL] = useState(null);
    const [displayName, setDisplayName] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (user !== null) {
            setDisplayName(user.displayName);
            setPhotoURL(user.photoURL);
        }
    }, [user]);

    const handleLogout = () => {
        logOut()
            .then((result) => {
                navigate("/");
            })
            .catch((error) => {
                toast.error("Logout Failed");
            });
    };
    const navLinks = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/services"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    Services
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/team"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    Team
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/testimonial"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    Testimonials
                </NavLink>
            </li>
            <li>
                {!user && (
                    <NavLink
                        to="/register"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Register
                    </NavLink>
                )}
            </li>
        </>
    );
    return (
        <div className="max-w-screen-xl h-20 mx-auto relative  mb-8">
            <div className="w-full h-full absolute top-0 left-0 z-30">
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label
                                tabIndex={0}
                                className="btn btn-ghost lg:hidden"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </label>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm font-semibold dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                            >
                                {navLinks}
                            </ul>
                        </div>
                        <a className="btn btn-ghost hidden md:block normal-case text-xl md:text-3xl font-serif">
                            Festive Fusion
                        </a>
                        <a className="btn btn-ghost md:hidden md:block normal-case text-xl md:text-3xl font-serif">
                            Fusion
                        </a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-2 font-semibold">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {user ? (
                            <div className="flex gap-1">
                                <div className="flex items-center gap-1">
                                    {photoURL && (
                                        <img
                                            className="w-10 h-10 rounded-full"
                                            src={photoURL}
                                        ></img>
                                    )}

                                    <h1 className="text-lg font-medium hidden md:block">
                                        {displayName}
                                    </h1>
                                </div>
                                <button className=" btn" onClick={handleLogout}>
                                    Log Out
                                </button>
                            </div>
                        ) : (
                            <Link to="/login" className="btn">
                                Login
                            </Link>
                        )}
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
