import '../styles/loginSignup.css';
import Header from '../components/login/Header';
import Form from '../components/login/Form';
import { fetchAPI } from '../util/fetchAPI';
import { axiosRequest } from '../util/axiosRequest';

export default function Login() {
    const checkUser = async (body: any) => {
        return await axiosRequest('users/login', 'POST', body);
    }

    const authUser = async (token: string) => {
        return (await fetchAPI('users/me', 'GET', token)).data;
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