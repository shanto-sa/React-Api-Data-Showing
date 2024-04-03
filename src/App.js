import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
    <p>Total Posts: {posts.length}</p>
    <ul>
      {posts.map(post => (
        
        <li key={post.id}>ID: {post.id} <br></br>Title: {post.title}<br></br>Description: {post.body}<br></br><br></br></li>
      ))}
    </ul>
    </div>
  );
}

export default App;