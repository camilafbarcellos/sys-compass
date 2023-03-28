import { Link } from 'react-router-dom';
import '../styles/loginSignup.css'

function Login() {
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
                    <section className='form'>
                        <h2 className='label-form'>Login</h2>
                        <form>
                            <p className='form-item'>
                                <input required
                                    id='input required-user'
                                    type={'text'}
                                    className='user'
                                    name='user'
                                    placeholder='Usuário'
                                />
                            </p>
                            <p className='form-item'>
                                <input required
                                    id='input required-password'
                                    type={'password'}
                                    className='password'
                                    name='password'
                                    placeholder='Senha'
                                />
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
                </section>
                <section className='right' />
            </section>
        </body>
    );
}

export default Login;
