const posts = [
  {
    title: 'First Update',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
  },
  {
    title: 'Another Update',
    body:
      'Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
  },
  {
    title: 'Final Update',
    body:
      'Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.',
  },
];

const Feed = () => (
  <div className="feed-layout">
    <div className="feed-left">
      <h1>Feed</h1>
      <p className="profile-description">
        Hey there! I&#39;m Carlos, a developer who loves building web experiences.
      </p>
    </div>
    <div className="feed-right">
      {posts.map((post) => (
        <div key={post.title} className="feed-block">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Feed;
