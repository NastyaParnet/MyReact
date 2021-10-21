import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PostItem from "./PostItem";

const PostList = ({posts, title, remove}) => {
    if (!posts.length){
        return (
            <div>
                <h1>Новин немає!</h1>
            </div>
        )
    }
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            <TransitionGroup>
            {posts.map((post) => 
            <CSSTransition
                key={post.id}
                timeout={500}
                classNames="post">
                <PostItem value={post} remove={remove} key={post.id}/>
            </CSSTransition>
            )}
            </TransitionGroup>
        </div>
    )
}

export default PostList