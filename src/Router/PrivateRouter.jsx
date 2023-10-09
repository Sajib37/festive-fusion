import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../AuthProvider/AuthProvider";


const PrivateRouter = ({children}) => {
    const { user, loading } = useAuth()

    console.log(user)
    
    const location = useLocation();
    if (loading) {
        return <span className="loading loading-spinner loading-lg absolute top-24 left-[48%]"></span>
    }
    if (user) {
        return children;
    }
    else {
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }
};

export default PrivateRouter;