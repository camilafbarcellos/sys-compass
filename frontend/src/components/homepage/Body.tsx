import HomePost from './HomePost';

export default function Body({ localUser, posts, users, refreshPosts }: any) {

    return (
        <section className='homeBody'>
            <HomePost localUser={localUser} posts={posts} users={users} refreshPosts={refreshPosts} />
        </section>
    );
}
