import HomePost from './HomePost';
import Friends from './Friends';

export default function Body({ localUser, posts, users, refreshPosts }: any) {

    return (
        <section className='homeBody'>
            <HomePost localUser={localUser} posts={posts} users={users} refreshPosts={refreshPosts} />

            <section className='homeTopics'>
                <Friends localUser={localUser} users={users} />

                <section className='trendTopic' />

                <section className='trendTopic' />

            </section>
        </section>
    );
}
