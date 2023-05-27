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

    const fetchAllData = async () => {
        const posts = await axiosRequest('posts', 'GET');
        setPosts((posts.data).reverse());
        const users = await axiosRequest('users', 'GET');
        setUsers(users.data);
    }

    useEffect(() => {
        fetchAllData();
    }, []);

    const localUser = users.find((i: User) => i.user === sessionStorage.getItem('user'));

    async function refreshPosts () {
        const posts = await axiosRequest('posts', 'GET');
        setPosts((posts.data).reverse());
    }

    return (
        <section>
            {localUser && (
                <section className='homeContainer'>
                    <Nav/>

                    <Main localUser={localUser} posts={posts} users={users} refreshPosts={refreshPosts}/>
                </section>
            )}
        </section>
    );
}

export default withAuth(Home);