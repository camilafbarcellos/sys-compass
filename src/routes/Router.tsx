import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navigate to='/login' />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/login' element={<Login />} />
                <Route path='*' element={<Navigate to='/login' />} />
            </Routes>
        </BrowserRouter>
    );
}
