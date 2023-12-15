import React, { useState } from 'react';

interface AddPostFormProps {
  onAddPost: (title: string, content: string) => void;
}

const AddPostForm: React.FC<AddPostFormProps> = ({ onAddPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && content) {
      onAddPost(title, content);
      setTitle('');
      setContent('');
    }
  };

  return (
    <div>
      <h2>Add Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Content:</label>
          <textarea value={content} onChange={e => setContent(e.target.value)} />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddPostForm;