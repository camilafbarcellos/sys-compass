import { useEffect, useState } from 'react';
import {
    CameraIcon, PhotoIcon,
    PaperClipIcon, MapPinIcon, FaceSmileIcon
} from '@heroicons/react/24/outline';
import Post from '../../types/post';
import Timeline from './Timeline';

export default function HomePost({ localUser, posts, users }: any) {

    const [timelinePosts, setTimelinePosts] = useState<Post[]>([]);

    function addNewPost() {
        const postDescription = (document.getElementById('newPostDescription') as HTMLInputElement).value;

        setTimelinePosts([
            {
                user: localUser.user,
                post_date: new Date().toJSON().toString(),
                description: postDescription,
                likes: 0,
                comments: []

            },
            ...timelinePosts
        ]);

        (document.getElementById('newPostDescription') as HTMLInputElement).value = '';
    }

    useEffect(() => {
        setTimelinePosts(posts);
    }, [posts]);

    return (
        <section className='homePost'>
            <section className='writeField'>
                <div className='newPost'>
                    <img src={localUser.profile_photo} alt='User' className='userIconPost' />
                    <input placeholder='No que você está pensando?' className='newPostInput' id='newPostDescription' />
                </div>

                <div className='newPostOptions'>
                    <div className='newPostOptionsItems'>
                        <CameraIcon className='newPostOptionIcon' />
                        <PhotoIcon className='newPostOptionIcon' />
                        <PaperClipIcon className='newPostOptionIcon' />
                        <MapPinIcon className='newPostOptionIcon' />
                        <FaceSmileIcon className='newPostOptionIcon' />
                    </div>

                    <button className='buttonPost' id='post' type='button' name='post' onClick={addNewPost}>
                        Postar
                    </button>
                </div>
            </section>

            <Timeline localUser={localUser} posts={timelinePosts} users={users} />
        </section>
    );
}
