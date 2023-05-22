import '../styles/home.css';
import withAuth from '../util/withAuth';
import Post from '../types/post';
import User from '../types/user';
import Nav from '../components/homepage/Nav';
import Main from '../components/homepage/Main';
import { useEffect, useState } from 'react';

function Home() {

    // fetch json data
    const [posts, setPosts] = useState<Post[]>([]);
    const [users, setUsers] = useState<User[]>([]);

    const fetchData = () => {
        // fetch users
        fetch('http://localhost:9000/users')
            .then(response => {
                return response.json()
            })
            .then(data => {
                setUsers(data)
            })

        // fetch posts
        fetch('http://localhost:9000/posts')
            .then(response => {
                return response.json()
            })
            .then(data => {
                setPosts(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, []);

    // user coming from localstorage
    const localUser = users.find((i: User) => i.user === sessionStorage.getItem('user'));

    // social homepage
    return (
        <section>
            {localUser && (
                <section className='homeContainer'>
                    <Nav/>

                    <Main localUser={localUser} posts={posts} users={users}/>
                </section>
            )}
        </section>
    );
}

export default withAuth(Home);