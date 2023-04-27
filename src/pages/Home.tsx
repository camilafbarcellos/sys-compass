import '../styles/home.css';
import { useEffect, useState } from 'react';
import {
    HomeIcon, HandThumbUpIcon
} from '@heroicons/react/20/solid';
import {
    CameraIcon, PhotoIcon,
    PaperClipIcon, MapPinIcon, FaceSmileIcon,
    ClockIcon, ChatBubbleLeftEllipsisIcon,
    ShareIcon
} from '@heroicons/react/24/outline';

export default function Home() {
    // images
    const CompassLogo = require('../assets/images/compass-uol-logo.png');
    const UserImage = require('../assets/images/chillies.png');

    const [posts, setPosts] = useState<any[]>([]);

    const fetchPostData = () => {
        fetch('http://localhost:9000/posts')
            .then(response => {
                return response.json()
            })
            .then(data => {
                setPosts(data)
            })
    }

    useEffect(() => {
        fetchPostData()
    }, []);

    // social homepage
    return (
        <section className='homeContainer'>
            {/* NAV */}
            <section className='homeNav'>
                <img src={CompassLogo} alt='Logo' className='navLogo'/>
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
                        <span className='userName'>Camila</span>
                        <img src={UserImage} alt='User' className='userIcon' />
                    </div>
                </section>

                {/* BODY */}
                <section className='homeBody'>
                    {/* HOME USER POST */}
                    <section className='homePost'>
                        <section className='writeField'>
                            <div className='newPost'>
                                <img src={UserImage} alt='User' className='userIconPost' />
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

                                <button className='buttonPost' id='post' type='submit' name='post'>Postar</button>
                            </div>
                        </section>

                        {/* POSTS TIMELINE */}
                        <section className='timeline'>
                            {posts.length > 0 && (
                                posts.map((post: {
                                    user: string; post_date: string; description: string;
                                    likes: number; comments: any[], url_imagem: string
                                }) => (
                                    <section className='timelinePost' key={post.user}>
                                        <div className='postHeader'>
                                            <div className='postUser'>
                                                <img src={UserImage} alt='User' className='userIconPost' />
                                                <div className='postInfo'>
                                                    <div className='postAuthor' key={post.user}>
                                                        {post.user}
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
                                                <img src={post.url_imagem} alt='Example' className='postImage' />
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
                                                <img src={UserImage} alt='User' className='userIconPost' />
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
                                                            <img src={UserImage} alt='User' className='commentUserIcon' />
                                                        </div>

                                                        <div className='commentFrame'>
                                                            <span className='commentContent' key={comment.user}>
                                                                <b>{comment.user}: &nbsp;</b> {comment.comment}
                                                            </span>
                                                        </div>

                                                        <hr className='commentDivider' />
                                                    </div>
                                                ))
                                            )}
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
                                {/* TOGGLE */}
                            </div>
                            <div className='friendsContent'>
                                {/* FAZER FETCH DA LISTA DE AMIGOS */}
                            </div>
                        </section>

                    </section>
                </section>
            </section>
        </section>
    );
}