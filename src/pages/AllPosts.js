import { useState } from 'react';
import { Link } from 'react-router-dom'

const AllPosts = () => {

    const [posts, setPosts] = useState([]);

    if (posts.length === 0) {
        fetch('http://localhost:3001/posts').then(res => res.json()).then(data => {
            setPosts(data);
        });
    };

    return (<div>
        <h1>
            All Blog Posts
        </h1>
        {posts.map((post) => {
            return (
                <div key={post.id}>
                    <Link to={`/posts/${post.id}`}>{post.title}</Link>
                </div>
            );
        })};
    </div>);
};

export default AllPosts;