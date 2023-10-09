import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Team from "../Pages/Team/Team";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Services from "../Shared/Services/Services";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import PrivateRouter from "./PrivateRouter";
import Testimonial from "../Pages/Testimonial/Testimonial";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element:<Home/>
            },
            {
                path: '/services',
                element: <PrivateRouter><Services></Services></PrivateRouter>,
            },
            {
                path: '/team',
                element: <PrivateRouter><Team></Team></PrivateRouter>,
                loader: ()=>fetch('/team.json')
            },
            {
                path: '/register',      
                element: <Register></Register>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/event/:id',
                element:<PrivateRouter><ServiceDetails></ServiceDetails></PrivateRouter>
            },
            {
                path: "/testimonial",
                element: <Testimonial></Testimonial>,
                loader: ()=> fetch('/testimonial.json')
            }
        ]
    },
]);

export default router;
