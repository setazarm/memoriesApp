import "./style/App.scss"
import React from "react"
import AllPosts from "./components/AllPosts"
import memories from "./images/memories.png"
import Form from "./components/Form"
const App=()=>{
    return (
        <div>
            <img className="logo" src={memories} alt="memories"/>
            <AllPosts/>
         
            <Form/>

        </div>
    )
}
export default App