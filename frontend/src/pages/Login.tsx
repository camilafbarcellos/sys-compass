import '../styles/loginSignup.css';
import Header from '../components/login/Header';
import Form from '../components/login/Form';
import { useEffect, useState } from 'react';
import User from '../types/user';
import { fetchAPI } from '../util/fetchAPI';

export default function Login() {

    const [users, setUsers] = useState<User[]>([]);

    const fetchUserData = async () => {
        let fetch = await fetchAPI('users', 'GET');
        setUsers(fetch.data);        
    }

    useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <section className='container'>
            <section className='left'>
                <Header />
                <Form users={users} />
            </section>
            <section className='right' />
        </section>
        
    )
}