import "./style/App.scss"
import React from "react"
import AllPosts from "./components/AllPosts"
import memories from "./images/memories.png"
import Form from "./components/Form"
const App=()=>{
    return (
        <div>
           
           
      <nav className="bg-white flex justify-center items-center rounded-full my-8 mx-8 px-2 py-2 text-2xl font-bold text-pink-500">
      <img className="logo" src={memories} alt="memories"/>
            <h2>Memories</h2>
      </nav>
            <div  className="flex flex-col-reverse md:flex-row gap-4 mx-6">
            <AllPosts/>
            <Form/>
            </div>

        </div>
    )
}
export default App