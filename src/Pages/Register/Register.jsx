import { BsGoogle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
    const { createUser, googleLogin } = useAuth();
    const navigate = useNavigate();
    const handleCreateUser = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (password.length < 6) {
            toast.success('password must be at least six character');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.success('password must be contain Upper Case');
            return;
        }
        else if (!/[a-z]/.test(password)) {
            toast.success('password must be contain Lower Case');
            return;
        }
        else if(!/\d/.test(password)){
            toast.success('password must be contain a number');
            return;
        }
        else if(!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)){
            toast.success('password must be contain a special Character');
            return;
        }
        else {
            createUser(email,password)
                .then(async(result) => {
                    toast.success('user created succesfully')
                    await new Promise((resolve) => setTimeout(resolve, 2000));
                    navigate('/login')
                })
                .catch(error => {
                    toast.error('This Email already has a account.')
            })
        }
    }



    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                toast.success('Login Succesfully')
                navigate('/')
            })
            .catch(err => {
                toast.error('Login Failed')
        })
    }

    return (
        <section className="px-2 mt-8 md:mt-12">
            <section className="border-2 border-slate-400 px-4 py-6 md:p-8 max-w-sm md:max-w-md lg:max-w-lg mx-auto rounded-md">
                <h1 className="text-center font-bold text-2xl md:text-4xl">Login to your account</h1>
                <form onSubmit={handleCreateUser} className="mt-4">
                    <label className="text-base md:text-lg font-semibold mb-3">Name:</label>
                    <input name="name" type="text" placeholder="Enter your Name" className="input input-bordered w-full mb-3" required/>
                    <label className="text-base md:text-lg font-semibold mb-3">Email:</label>
                    <input name="email" type="email" placeholder="Enter your Email" className="input input-bordered w-full mb-3" required/>
                    <label className="text-base md:text-lg font-semibold mb-3">Password:</label>
                    <input name="password" type="password" placeholder="Enter your password" className="input input-bordered w-full mb-3" required />
                    <input type="checkbox"></input>
                    <label> Accept Our <span className="font-semibold"><a>terms and conditions</a></span></label>
                    {/* <p className="text-red-600 font-semibold">Forgot password?</p> */}
                    <button name="submit" className="btn block w-full mt-4"> Register</button>
                </form>
                <button onClick={handleGoogleLogin} className="btn w-full mt-2 flex gap-2 bg-lime-700 text-white"><BsGoogle className="text-xl"></BsGoogle> Log in With Google</button>
                <p className="mt-4 font-medium ">Aready Have an account?<Link to='/login' className="font-bold text-green-600"> Login</Link></p>
                <ToastContainer />
            </section>
        </section>
    );
};
export default Register;