import { Link } from 'react-router-dom';
import '../styles/Login.css'

function Login() {
    return (
        <body>
            <section className='left'>
                <section className="login">
                    <section className='header'>
                        <h1 className="title">Olá,</h1>
                        <p className="subtitle">
                            Para continuar navegando de forma segura, efetue o login
                        </p>
                    </section>
                    <section className='form'>
                        <h2 className="label-login">Login</h2>
                        <form>
                            <p className="form-item">
                                <input
                                    id='input-user'
                                    type={"text"}
                                    className="user"
                                    name="user"
                                    placeholder="Usuário"
                                />
                            </p>
                            <p className="form-item">
                                <input
                                    id='input-password'
                                    type={"password"}
                                    className="password"
                                    name="password"
                                    placeholder="Senha"
                                />
                            </p>
                            <p>
                                <button
                                    id="button"
                                    type='submit'
                                    name='login'>Logar-se
                                </button>
                            </p>
                        </form>
                        <p id="signup-option">
                            Novo por aqui?
                            <Link id="signup-link" to="/signup">
                                Registre-se
                            </Link>
                        </p>
                    </section>
                </section>
            </section>
            <section className='right'>
                <section className='side-image'>

                </section>
            </section>
        </body>
    );
}

export default Login;
