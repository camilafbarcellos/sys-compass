import {
    CameraIcon, PhotoIcon,
    PaperClipIcon, MapPinIcon, FaceSmileIcon
} from '@heroicons/react/24/outline';
import Timeline from './Timeline';

export default function HomePost({ localUser, posts, users }: any) {

    return (
        <section className='homePost'>
            <section className='writeField'>
                <div className='newPost'>
                    <img src={localUser.profile_photo} alt='User' className='userIconPost' />
                    <input placeholder='No que você está pensando?' className='newPostInput' />
                </div>

                <div className='newPostOptions'>
                    <div className='newPostOptionsItems'>
                        <CameraIcon className='newPostOptionIcon' />
                        <PhotoIcon className='newPostOptionIcon' />
                        <PaperClipIcon className='newPostOptionIcon' />
                        <MapPinIcon className='newPostOptionIcon' />
                        <FaceSmileIcon className='newPostOptionIcon' />
                    </div>

                    <button className='buttonPost' id='post' type='button' name='post'>Postar</button>
                </div>
            </section>

            <Timeline localUser={localUser} posts={posts} users={users} />
        </section>
    );
}
