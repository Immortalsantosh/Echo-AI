import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Profile from '../pages/Profile'
// import PrivateRoute from '../components/PrivateRoute';

import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';

const  router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
          

          {
            path:"/",
           element:<Profile/>,
          },
           {
            path:"login",
           element:<Login/>,
          },
         
          {
            path:"/Sign-up",
           element:<SignUp/>,
          },
          {
            path:"forgot-password",
            element:<ForgotPassword/>
          },
          {
            path: "reset-password",
            element:<ResetPassword/>
          },
          // {
          //   path:"home",
          //  element:<PrivateRoute><Home/></PrivateRoute>
          // }
          { 
            path:"home",
           element:<Home/>
          },
        ]
    }
])
export default router;