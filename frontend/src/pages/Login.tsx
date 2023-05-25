import '../styles/loginSignup.css';
import Header from '../components/login/Header';
import Form from '../components/login/Form';
import { useEffect, useState } from 'react';
import User from '../types/user';
import { fetchData } from '../util/fetchData';

export default function Login() {

    const [users, setUsers] = useState<User[]>([]);

    const fetcUserData = async () => {
        setUsers(await fetchData('users'));
    }

    useEffect(() => {
        fetcUserData()
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