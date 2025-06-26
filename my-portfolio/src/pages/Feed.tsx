import { useEffect, useState } from 'react';

interface Post {
  _id: string;
  title: string;
  body: string;
}

const Feed = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error('Failed to load posts', err));
  }, []);

  return (
    <div className="feed-layout">
      <div className="feed-left">
        <h1 className="sticky-title">Feed</h1>
        <p className="profile-description">
          Hey there! I&#39;m Carlos, a developer who loves building web experiences.
        </p>
      </div>
      <div className="feed-right">
        {posts.map((post) => (
          <div key={post._id} className="feed-block">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
