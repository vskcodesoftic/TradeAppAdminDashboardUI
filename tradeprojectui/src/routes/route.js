import React , { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

//AUTH related methods
import { getFirebaseBackend } from "../helpers/authUtils";

import {AuthContext} from '../../src/Shared/context/auth-context'


const AppRoute = ({  component: Component,
  layout: Layout,
  isAuthProtected}) => 

{
  return(
    <>
      (
 

 <Route
   render={props => {

     if (isAuthProtected ) {
       return (
         <Redirect
           to={{ pathname: "/login", state: { from: props.location } }}
         />
       );
     }

     return (
       <Layout>
         <Component {...props} />
       </Layout>
     );
   }}
 />
)
    </>
  )
}


export default AppRoute;
