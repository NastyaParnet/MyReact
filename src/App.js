import "./styles/App.css"
import PostForm from "./components/PostForm"
import PostList from "./components/PostList"
import { useState } from "react"
import { usePosts } from "./hooks/usePosts"
import MyModal from "./components/UI/MyModal/MyModal"
import PostFilter from "./components/PostFilter"


function App() {
  const [posts, setPosts] = useState([
    {id: 1, name: 'JavaScript', comments: 'Comments'},
    {id: 2, name: 'React', comments: 'It is interesting'},
    {id: 3, name: 'Angular', comments: 'Not so bad'}
  ])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const searchAndSortedPosts = usePosts(posts, filter.sort, filter.query)

  function AddNewPost(post){
    setPosts([...posts, {...post, id:posts.length+1}])
    setModal(false)
  }

  function remove (post) {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <button style={{marginTop: 30}} onClick={()=> setModal(true)}>
        Додати пост
      </button>
      <MyModal modal={modal} setModal={setModal}> 
        <PostForm add={AddNewPost}/>
      </MyModal>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <PostList remove={remove} title={"Наші новини"} posts={searchAndSortedPosts}/> 
    </div>
  );
}

export default App;