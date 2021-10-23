import "./styles/App.css"
import PostForm from "./components/PostForm"
import PostList from "./components/PostList"
import { useEffect, useState } from "react"
import { usePosts } from "./hooks/usePosts"
import MyModal from "./components/UI/MyModal/MyModal"
import PostFilter from "./components/PostFilter"
import PostService from "./API/PostService"


function App() {
  const [posts, setPosts] = useState([
    {id: 1, name: 'JavaScript', body: 'Comments'},
    {id: 2, name: 'React', body: 'It is interesting'},
    {id: 3, name: 'Angular', body: 'Not so bad'}
  ])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const searchAndSortedPosts = usePosts(posts, filter.sort, filter.query)

  useEffect(()=>{
    fetchPosts()
  }, [])

  function AddNewPost(post){
    setPosts([...posts, {...post, id:posts.length+1}])
    setModal(false)
  }

  async function fetchPosts(){
    const postService = await PostService.getAll()
    setPosts(postService)
    console.log(posts)
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