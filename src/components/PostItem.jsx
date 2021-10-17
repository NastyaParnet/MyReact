import React from "react";
//import "../styles/App.css"

const PostItem = (props) => {
    return (
        <div className="post">
            <div>
                <h1>{props.value.id} - {props.value.name}</h1>
                <p>{props.value.comments}</p>
            </div>
            <button onClick={() => props.remove(props.value)}>Удалить</button>
        </div>
    )
}

export default PostItem