import "./style/App.scss"
import React from "react"
import AllPosts from "./components/AllPosts"
import Post from "./components/Post"
import memories from "./images/memories.png"
import Form from "./components/Form"
const App=()=>{
    return (
        <div>
            <img className="logo" src={memories} alt="memories"/>
            <AllPosts/>
            <Post/>
            <Form/>

        </div>
    )
}
export default App