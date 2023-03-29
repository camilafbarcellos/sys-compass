import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/loginSignup.css'

function SignUp() {

    const [form, setForm] = useState({
        name: '',
        username: '',
        birthDate: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [matchPasswords, setMatchPasswords] = useState(true);

    const handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void = (event) => {
        event.preventDefault();
        const { value, name } = event.target;
        setForm({
            ...form,
            [name]: value
        });
    }

    useEffect(() => {
        form.password === form.confirmPassword
            ? setMatchPasswords(true)
            : setMatchPasswords(false);
    }, [form]);

    return (
        <body>
            <section className='container'>
                <section className='left'>
                    <section className='header'>
                        <h1 className='title'>Olá,</h1>
                        <p className='subtitle'>Por favor, registre-se para continuar</p>
                    </section>
                    <form className='form'>
                        <h2 className='label-form'>Registro</h2>
                        <p className='form-item'>
                            <input required
                                aria-label='Name'
                                id='input required-name'
                                type={'text'}
                                className='name'
                                name='name'
                                placeholder='Nome'
                                aria-required='true'
                                onChange={handleInputChange}
                                value={form.name}
                            />
                        </p>
                        <p className='form-item'>
                            <input required
                                aria-label='Username'
                                id='input required-username'
                                type={'text'}
                                className='username'
                                name='username'
                                placeholder='Usuário'
                                aria-required='true'
                                onChange={handleInputChange}
                                value={form.username}
                            />
                        </p>
                        <p className='form-item'>
                            <input required
                                aria-label='Birth Date'
                                id='input required-birth'
                                type={'date'}
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
                                className='email'
                                name='email'
                                placeholder='Email'
                                aria-required='true'
                                onChange={handleInputChange}
                                value={form.email}
                            />
                        </p>
                        <p className='form-item'>
                            <input required
                                aria-label='Password'
                                id='input required-password'
                                type={'password'}
                                className={matchPasswords ? 'password' : 'input-error'}
                                name='password'
                                placeholder='Senha'
                                aria-required='true'
                                onChange={handleInputChange}
                                value={form.password}
                            />
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
                        </p>
                        {matchPasswords ? ''
                            : (
                                <span className="input-error-message">
                                    As senha não correspondem!
                                </span>
                            )}
                        <p>
                            <button
                                aria-label='Create Account'
                                className='button'
                                id='login'
                                type='submit'
                                name='signup'>Registrar-se
                            </button>
                        </p>
                        <p id='other-option'>
                            Já possui uma conta? &nbsp;<Link id='other-link' to='/login'>Faça Login</Link>
                        </p>
                    </form>
                </section>
                <section className='right' />
            </section>
        </body>
    );
}

export default SignUp;
