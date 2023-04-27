import { Navigate } from 'react-router-dom';

// protects the component so that it will only be rendered if the user is authorized
const withAuth = (Component: any) => {
    const AuthRoute =() => {
        // checks localstorage
        const isAuth = !!localStorage.getItem('user');
        if (isAuth) { // user logged in
            // renders the page component
            return <Component/>
        } else { // user not logged in
            // navigates to login page
            return <Navigate to='/login'/>
        }
    }
    return AuthRoute;
}

export default withAuth;