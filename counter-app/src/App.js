import React, { useState } from "react";
import './styles/App.css';
//import ClassCounter from "./components/ClassCounter";
//import Counter from "./components/Counter";
import PostList from "./components/PostList";

function App() {

  const [posts, setPosts] = useState([
    { id: '1', title: 'JavaScript1', body: 'Description' },
    { id: '2', title: 'JavaScript2', body: 'Description' },
    { id: '3', title: 'JavaScript3', body: 'Description' }
  ])

  const [posts2, setPosts2] = useState([
    { id: '1', title: 'React1', body: 'Description' },
    { id: '2', title: 'React2', body: 'Description' },
    { id: '3', title: 'React3', body: 'Description' }
  ])
// Map перетвор. масив об'єктів в масив елементів
    return (
      <div className="App">
        <PostList posts={posts} title={'Posts List - JS'}/>
        <PostList posts={posts2} title={'Posts List - React'}/>
      </div>
  );
}

export default App;
 