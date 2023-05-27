import '../styles/loginSignup.css';
import Form from '../components/signup/Form';
import Header from '../components/signup/Header';
import { axiosRequest } from '../util/axiosRequest';

export default function SignUp() {

    const createUser = async (body: any) => {
        return await axiosRequest('users', 'POST', body);
    }

    return (
        <section>
            <section className='container'>
                <section className='left'>
                    <Header/>
                    <Form createUser={createUser}/>
                </section>
                <section className='right'/>
            </section>
        </section>
    );
}
