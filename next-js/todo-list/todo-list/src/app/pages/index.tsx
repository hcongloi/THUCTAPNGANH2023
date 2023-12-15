import React, { useState } from 'react';
import PostList from '../components/PostList';
import AddPostForm from '../components/AddPostForm';

interface Post {
  id: number;
  title: string;
  content: string;
}

const HomePage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const handleAddPost = (title: string, content: string) => {
    const newPost: Post = {
      id: Date.now(),
      title,
      content
    };
    setPosts(prevPosts => [...prevPosts, newPost]);
  };

  const handleDeletePost = (id: number) => {
    setPosts(prevPosts => prevPosts.filter(post => post.id !== id));
  };

  return (
    <div>
      <h1>My Blog</h1>
      <PostList posts={posts} onDeletePost={handleDeletePost} />
      <AddPostForm onAddPost={handleAddPost} />
    </div>
  );
};

export default HomePage;