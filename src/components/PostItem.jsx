import React from "react";
import { useHistory } from "react-router";
//import "../styles/App.css"

const PostItem = (props) => {
    const history = useHistory()
    return (
        <div className="post">
            <div>
                <h1>{props.value.id} - {props.value.name}</h1>
                <p>{props.value.body}</p>
            </div>
            <div className='post__btns'>
                <button onClick={() => history.push(`/posts/${props.value.id}`)}>
                    Відкрити
                </button>
                <button onClick={() => props.remove(props.value)}>
                    Удалить
                </button>
            </div>
        </div>
    )
}

export default PostItem