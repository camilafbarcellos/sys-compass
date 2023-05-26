import {
    CameraIcon, PhotoIcon,
    PaperClipIcon, MapPinIcon, FaceSmileIcon
} from '@heroicons/react/24/outline';
import Timeline from './Timeline';
import { axiosRequest } from '../../util/axiosRequest';

export default function HomePost({ localUser, posts, users, refreshPosts }: any) {

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = {
            user: (localUser.user),
            description: (document.getElementById('newPostDescription') as HTMLInputElement).value
        }

        await axiosRequest('posts', 'POST', formData);
        (document.getElementById('newPostDescription') as HTMLInputElement).value = '';
        refreshPosts();
    }

    return (
        <section className='homePost'>
            <section className='writeField'>
                <form className='newPostForm' onSubmit={handleSubmit}>
                    <div className='newPost'>
                        <img src={localUser.profile_photo} alt='User' className='userIconPost' />
                        <input placeholder='No que você está pensando?' autoComplete='off'
                            className='newPostInput' id='newPostDescription' name='description' />
                    </div>

                    <div className='newPostOptions'>
                        <div className='newPostOptionsItems'>
                            <CameraIcon className='newPostOptionIcon' />
                            <PhotoIcon className='newPostOptionIcon' />
                            <PaperClipIcon className='newPostOptionIcon' />
                            <MapPinIcon className='newPostOptionIcon' />
                            <FaceSmileIcon className='newPostOptionIcon' />
                        </div>

                        <button className='buttonPost' id='post' type='submit' name='post' >
                            Postar
                        </button>
                    </div>
                </form>
            </section>

            <Timeline localUser={localUser} posts={posts} users={users} refreshPosts={refreshPosts} />
        </section>
    );
}
