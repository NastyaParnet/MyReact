import React from "react";

const PostItem = (props) => {
    return (
        <div className="post">
            <h1>{props.value.id} - {props.value.name}</h1>
            <p>{props.value.comments}</p>
        </div>
    )
}

export default PostItem