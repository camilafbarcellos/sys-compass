import { Navigate } from 'react-router-dom';

const withAuth = (Component: any) => {
    const AuthRoute =() => {
        const isAuth = !!sessionStorage.getItem('userId');
        if (isAuth) {
            return <Component/>
        } else {
            return <Navigate to='/login'/>
        }
    }
    return AuthRoute;
}

export default withAuth;