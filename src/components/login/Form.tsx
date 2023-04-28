import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserIcon, LockClosedIcon } from '@heroicons/react/24/outline'

export default function Form() {

    // navigation
    const navigate = useNavigate();

    // fetch users data
    const [users, setUsers] = useState<any[]>([]);

    const fetchUserData = () => {
        fetch('http://localhost:9000/users')
            .then(response => {
                return response.json()
            })
            .then(data => {
                setUsers(data)
            })
    }

    useEffect(() => {
        fetchUserData()
    }, []);

    // contains every form input data
    const [form, setForm] = useState({
        username: '',
        password: ''
    });

    // controls all the form validation
    const [invalidUsername, setInvalidUsername] = useState(false);
    const [invalidPassword, setInvalidPassword] = useState(false);

    // handler triggered at every input change, set the form properties
    const handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void = (event) => {
        const { value, name } = event.target;
        setForm({
            ...form,
            [name]: value
        });
    }

    // handler triggered at every form submit, checks inputs validation
    function handlesubmit(event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault(); // prevents from default submit

        setInvalidUsername(false);
        setInvalidPassword(false);

        let exists: boolean = false;
        let userPassword: string = '';
        let userName: string = '';

        // in case of having users data
        if (users.length > 0) {
            // loops the users
            users.forEach((user: { name: string; user: string; birthdate: string; email: string; password: string; profile_photo: string }) => {
                // checks form user existance
                if (form.username === user.user || form.username === user.email) {
                    exists = true;
                    userPassword = user.password;
                    userName = user.name;
                    return;
                }
            })
        }

        // checks username -> can be email
        if (exists) {
            // checks user's password
            if (form.password === userPassword) {
                // saves user to localstoreage
                sessionStorage.setItem('user', form.username);
                // pops alert to the user
                alert(`Bem vind@, ${userName}! Redirecionando para a homepage...`)
                // links to homepage
                navigate('/home');
            } else { // can't find password -> invalid
                setInvalidPassword(true);
            }
        } else { // can't find username -> invalid
            setInvalidUsername(true);
            setInvalidPassword(true);
        }
    }

    return (
        <form className='form' onSubmit={handlesubmit}>
            <h2 className='label-form'>Login</h2>
            <p className='form-item'>
                <input required
                    aria-label='Username'
                    id='input required-username'
                    type={'text'}
                    className={!invalidUsername ? 'username' : 'input-error'}
                    name='username'
                    placeholder='Usuário'
                    aria-required='true'
                    onChange={handleInputChange}
                    value={form.username}
                />
                <UserIcon className='icon' />
            </p>
            <p className='form-item'>
                <input required
                    aria-label='Password'
                    id='input required-password'
                    type={'password'}
                    className={!invalidPassword ? 'password' : 'input-error'}
                    name='password'
                    placeholder='Senha'
                    aria-required='true'
                    onChange={handleInputChange}
                    value={form.password}
                />
                <LockClosedIcon className='icon' />
                {(invalidUsername
                    || invalidPassword)
                    && <span className='input-error-message'>
                        Usuário e/ou Senha inválidos.
                        <br />Por favor, tente novamente!
                    </span>}
            </p>
            <p>
                <button
                    className='button'
                    id='login'
                    type='submit'
                    name='login'>Logar-se
                </button>
            </p>
            <p className='other-option'>
                Novo por aqui? &nbsp;<Link className='other-link' to='/signup'>Registre-se</Link>
            </p>
        </form>
    );
}