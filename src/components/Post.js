import React from 'react';

const Post = ({ username, content }) => {
  return (
    <div className="post">
      <h3>{username}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Post;