import React, { useEffect, useState } from 'react';

export default function Home() {
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
        <section>
            <section className='container'>
                <section className='left'>
                </section>
                <section className='center'>
                    <h1>Parabéns por logar!</h1>
                    {posts.length > 0 && (
                        posts.map((post: { user: string; post_date: string; description: string; likes: number; comments: any[] }) => (
                            <div className='post' key={post.user}>
                                <p key={post.user}>{post.user}</p>
                                <p key={post.user}>{post.post_date}</p>
                                <p key={post.user}>{post.description}</p>
                                <p key={post.user}>{post.likes}</p>
                                {post.comments.length > 0 && (
                                    post.comments.map((comment: { user: string; comment: string }) => (
                                        <div className='post-comments' key={comment.user}>
                                            <p key={comment.user}>{comment.user}</p>
                                            <p key={comment.user}>{comment.comment}</p>
                                        </div>
                                    ))
                                )}
                                <br />
                            </div>
                        ))
                    )}
                </section>
                <section className='right'>
                </section>
            </section>
        </section>
    );
}