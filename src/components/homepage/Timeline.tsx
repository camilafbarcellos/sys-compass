import { HandThumbUpIcon } from '@heroicons/react/20/solid';
import {
    CameraIcon, PhotoIcon, ShareIcon,
    PaperClipIcon, MapPinIcon, FaceSmileIcon,
    ClockIcon, ChatBubbleLeftEllipsisIcon,
} from '@heroicons/react/24/outline';
import User from '../../api/models/user';

export default function Timeline({ localUser, posts, users }: any) {

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
