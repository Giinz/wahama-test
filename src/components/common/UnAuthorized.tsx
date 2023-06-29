import { Navigate, RouteProps } from 'react-router-dom';

export const UnAuthorized = ({ children }: RouteProps) => {
    const isLoggedIn = localStorage.getItem('accessToken')
    return !isLoggedIn ? <>{children}</> : <Navigate to={"/dashboard"} replace />;
}

