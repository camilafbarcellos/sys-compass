import Comment from './comment';

type Post = {
    user: string,
    post_date: string,
    description: string,
    likes: number,
    comments?: Comment[],
    url_image?: string
}

export default Post;