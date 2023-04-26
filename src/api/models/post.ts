type Post = {
    user: string,
    post_date: string,
    description: string,
    likes: number,
    comments: [{user: string, comment: string}],
    url_imagem: string
}

export default Post;