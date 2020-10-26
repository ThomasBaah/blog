import React from "react";

const Post = (props) => {
    const post = props.post;
    return <div>{post.title}</div>
};

export default Post;