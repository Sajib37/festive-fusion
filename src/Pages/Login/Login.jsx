import { BsGoogle } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef, useState } from "react";

const Login = () => {
    const { googleLogin, emailLogin, resetPassword } = useAuth();
    const [error, setError] = useState(null);
    const emailRef = useRef();
    const location = useLocation();
    const navigate = useNavigate();


    const handleGoogleLogin = () => {
        setError("");
        googleLogin()
            .then((res) => {
                toast.success("Login Succesfully");
                navigate(location?.state? location.state:'/')
            })
            .catch((err) => {
                toast.error("Login Failed");
            });
    };

    // Login with email and password

    const handleEmailLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        setError(null);
        emailLogin(email, password)
            .then(async (result) => {
                toast.success("Login Succesfully");
                await new Promise((resolve) => setTimeout(resolve, 2000));
                navigate(location?.state? location.state: '/')
            })
            .catch((error) => {
                toast.error(" invalid Email or Password");
                setError(error.message);
            });
    };

    // reset password
    const handleResetPassword = () => {
        const Email = emailRef.current.value;
        console.log(Email)
        resetPassword(Email)
            .then((result) => {
                toast.success("Please check your email for the new password. ");
            })
            .catch((error) => {
                toast.error("Password cannot be reset");
            });
    };

    return (
        <section className="px-2 mt-8 md:mt-12">
            <section className="border-2 border-slate-400 px-4 py-6 md:p-8 max-w-sm md:max-w-md lg:max-w-lg mx-auto rounded-md">
                <h1 className="text-center font-bold text-2xl md:text-4xl">
                    Login to your account
                </h1>
                <form onSubmit={handleEmailLogin} className="mt-4">
                    <label className="text-base md:text-lg font-semibold mb-3">
                        Email:
                    </label>
                    <input
                        name="email"
                        type="email"
                        placeholder="Enter your Email"
                        className="input input-bordered w-full mb-3"
                        ref={emailRef}
                        required
                    />
                    <label className="text-base md:text-lg font-semibold mb-3">
                        Password:
                    </label>
                    <input
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        className="input input-bordered w-full mb-3"
                        required
                    />
                    {/* <input type="checkbox"></input> */}
                    {/* <label> Accept Our <span className="font-semibold"><a>terms and conditions</a></span></label> */}
                    <p
                        onClick={handleResetPassword}
                        className="text-red-600 font-semibold"
                    >
                        Forgot password?
                    </p>
                    <button name="submit" className="btn block w-full mt-4">
                        {" "}
                        Login
                    </button>
                </form>
                <button
                    onClick={handleGoogleLogin}
                    className="btn w-full mt-2 flex gap-2"
                >
                    <BsGoogle className="text-xl"></BsGoogle> Log in With Google
                </button>
                <p className="mt-4 font-medium ">
                    Don't Have an account? Please,{" "}
                    <Link to="/register" className="font-bold text-green-600">
                        {" "}
                        Register
                    </Link>
                </p>
                {error && (
                    <p className="text-base font-medium text-red-400 text-center mt-2">
                        {" "}
                        {error}
                    </p>
                )}
            </section>
            <ToastContainer />
        </section>
    );
};

export default Login;
