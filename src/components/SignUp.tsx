import { Link } from 'react-router-dom';

function SignUp() {
    return (
        <body>
            <section className="register">
                <section className='left'>
                    <section className='header'>
                        <h1 className="title">Olá,</h1>
                        <p className="subtitle">Por favor, registre-se para continuar</p>
                    </section>
                    <h2 className="form-title">Registro</h2>
                    <form className="form">
                        <p className="form-item">
                            <input
                                id='input-name'
                                type={"text"}
                                className="name"
                                name="name"
                                placeholder="Nome"
                            />
                        </p>
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
                                id='input-birth'
                                type={"date"}
                                className="birthDate"
                                name="birthDate"
                                placeholder="Nascimento"
                            />
                        </p>
                        <p className="form-item">
                            <input
                                id='input-email'
                                type={"email"}
                                className="email"
                                name="email"
                                placeholder="Email"
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
                        <p className="form-item">
                            <input
                                id='input-conf-password'
                                type={"password"}
                                className="conf-password"
                                name="conf-password"
                                placeholder="Confirmar Senha"
                            />
                        </p>
                        <p>
                            <button
                                id="button"
                                type='submit'
                                name='signup'>Registrar-se
                            </button>
                        </p>
                    </form>
                    <p id="login-option">
                        Já possui uma conta?
                        <Link id="login-link" to="/login">
                            Faça Login
                        </Link>
                    </p>
                </section>
                <section className='right'>
                    <section className='side-image'>

                    </section>
                </section>
            </section>
        </body>
    );
}

export default SignUp;
