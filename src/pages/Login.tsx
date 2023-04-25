import '../styles/loginSignup.css'
import LoginHeader from '../components/LoginHeader';
import LoginForm from '../components/LoginForm';

export default function Login() {
    // login page split in half for the form and image
    return (
        <section>
            <section className='container'>
                <section className='left'>
                    <LoginHeader />
                    <LoginForm />
                </section>
                <section className='right'/>
            </section>
        </section>
    );
}