import '../styles/home.css';
import withAuth from '../util/withAuth';
import Post from '../types/post';
import User from '../types/user';
import Nav from '../components/homepage/Nav';
import Main from '../components/homepage/Main';
import { useEffect, useState } from 'react';
import { axiosRequest } from '../util/axiosRequest';

function Home() {

    const [posts, setPosts] = useState<Post[]>([]);
    const [users, setUsers] = useState<User[]>([]);
    const [localUser, setLocalUser] = useState<User>();

    const fetchAllData = async () => {
        const posts = await axiosRequest('posts', 'GET') as any;
        setPosts((posts.data).reverse());
        const users = await axiosRequest('users', 'GET') as any;
        setUsers(users.data);
    }

    async function fetchLocalUser() {
        const localUserId = sessionStorage.getItem('userId');
        const endpoint = 'users/' + localUserId;
        const localUser = await axiosRequest(endpoint, 'GET') as any;
        setLocalUser(localUser.data);
    }

    useEffect(() => {
        fetchAllData();
        fetchLocalUser();
    }, []);

    async function refreshPosts() {
        const posts = await axiosRequest('posts', 'GET') as any;
        setPosts((posts.data).reverse());
    }

    return (
        <section>
            {localUser && (
                <section className='homeContainer'>
                    <Nav />

                    <Main localUser={localUser} posts={posts} users={users} refreshPosts={refreshPosts} />
                </section>
            )}
        </section>
    );
}

export default withAuth(Home);