import { useState } from 'react';
import { useParams } from "react-router-dom";


const Post = () => {
    let params = useParams();

    const [post, setPost] = useState({ title: null })

    if (post.title === null) {
        fetch(`http://localhost:3001/posts/${params.postId}`)
            .then(res => res.json())
            .then(data => {
                setPost(data);
            });
    };


    return (<div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
    </div>
    );
};

export default Post;