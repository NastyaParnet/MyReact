import "./styles/App.css"
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import { useState } from "react";


function App() {
  const [posts, setPosts] = useState([
    {id: 1, name: 'JavaScript', comments: 'Comments'}
  ])

  function AddNewPost(post){
    setPosts([...posts, {...post, id:posts.length+1}])
  }

  function remove (post) {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm add={AddNewPost}/>
      {posts.length!==0
        ? <PostList remove={remove} title={"Наші новини"} posts={posts}/> 
        : <h1>Посты не найдены</h1>
      }
    </div>
  );
}

export default App;