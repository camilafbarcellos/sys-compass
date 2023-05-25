import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import User from '../../types/user';

export default function Form({ users }: any) {

    const navigate = useNavigate();    

    const [form, setForm] = useState({
        username: '',
        password: ''
    });

    const [invalidUsername, setInvalidUsername] = useState(false);
    const [invalidPassword, setInvalidPassword] = useState(false);

    const handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void = (event) => {
        const { value, name } = event.target;
        setForm({
            ...form,
            [name]: value
        });
    }

    function handlesubmit(event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();

        setInvalidUsername(false);
        setInvalidPassword(false);

        let exists: boolean = false;
        let userPassword: string = '';
        let userName: string = '';

        if (users.length > 0) {
            users.forEach((user: User) => {
                if (form.username === user.user || form.username === user.email) {
                    exists = true;
                    userPassword = user.password;
                    userName = user.name;
                    return;
                }
            })
        }

        if (exists) {
            if (form.password === userPassword) {
                sessionStorage.setItem('user', form.username);
                navigate('/home');
            } else {
                setInvalidPassword(true);
            }
        } else {
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