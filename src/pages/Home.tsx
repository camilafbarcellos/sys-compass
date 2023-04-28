import '../styles/home.css';
import withAuth from '../util/withAuth';
import Post from '../api/models/post';
import User from '../api/models/user';
import { useEffect, useState } from 'react';
import {
    HomeIcon, HandThumbUpIcon
} from '@heroicons/react/20/solid';
import {
    CameraIcon, PhotoIcon,
    PaperClipIcon, MapPinIcon, FaceSmileIcon,
    ClockIcon, ChatBubbleLeftEllipsisIcon,
    ShareIcon, ChevronUpIcon, ChevronDownIcon
} from '@heroicons/react/24/outline';

function Home() {

    // compass logo
    const CompassLogo = require('../assets/images/compass-uol-logo.png');

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
    const localUser = users.find(i => i.user === sessionStorage.getItem('user'));

    // handler triggered when clicking toggle friends button
    function toggleFriends(event: React.SyntheticEvent<HTMLButtonElement>) {
        const friendsContent = document.getElementById('friendsContent');
        const toggleButtonDownIcon = document.getElementById('toggleButtonDownIcon');
        const toggleButtonUpIcon = document.getElementById('toggleButtonUpIcon');

        if (friendsContent && toggleButtonDownIcon && toggleButtonUpIcon) {
            if (friendsContent.style.display === 'none') {
                // shows element if hidden
                friendsContent.style.display = 'flex';

                // inverts button icon display
                toggleButtonUpIcon.style.display = 'flex';
                toggleButtonDownIcon.style.display = 'none';
            } else {
                // hides element if shown
                friendsContent.style.display = 'none';

                // inverts button icon display
                toggleButtonUpIcon.style.display = 'none';
                toggleButtonDownIcon.style.display = 'flex';
            }
        }
    }

    // social homepage
    return (
        <section>
            {localUser && (
                <section className='homeContainer'>
                    {/* NAV */}
                    <section className='homeNav'>
                        <img src={CompassLogo} alt='Logo' className='navLogo' />
                    </section>

                    {/* MAIN */}
                    <section className='homeMain'>
                        {/* HEADER */}
                        <section className='homeHeader'>
                            <div className='homeFrame'>
                                <HomeIcon className='homeIcon' />
                                <span className='homeTitle'>Home</span>
                            </div>

                            <div className='userFrame'>
                                <span className='userName'>{localUser.name}</span>
                                <img src={localUser.profile_photo} alt='User' className='userIcon' />
                            </div>
                        </section>

                        {/* BODY */}
                        <section className='homeBody'>
                            {/* HOME USER POST */}
                            <section className='homePost'>
                                <section className='writeField'>
                                    <div className='newPost'>
                                        <img src={localUser.profile_photo} alt='User' className='userIconPost' />
                                        <input placeholder='No que você está pensando?' className='newPostInput' />
                                    </div>

                                    <div className='newPostOptions'>
                                        <div className='newPostOptionsItems'>
                                            <CameraIcon className='newPostOptionIcon' />
                                            <PhotoIcon className='newPostOptionIcon' />
                                            <PaperClipIcon className='newPostOptionIcon' />
                                            <MapPinIcon className='newPostOptionIcon' />
                                            <FaceSmileIcon className='newPostOptionIcon' />
                                        </div>

                                        <button className='buttonPost' id='post' type='button' name='post'>Postar</button>
                                    </div>
                                </section>

                                {/* POSTS TIMELINE */}
                                <section className='timeline'>
                                    {posts.length > 0 && (
                                        posts.map((post: {
                                            user: string; post_date: string; description: string;
                                            likes: number; comments: [{ user: string; comment: string }];
                                            url_imagem: string
                                        }) => (
                                            <section className='timelinePost' key={post.user}>
                                                <div className='postHeader'>
                                                    <div className='postUser'>
                                                        <img src={users.find(i => i.user === post.user)?.profile_photo}
                                                            alt='User' className='userIconPost' />
                                                        <div className='postInfo'>
                                                            <div className='postAuthor' key={post.user}>
                                                                {users.find(i => i.user === post.user)?.name}
                                                            </div>

                                                            <div className='dateInfo'>
                                                                <ClockIcon className='dateIcon' />
                                                                <div className='postDate' key={post.post_date}>
                                                                    {post.post_date}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='postDescription' key={post.user}>
                                                        {post.description}
                                                    </div>
                                                    {post.url_imagem && (
                                                        <img src={post.url_imagem} alt='Post' className='postImage' />
                                                    )}
                                                </div>

                                                <div className='postInteraction'>
                                                    <div className='postLike'>
                                                        <HandThumbUpIcon className='likeIcon' />
                                                        <span className='likeText'>Curtiu</span>
                                                        <div className='likesBadge'>
                                                            <span className='likesNumber' key={post.user}>{post.likes}</span>
                                                        </div>
                                                    </div>

                                                    <div className='postComment'>
                                                        <ChatBubbleLeftEllipsisIcon className='commentIcon' />
                                                        <span className='commentText'>Comentários</span>
                                                        <div className='commentsBadge'>
                                                            <span className='commentsNumber' key={post.user}>{post.comments.length}</span>
                                                        </div>
                                                    </div>

                                                    <div className='postShare'>
                                                        <ShareIcon className='shareIcon' />
                                                        <span className='shareText'>Compartilhar</span>
                                                    </div>
                                                </div>

                                                <div className='postComments'>
                                                    <div className='addComment'>
                                                        <img src={localUser.profile_photo} alt='User' className='userIconPost' />
                                                        <input placeholder='O que você está pensando?' className='addCommentInput' />
                                                        <div className='addCommentOptions'>
                                                            <CameraIcon className='addCommentOptionIcon' />
                                                            <PhotoIcon className='addCommentOptionIcon' />
                                                            <PaperClipIcon className='addCommentOptionIcon' />
                                                            <MapPinIcon className='addCommentOptionIcon' />
                                                            <FaceSmileIcon className='addCommentOptionIcon' />
                                                        </div>
                                                    </div>

                                                    <div className='everyComments'>
                                                        <span className='everyCommentsText'>Todos os comentários</span>
                                                    </div>

                                                    {post.comments.length > 0 && (
                                                        post.comments.map((comment: { user: string; comment: string }) => (
                                                            <div className='comment' key={comment.user}>
                                                                <div className='commentLeft'>
                                                                    <img src={users.find(i => i.user === comment.user)?.profile_photo}
                                                                        alt='Post user' className='commentUserIcon' />
                                                                </div>

                                                                <div className='commentFrame'>
                                                                    <span className='commentContent' key={comment.user}>
                                                                        <b>{comment.user}: &nbsp;</b> 
                                                                        {comment.comment}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        ))
                                                    )}
                                                    <hr className='commentDivider' />
                                                </div>
                                            </section>
                                        ))
                                    )}
                                </section>
                            </section>

                            {/* HOME TOPICS */}
                            <section className='homeTopics'>
                                {/* FRIENDS */}
                                <section className='friends'>
                                    <div className='friendsHeader'>
                                        <span className='friendsTitle'>Meus Amigos</span>
                                        <button className='toggleButton' onClick={toggleFriends}>
                                            <ChevronDownIcon id='toggleButtonDownIcon' />
                                            <ChevronUpIcon id='toggleButtonUpIcon' />
                                        </button>
                                    </div>
                                    <div className='friendsContent' id='friendsContent'>
                                        {users.length > 0 && (
                                            users.filter(user => localUser.user !== user.user).map((user: {
                                                name: string; user: string; profile_photo: string
                                            }) => (
                                                <div className='friend' key={user.user}>
                                                    <img src={user.profile_photo} alt='Friend' className='friendUserIcon' />
                                                    <span className='friendName' key={user.user}>
                                                        {user.name}
                                                    </span>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                </section>

                                <section className='trendTopic' />

                                <section className='trendTopic' />

                            </section>
                        </section>
                    </section>
                </section>
            )}
        </section>
    );
}

export default withAuth(Home);