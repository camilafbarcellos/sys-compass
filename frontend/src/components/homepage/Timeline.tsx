import { HandThumbUpIcon, PencilSquareIcon } from '@heroicons/react/20/solid';
import {
    CameraIcon, PhotoIcon, ShareIcon,
    PaperClipIcon, MapPinIcon, FaceSmileIcon,
    ClockIcon, ChatBubbleLeftEllipsisIcon,
} from '@heroicons/react/24/outline';
import User from '../../types/user';
import Post from '../../types/post';
import Comment from '../../types/comment';
import { axiosRequest } from '../../util/axiosRequest';

export default function Timeline({ localUser, posts, users, refreshPosts }: any) {

    async function handleLikeButton(event: React.MouseEvent<HTMLButtonElement>, post: Post) {
        let formData = {};

        const likeButton: HTMLButtonElement = event.currentTarget;        
        likeButton.classList.toggle('clicked');

        const likeText = likeButton.getElementsByClassName('likeText');
        if (likeText) {
            if (likeButton.classList.contains('clicked')) {
                likeText[0].textContent = 'Curtiu';

                formData = {
                    likes: post.likes + 1
                };

            } else {
                likeText[0].textContent = 'Curtir';

                formData = {
                    likes: post.likes - 1
                };
            }
        }

        const endpoint = 'posts/' + post.id;
        await axiosRequest(endpoint, 'PUT', formData);
        refreshPosts();
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>, postId: string) {
        event.preventDefault();

        const formData = {
            user: localUser.user,
            comment: (document.getElementById('commentDescription') as HTMLInputElement).value
        };

        const endpoint = 'posts/' + postId + '/comments';
        await axiosRequest(endpoint, 'POST', formData);
        (document.getElementById('commentDescription') as HTMLInputElement).value = '';
        refreshPosts();
    }

    return (
        <section className='timeline'>
            {posts.length > 0 && (
                posts.map((post: Post) => (
                    <section className='timelinePost' key={post.id}>
                        <div className='postHeader'>
                            <div className='postUser'>
                                <img src={users.find((i: User) => i.user === post.user)?.profile_photo}
                                    alt='User' className='userIconPost' />
                                <div className='postInfo'>
                                    <div className='postAuthor' key={post.id}>
                                        {users.find((i: User) => i.user === post.user)?.name}
                                    </div>

                                    <div className='dateInfo'>
                                        <ClockIcon className='dateIcon' />
                                        <div className='postDate' key={post.id}>
                                            {post.post_date}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='postDescription' key={post.id}>
                                {post.description}
                            </div>
                            {post.url_image && (
                                <img src={post.url_image} alt='Post' className='postImage' />
                            )}
                        </div>

                        <div className='postInteraction'>
                            <button className='postLike' type='button' onClick={(event) => handleLikeButton(event, post)}>
                                <HandThumbUpIcon className='likeIcon' id='likeIcon' />
                                <span className='likeText' id='likeText'>Curtir</span>
                                <div className='likesBadge' id='likesBadge'>
                                    <span className='likesNumber' id='likesNumber' key={post.id}>{post.likes}</span>
                                </div>
                            </button>

                            <button className='postComment' type='button'>
                                <ChatBubbleLeftEllipsisIcon className='commentIcon' />
                                <span className='commentText'>Comentários</span>
                                <div className='commentsBadge'>
                                    <span className='commentsNumber' key={post.id}>{post.comments?.length ?? 0}</span>
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
                                <form className='addCommentForm' onSubmit={(event) => handleSubmit(event, post.id)} >
                                    <input placeholder='O que você está pensando?'
                                        className='addCommentInput' name='description'
                                        id='commentDescription' autoComplete='off' />
                                    <button id='comment' type='submit'
                                        name='comment' data-post={JSON.stringify(post.id)}>
                                        <PencilSquareIcon className='addCommentButton' />
                                    </button>
                                </form>
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

                            {post.comments && (
                                post.comments.map((comment: Comment) => (
                                    <div className='comment' key={comment.id}>
                                        <div className='commentLeft'>
                                            <img src={users.find((i: User) => i.user === comment.user)?.profile_photo}
                                                alt='Post user' className='commentUserIcon' />
                                        </div>

                                        <div className='commentFrame'>
                                            <span className='commentContent' key={comment.id}>
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
