import {Navigate} from "react-router-dom";

export type ProtectedRouteType = {
    children: React.ReactNode;
}

export const ProtectedRoute = ({children}: ProtectedRouteType) => {
    const isProtected = false
    return isProtected
        ? <>{children}</>
        : <Navigate to={"/error"}></Navigate>

};
