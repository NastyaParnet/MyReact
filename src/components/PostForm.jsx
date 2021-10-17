import React, { useState } from "react";
//import "../styles/App.css"

const PostForm = ({add}) => {
    const [post, setPost] = useState({
        name: '', comments: '' 
    })

    function create(e){
        e.preventDefault()
        if (post.name!=='' && post.comments!==''){
            add({...post})
            setPost({name: '', comments: ''})
        }
    }

    return (
        <div>
            <input 
                value={post.name}
                type="text" 
                placeholder="Введіть назву поста" 
                onChange={e => setPost({...post, name: e.target.value})}
            />
            <input 
                value={post.comments}
                type="text" 
                placeholder="Введіть інформацію про пост" 
                onChange = {e => setPost({...post, comments: e.target.value})}
            />
            <button onClick={create}>Передати дані</button>
        </div>
    )
}

export default PostForm