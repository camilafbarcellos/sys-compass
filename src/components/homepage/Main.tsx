import Body from './Body';
import Header from './Header';

export default function Main({localUser, posts, users}: any) {

    return (
        <section className='homeMain'>
            <Header localUser={localUser}/>
            <Body localUser={localUser} posts={posts} users={users}/>
        </section>
    );
}
