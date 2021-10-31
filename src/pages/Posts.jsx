import "../styles/App.css"
import PostForm from "../components/PostForm"
import PostList from "../components/PostList"
import MyModal from "../components/UI/MyModal/MyModal"
import MySelect from '../components/UI/select/MySelect'
import PostFilter from "../components/PostFilter"
import PostService from "../API/PostService"
import Loader from "../components/UI/Loader/Loader"
import Pagination from "../components/UI/pagination/Pagination"
import { useEffect, useState, useRef } from "react"
import { usePosts } from "../hooks/usePosts"
import { useFetching } from "../hooks/UseFetching"
import { getPageCount } from "../utils/pages"
import { useObserver } from "../hooks/useObserver"

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(50)
    const [page, setPage] = useState(1)
    const searchAndSortedPosts = usePosts(posts, filter.sort, filter.query)
    const lastElement = useRef()
    
    const [fetchPosts, isPostsLoading, postError] = useFetching (async (limit, page)=>{
        const postService = await PostService.getAll(limit, page)
        setPosts([...posts, ...postService.data])
        const totalCount = postService.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })

    useObserver(lastElement, page<totalPages, isPostsLoading, ()=>{
        setPage(page+1)
        console.log(page)
    })

    useEffect(()=>{
        fetchPosts(limit, page)
    }, [page, limit])

    function AddNewPost(post){
        setPosts([...posts, {...post, id:posts.length+1}])
        setModal(false)
    }

    function remove (post) {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    function changePage(page){
        setPage(page)
        fetchPosts(limit, page)
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
            <MySelect 
                value={limit} 
                onChange={value=>setLimit(value)}
                defaultValue="К-ть завантажень"
                options={[
                    {name: '20', value: 20},
                    {name: '50', value: 50},
                    {name: '100', value: 100},
                    {name: 'Всі', value: 500}
                ]}
            />
            {postError &&
                <h1>Виникла помилка</h1>
            }
            <PostList remove={remove} title={"Наші новини"} posts={searchAndSortedPosts}/> 
            {isPostsLoading && 
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader/></div>
            }
            <div ref={lastElement}/>
            <Pagination
                totalPages={totalPages}
                page={page}
                changePage={changePage}
            />
        </div>
    );
}

export default Posts