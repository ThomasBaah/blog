import React, {useState} from "react";
import { postArray} from "../components/Posts";
import Post from "../components/Post";


const Home = (props) =>{
    const [posts,setPosts] = useState(postArray);
    return (
         <div>
             {posts.map((post) => {
                 return <Post key={post.id} post={post}/>;
                 
             })}
              </div>
    )
 };

export default Home;