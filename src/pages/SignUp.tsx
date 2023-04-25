import '../styles/loginSignup.css'
import SignUpHeader from '../components/SignUpHeader';
import SignUpForm from '../components/SignUpForm';

export default function SignUp() {
    // signup page split in half for the form and image
    return (
        <section>
            <section className='container'>
                <section className='left'>
                    <SignUpHeader/>
                    <SignUpForm/>
                </section>
                <section className='right'/>
            </section>
        </section>
    );
}
