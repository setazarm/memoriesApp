import {useState,useContext} from "react";
import { addPost } from "../api";
import { MyContext } from "../context/Context";

const Form = () => {
  const[postData, setPostData]=useState({
    creator:"", title:"",message:"",tags:"",selectedFile:""
  })
  const {dispatch}=useContext(MyContext)

  const getImage=(file)=>{
    console.log(file)
    const reader= new FileReader()
    reader.readAsDataURL(file)
    reader.onload=()=>{
      console.log(reader.result)
       setPostData({...postData,selectedFile:reader.result.toString()})
    
    }
    
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addPost(postData))

  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Creating a Memory</h1>
      <input 
      type="text"
      name="creator"
      value={postData.creator}
      onChange={(e)=>setPostData({...postData, creator:e.target.value})}
      placeholder="Creator"
          />
           <input 
      type="text"
      name="title"
      value={postData.title}
      onChange={(e)=>setPostData({...postData, title:e.target.value})}
      placeholder="title"
          />
           <input 
      type="text"
      name="message"
      value={postData.message}
      onChange={(e)=>setPostData({...postData, message:e.target.value})}
      placeholder="message"
          />
           <input 
      type="text"
      name="tags"
      value={postData.tags}
      onChange={(e)=>setPostData({...postData, tags:e.target.value})}
      placeholder="tags"
          />
          <div>
          <input type="file"  onChange={(e)=>{getImage(e.target.files[0])}}/>

          </div>
          <button>submit</button>
    </form>
  );
};

export default Form;
