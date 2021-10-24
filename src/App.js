import "./styles/App.css"
import PostForm from "./components/PostForm"
import PostList from "./components/PostList"
import { useEffect, useState } from "react"
import { usePosts } from "./hooks/usePosts"
import MyModal from "./components/UI/MyModal/MyModal"
import PostFilter from "./components/PostFilter"
import PostService from "./API/PostService"
import Loader from "./components/UI/Loader/Loader"


function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const searchAndSortedPosts = usePosts(posts, filter.sort, filter.query)

  useEffect(()=>{
    fetchPosts()
  }, [])

  function AddNewPost(post){
    setPosts([...posts, {...post, id:posts.length+1}])
    setModal(false)
  }

  async function fetchPosts(){
    setIsLoading(true)
    const postService = await PostService.getAll()
    setPosts(postService)
    setIsLoading(false)
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
      {isLoading
        ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader/></div>
        : <PostList remove={remove} title={"Наші новини"} posts={searchAndSortedPosts}/> 
      }
    </div>
  );
}

export default App;