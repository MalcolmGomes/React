import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import './index.css'

const Main = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get(`https://www.reddit.com/r/reactjs.json`)
      .then(res => {
        const newPosts = res.data.data.children.map(obj => obj.data);  
        setPosts(newPosts);
      });
  }, []);

  return (
    <div>
      <h2>/r/reactjs</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );  
}

const Render = () => {
  return <div>
      <Main />
  </div>
}

// Roomss component is exported with a defined path of /api
export const Reddit = () => {
  return <div>
      <Switch>
        <Route path="/api" component={Render} exact />
      </Switch> 
  </div>
}