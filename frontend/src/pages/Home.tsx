import '../styles/home.css';
import withAuth from '../util/withAuth';
import Post from '../types/post';
import User from '../types/user';
import Nav from '../components/homepage/Nav';
import Main from '../components/homepage/Main';
import { useEffect, useState } from 'react';
import { fetchAPI } from '../util/fetchAPI';

function Home() {

    const [posts, setPosts] = useState<Post[]>([]);
    const [users, setUsers] = useState<User[]>([]);

    const fetchAllData = async () => {
        let fetch = await fetchAPI('posts', 'GET');
        setPosts((fetch.data).reverse());
        fetch = await fetchAPI('users', 'GET');
        setUsers(fetch.data);
    }

    useEffect(() => {
        fetchAllData();
    }, []);

    const localUser = users.find((i: User) => i.user === sessionStorage.getItem('user'));

    async function refreshPosts () {
        let fetch = await fetchAPI('posts', 'GET');
        setPosts((fetch.data).reverse());
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