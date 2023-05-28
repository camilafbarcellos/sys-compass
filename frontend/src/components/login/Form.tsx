import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserIcon, LockClosedIcon } from '@heroicons/react/24/outline'

export default function Form({ checkUser, authUser }: any) {

    const [invalidCredentials, setInvalidCredentials] = useState(false);
    const navigate = useNavigate();

    const [form, setForm] = useState({
        username: '',
        password: ''
    });

    const handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void = (event) => {
        setInvalidCredentials(false);
        const { value, name } = event.target;
        setForm({
            ...form,
            [name]: value
        });
    }

    async function handlesubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = {
            user: form.username,
            password: form.password
        }

        const checkAuth = await checkUser(formData);

        if (checkAuth.status === 201) {
            const user = (await authUser(checkAuth.data.jwt)).data;
            console.log(user);
            sessionStorage.setItem('userId', user.id);
            navigate('/home');
            
        } else if (checkAuth.error.code === 'ERR_BAD_REQUEST') {
            setInvalidCredentials(true);
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
                    className={!invalidCredentials ? 'username' : 'input-error'}
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
                    className={!invalidCredentials ? 'password' : 'input-error'}
                    name='password'
                    placeholder='Senha'
                    aria-required='true'
                    onChange={handleInputChange}
                    value={form.password}
                />
                <LockClosedIcon className='icon' />
                {invalidCredentials
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