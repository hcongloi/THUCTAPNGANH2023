import React from 'react';

interface Post {
  id: number;
  title: string;
  content: string;
}

interface PostListProps {
  posts: Post[];
  onDeletePost: (id: number) => void;
}

const PostList: React.FC<PostListProps> = ({ posts, onDeletePost }) => {
  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <button onClick={() => onDeletePost(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;