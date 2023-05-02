import { HandThumbUpIcon } from '@heroicons/react/20/solid';
import {
    CameraIcon, PhotoIcon, ShareIcon,
    PaperClipIcon, MapPinIcon, FaceSmileIcon,
    ClockIcon, ChatBubbleLeftEllipsisIcon,
} from '@heroicons/react/24/outline';
import User from '../../api/models/user';

export default function Timeline({ localUser, posts, users }: any) {

    function likePost() {
        const likeIcon = document.getElementById('likeIcon');
        const likeText = document.getElementById('likeText');
        const likesBadge = document.getElementById('likesBadge');
        const likesNumber = document.getElementById('likesNumber');

        if (likeIcon && likeText && likesBadge && likesNumber) {
            if (likeText.textContent === 'Curtir') {
                likeIcon.style.color = '#2D86FC';
                likeText.style.color = '#2D86FC';
                likeText.textContent = 'Curtiu';
                likesBadge.style.background = '#2D86FC';
                let oldLikes = parseInt(likesNumber.textContent!);
                likesNumber.textContent = (++oldLikes).toString();
            } else if(likeText.textContent === 'Curtiu') {
                likeIcon.style.color = '#A1A3A7';
                likeText.style.color = '#A1A3A7';
                likeText.textContent = 'Curtir';
                likesBadge.style.background = '#A1A3A7';
                let oldLikes = parseInt(likesNumber.textContent!);
                likesNumber.textContent = (--oldLikes).toString();
            }
        }
    }

    return (
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
                                <img src={users.find((i: User) => i.user === post.user)?.profile_photo}
                                    alt='User' className='userIconPost' />
                                <div className='postInfo'>
                                    <div className='postAuthor' key={post.user}>
                                        {users.find((i: User) => i.user === post.user)?.name}
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
                            <button className='postLike' type='button' onClick={likePost}>
                                <HandThumbUpIcon className='likeIcon' id='likeIcon' />
                                <span className='likeText' id='likeText'>Curtir</span>
                                <div className='likesBadge' id='likesBadge'>
                                    <span className='likesNumber' id='likesNumber' key={post.user}>{post.likes}</span>
                                </div>
                            </button>

                            <button className='postComment' type='button'>
                                <ChatBubbleLeftEllipsisIcon className='commentIcon' />
                                <span className='commentText'>Comentários</span>
                                <div className='commentsBadge'>
                                    <span className='commentsNumber' key={post.user}>{post.comments.length}</span>
                                </div>
                            </button>

                            <button className='postShare' type='button'>
                                <ShareIcon className='shareIcon' />
                                <span className='shareText'>Compartilhar</span>
                            </button>
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
                                            <img src={users.find((i: User) => i.user === comment.user)?.profile_photo}
                                                alt='Post user' className='commentUserIcon' />
                                        </div>

                                        <div className='commentFrame'>
                                            <span className='commentContent' key={comment.user}>
                                                <b>{users.find((i: User) => i.user === comment.user)?.name}: &nbsp;</b>
                                                {comment.comment}
                                            </span>
                                        </div>
                                    </div>
                                ))
                            )}

                            <hr className='commentDivider' />

                            <div className='seeAllComments'>
                                <p className='seeAllCommentsText'>Ver todos os comentários</p>
                            </div>
                        </div>
                    </section>
                ))
            )}
        </section>
    );
}
