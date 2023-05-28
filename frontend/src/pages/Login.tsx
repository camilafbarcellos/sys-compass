import '../styles/loginSignup.css';
import Header from '../components/login/Header';
import Form from '../components/login/Form';
import { axiosRequest } from '../util/axiosRequest';

export default function Login() {
    const checkUser = async (body: any) => {
        return await axiosRequest('users/login', 'POST', body);
    }

    const authUser = async (token: string) => {
        return await axiosRequest('users/me', 'GET', null, token) as any;
    } 

    return (
        <section className='container'>
            <section className='left'>
                <Header />
                <Form checkUser={checkUser} authUser={authUser} />
            </section>
            <section className='right' />
        </section>

    )
}