import { useState } from 'react';

const AllPosts = () => {

    const [posts, setPosts] = useState([])

    if (posts.length === 0) {
        fetch('http://localhost:3001/posts').then(res => res.json()).then(data => {
            setPosts(data);
        })
    };

    return (<div>
        <h1>
            All Blog Posts
        </h1>
        <ul>
            {posts.map((post) => {
                return <ul><a href="/posts/:id">{post.title}</a></ul>
            })}
        </ul>
    </div>)
};

export default AllPosts;