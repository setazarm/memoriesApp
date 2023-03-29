import axios from "axios"
 const url="http://localhost:5000/posts"
 export const fetchPosts= ()=>axios.get(url)
 export const createPost=(newPost)=> axios.post(url, newPost)


//crud

 export const getPosts= async()=>{
    try{
        const res= await fetchPosts()
       return ({type:"FETCH_ALL", payload:res.data.data})
    
    }catch(err){
        console.log(err.message)
    }
}


export const addPost=async (post)=>{
    try {
        const res= await createPost(post)
        return({type:"CREATE", payload:res.data.data})
    } catch (err) {
        
    }
}