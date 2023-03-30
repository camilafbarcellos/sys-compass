import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { checkName, checkUsername, checkEmail, checkPassword } from '../util/regex';
import '../styles/loginSignup.css'

function SignUp() {

    // contains every form input data
    const [form, setForm] = useState({
        name: '',
        username: '',
        birthDate: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    // controls all the form validation
    const [invalidName, setInvalidName] = useState(false);
    const [invalidUsername, setInvalidUsername] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [invalidPassword, setInvalidPassword] = useState(false);
    const [matchPasswords, setMatchPasswords] = useState(true);

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

        // name validation
        !checkName.test(form.name)
            ? setInvalidName(true)
            : setInvalidName(false);

        // username validation
        !checkUsername.test(form.username)
            ? setInvalidUsername(true)
            : setInvalidUsername(false);

        // email validation
        !checkEmail.test(form.email)
            ? setInvalidEmail(true)
            : setInvalidEmail(false);

        // password validation
        !checkPassword.test(form.password)
            ? setInvalidPassword(true)
            : setInvalidPassword(false);
    }

    // triggered when form element's rendered
    useEffect(() => {
        // password confirmation
        form.password === form.confirmPassword
            ? setMatchPasswords(true)
            : setMatchPasswords(false);

    }, [form]);

    // signup page split in half for the form and image
    return (
        <body>
            <section className='container'>
                <section className='left'>
                    <section className='header'>
                        <h1 className='title'>Olá,</h1>
                        <p className='subtitle'>Por favor, registre-se para continuar</p>
                    </section>
                    <form className='form' onSubmit={handlesubmit}>
                        <h2 className='label-form'>Registro</h2>
                        <p className='form-item'>
                            <input required
                                aria-label='Name'
                                id='input required-name'
                                type={'text'}
                                className={!invalidName ? 'name' : 'input-error'}
                                name='name'
                                placeholder='Nome'
                                aria-required='true'
                                onChange={handleInputChange}
                                value={form.name}
                            />
                            {invalidName && <span className='input-error-message'>
                                Insira um nome válido!
                            </span>}
                        </p>
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
                            {invalidUsername && <span className='input-error-message'>
                                Insira um usuário válido!
                            </span>}
                        </p>
                        <p className='form-item'>
                            <input required
                                aria-label='Birth Date'
                                id='input required-birth'
                                type={'text'}
                                onFocus={(e) => (e.target.type='date')}
                                onBlur={(e) => (e.target.type='text')}
                                className='birthDate'
                                name='birthDate'
                                placeholder='Nascimento'
                                aria-required='true'
                                onChange={handleInputChange}
                                value={form.birthDate}
                            />
                        </p>
                        <p className='form-item'>
                            <input required
                                aria-label='Email'
                                id='input required-email'
                                type={'email'}
                                className={!invalidEmail ? 'email' : 'input-error'}
                                name='email'
                                placeholder='Email'
                                aria-required='true'
                                onChange={handleInputChange}
                                value={form.email}
                            />
                            {invalidEmail && <span className='input-error-message'>
                                Insira um email válido!
                            </span>}
                        </p>
                        <p className='form-item'>
                            <input required
                                aria-label='Password'
                                id='input required-password'
                                type={'password'}
                                className={matchPasswords && !invalidPassword ? 'password' : 'input-error'}
                                name='password'
                                placeholder='Senha'
                                aria-required='true'
                                onChange={handleInputChange}
                                value={form.password}
                            />
                            {invalidPassword && <span className='input-error-message'>
                                Insira uma senha válida!
                            </span>}
                            {invalidPassword && <ul className='strong-password'>
                                <li>Mínimo de 8 caracteres</li>
                                <li>Pelo menos uma letra maiúscula ou minúscula</li>
                                <li>Pelo menos um número</li>
                            </ul>}
                        </p>
                        <p className='form-item'>
                            <input required
                                aria-label='Confirm Password'
                                id='input required-confirm-password'
                                type={'password'}
                                className={matchPasswords ? 'confirm-password' : 'input-error'}
                                name='confirmPassword'
                                placeholder='Confirmar Senha'
                                aria-required='true'
                                onChange={handleInputChange}
                                value={form.confirmPassword}
                            />
                            {matchPasswords ? ''
                                : (
                                    <span className='input-error-message'>
                                        As senha não correspondem!
                                    </span>
                                )}
                        </p>
                        <p>
                            <button
                                aria-label='Create Account'
                                className='button'
                                id='login'
                                type='submit'
                                name='signup'>Registrar-se
                            </button>
                        </p>
                        <p className='other-option'>
                            Já possui uma conta? &nbsp;<Link className='other-link' to='/login'>Faça Login</Link>
                        </p>
                    </form>
                </section>
                <section className='right' />
            </section>
        </body>
    );
}

export default SignUp;
