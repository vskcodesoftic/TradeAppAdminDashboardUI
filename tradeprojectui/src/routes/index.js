import React from "react";
import { Redirect } from "react-router-dom";

// Pages Component

// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/FogetPassword";

import Dashboard from "../pages/Dashboard";

import Users from "../pages/Apps/Users/index";




import Products from "../pages/Apps/Product";
import PaymentsPageDataTabel from "../pages/Apps/Payments/Payments";
import CreatePlan from "../pages/Apps/Plans/CreatePlan";
import PlansPage from "../pages/Apps/Plans/Plans";
import UpdatePassword from "../pages/Authentication/UpdatePassword";
import SendNotification from "../pages/Apps/Notifications/SendNotification";




const authProtectedRoutes = [
  // Users
  { path: "/users", component: Users },
  //products
  { path: "/products", component: Products },
  //paymentsPage
  { path: "/payments", component: PaymentsPageDataTabel },
   //plans
     
   //paymentsPage
  { path: "/plans/createPlan", component: CreatePlan },
  
  //edit update

  { path: "/plans", component: PlansPage },

  //update Password

  { path: "/update-password", component: UpdatePassword },


  //send Notification to all users
  { path: "/send-notification" , component: SendNotification },


  { path: "/admin/dashboard", component: Dashboard },

  { path: "/", exact: true, component: () => <Redirect to="/admin/dashboard" /> }
];

const publicRoutes = [

  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forget-password", component: ForgetPwd },
  { path: "/pages-register", component: Register },

  
];

export { authProtectedRoutes, publicRoutes };
