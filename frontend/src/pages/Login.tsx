import '../styles/loginSignup.css';
import Header from '../components/login/Header';
import Form from '../components/login/Form';

export default function Login() {
    return (
        <section className='container'>
            <section className='left'>
                <Header />
                <Form />
            </section>
            <section className='right' />
        </section>
        
    )
}