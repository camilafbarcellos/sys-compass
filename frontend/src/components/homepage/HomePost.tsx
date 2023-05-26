import { useEffect, useState } from 'react';
import {
    CameraIcon, PhotoIcon,
    PaperClipIcon, MapPinIcon, FaceSmileIcon
} from '@heroicons/react/24/outline';
import Timeline from './Timeline';
import axios from 'axios';

export default function HomePost({ localUser, posts, users }: any) {

    function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = {
            user: (localUser.user),
            description: (document.getElementById('newPostDescription') as HTMLInputElement).value
        }

        axios({
            method: 'POST',
            url: 'http://localhost:9000/posts',
            data: formData
        })
            .then(response => {
                console.log(response);

            })
            .catch(error => {
                console.log(error);
            });

        (document.getElementById('newPostDescription') as HTMLInputElement).value = '';
    }

    return (
        <section className='homePost'>
            <section className='writeField'>
                <form className='newPostForm' onSubmit={handleSubmit}>
                    <div className='newPost'>
                        <img src={localUser.profile_photo} alt='User' className='userIconPost' />
                        <input placeholder='No que você está pensando?'
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

            <Timeline localUser={localUser} posts={posts} users={users} />
        </section>
    );
}
