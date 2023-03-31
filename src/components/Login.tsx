import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { checkUsername, checkPassword, checkEmail } from '../util/regex';
import '../styles/loginSignup.css'

function Login() {

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

        // checks username admin - not admin must follow pattern
        if (form.username !== 'admin') {
            // username validation - can be email
            !checkUsername.test(form.username)
                && !checkEmail.test(form.username)
                ? setInvalidUsername(true)
                : setInvalidUsername(false);

            // password validation
            !checkPassword.test(form.password)
                ? setInvalidPassword(true)
                : setInvalidPassword(false);
        }

        // password must match admin
        form.password !== 'admin'
        ? setInvalidPassword(true)
        : setInvalidPassword(false);


    }

    // login page split in half for the form and image
    return (
        <body>
            <section className='container'>
                <section className='left'>
                    <section className='header'>
                        <h1 className='title'>Olá,</h1>
                        <p className='subtitle'>
                            Para continuar navegando de forma segura, efetue o login
                        </p>
                    </section>
                    <form className='form' onSubmit={handlesubmit}>
                        <h2 className='label-form'>Login</h2>
                        <p className='form-input'>
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
                        <p className='form-input'>
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
                </section>
                <section className='right' />
            </section>
        </body>
    );
}

export default Login;
