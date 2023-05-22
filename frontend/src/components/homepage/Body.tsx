import HomePost from './HomePost';
import Friends from './Friends';

export default function Body({ localUser, posts, users }: any, ) {

    return (
        <section className='homeBody'>
            <HomePost localUser={localUser} posts={posts} users={users} />

            <section className='homeTopics'>
                <Friends localUser={localUser} users={users} />

                <section className='trendTopic' />

                <section className='trendTopic' />

            </section>
        </section>
    );
}
