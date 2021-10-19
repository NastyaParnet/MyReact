import "./styles/App.css"
import PostForm from "./components/PostForm"
import PostList from "./components/PostList"
import MyInput from './components/UI/input/MyInput'
import MySelect from './components/UI/select/MySelect'
import { useMemo, useState } from "react"


function App() {
  const [posts, setPosts] = useState([
    {id: 1, name: 'JavaScript', comments: 'Comments'},
    {id: 2, name: 'React', comments: 'It is interesting'},
    {id: 3, name: 'Angular', comments: 'Not so bad'}
  ])
  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const sortedPosts = useMemo (() => {
    if(selectedSort) {
      return [...posts].sort((a,b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts;
  }, [selectedSort, posts])

  const SearchAndSortedPosts = useMemo (() => {
    return sortedPosts.filter(post => post.name.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [searchQuery, sortedPosts])

  function AddNewPost(post){
    setPosts([...posts, {...post, id:posts.length+1}])
  }

  function remove (post) {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm add={AddNewPost}/>
      <MyInput 
        value={searchQuery}
        onChange={setSearchQuery}
      />
      <MySelect 
        value={selectedSort}
        onChange={setSelectedSort}
        defaultValue='Сортування'
        options = {[
          {value:"name", name: 'По назві'},
          {value:"comments", name: 'По комментарям'}
        ]}
      />
      {SearchAndSortedPosts!==0
        ? <PostList remove={remove} title={"Наші новини"} posts={SearchAndSortedPosts}/> 
        : <h1>Посты не найдены</h1>
      }
    </div>
  );
}

export default App;