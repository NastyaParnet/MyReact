import React, { useState } from "react";
//import "../styles/App.css"

const PostForm = ({add}) => {
    const [post, setPost] = useState({
        name: '', body: '' 
    })

    function create(e){
        e.preventDefault()
        if (post.name!=='' && post.body!==''){
            add({...post})
            setPost({name: '', body: ''})
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
                value={post.body}
                type="text" 
                placeholder="Введіть інформацію про пост" 
                onChange = {e => setPost({...post, body: e.target.value})}
            />
            <button onClick={create}>Передати дані</button>
        </div>
    )
}

export default PostForm