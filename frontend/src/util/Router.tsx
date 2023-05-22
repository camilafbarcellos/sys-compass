import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navigate to='/login' />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/login' element={<Login />} />
                <Route path='*' element={<Navigate to='/login' />} />

                <Route path='/home' element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}
