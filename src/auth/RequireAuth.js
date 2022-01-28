import React, {useContext} from "react";
import { Navigate, useLocation } from "react-router";
import AuthContext from "../store/contexts/AuthContext";

export const RequireAuth = ({children}) => {

   const {auth} = useContext(AuthContext);
   let location = useLocation();

   if(!auth.isAuthenticated){
    return <Navigate to="/login" state={{ from: location }} replace />;
   }


    return children;

}