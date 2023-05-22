import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    UserIcon, FingerPrintIcon, CakeIcon,
    AtSymbolIcon, LockClosedIcon, ShieldCheckIcon
} from '@heroicons/react/24/outline'
import { checkName, checkUsername, checkEmail, checkPassword } from '../../util/regex';

export default function Form() {
    const [form, setForm] = useState({
        name: '',
        username: '',
        birthDate: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [invalidName, setInvalidName] = useState(false);
    const [invalidUsername, setInvalidUsername] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [invalidPassword, setInvalidPassword] = useState(false);
    const [matchPasswords, setMatchPasswords] = useState(true);

    const handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void = (event) => {
        const { value, name } = event.target;
        setForm({
            ...form,
            [name]: value
        });
    }

    function handlesubmit(event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();

        !checkName.test(form.name)
            ? setInvalidName(true)
            : setInvalidName(false);

        !checkUsername.test(form.username)
            ? setInvalidUsername(true)
            : setInvalidUsername(false);

        !checkEmail.test(form.email)
            ? setInvalidEmail(true)
            : setInvalidEmail(false);

        !checkPassword.test(form.password)
            ? setInvalidPassword(true)
            : setInvalidPassword(false);
    }

    useEffect(() => {
        form.password === form.confirmPassword
            ? setMatchPasswords(true)
            : setMatchPasswords(false);

    }, [form]);

    return (
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
                <UserIcon className='icon' />
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
                <FingerPrintIcon className='icon' />
                {invalidUsername && <span className='input-error-message'>
                    Insira um usuário válido!
                </span>}
            </p>
            <p className='form-item'>
                <input required
                    aria-label='Birth Date'
                    id='input required-birth'
                    type={'text'}
                    onFocus={(e) => (e.target.type = 'date')}
                    onBlur={(e) => (e.target.type = 'text')}
                    className='birthDate'
                    name='birthDate'
                    placeholder='Nascimento'
                    aria-required='true'
                    onChange={handleInputChange}
                    value={form.birthDate}
                />
                <CakeIcon className='icon' />
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
                <AtSymbolIcon className='icon' />
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
                <LockClosedIcon className='icon' />
                {invalidPassword && <span className='input-error-message'>
                    Insira uma senha válida!
                </span>}
                {invalidPassword && <span className='strong-password'>
                    <li>Mínimo de 8 caracteres</li>
                    <li>Pelo menos uma letra maiúscula ou minúscula</li>
                    <li>Pelo menos um número</li>
                </span>}
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
                <ShieldCheckIcon className='icon' />
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
    );
}
