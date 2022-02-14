
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import Schedule from "views/Schedule.js";
import Password from "views/Password.js";

var routes = [  
  {
    path: "/schedule",
    name: "Schedule",
    icon: "ni ni-bullet-list-67 text-red",
    component: Schedule,
    layout: "/admin",
  },
  {
    path: "/password",
    name: "Password",
    icon: "ni ni-bullet-list-67 text-red",
    component: Password,
    layout: "/admin",
  },
  
  {
    path: "/profile",
    name: "Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  },  
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
  },
];
export default routes;
