import Body from './Body';
import Friends from './Friends';
import Header from './Header';

export default function Main({ localUser, posts, users, refreshPosts }: any) {

    return (
        <section className='homeMain'>
            <Header localUser={localUser} />

            <section className='homeBodyContent'>
                <Body localUser={localUser} posts={posts} users={users} refreshPosts={refreshPosts} />

                <section className='homeTopics'>
                    <Friends localUser={localUser} users={users} />

                    <section className='trendTopic' />

                    <section className='trendTopic' />
                </section>
            </section>
        </section>
    );
}
