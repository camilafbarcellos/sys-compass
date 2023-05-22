import { HomeIcon } from '@heroicons/react/20/solid';

export default function Header({localUser}: any) {

    return (
        <section className='homeHeader'>
                <div className='homeFrame'>
                    <HomeIcon className='homeIcon' />
                    <span className='homeTitle'>Home</span>
                </div>

                <div className='userFrame'>
                    <span className='userName'>{localUser.name}</span>
                    <img src={localUser.profile_photo} alt='User' className='userIcon' />
                </div>
            </section>
    );
}
