import axios from "axios"
 const url="http://localhost:5000/posts"
 export const fetchPosts= ()=>axios.get(url)
 export const createPost=(newPost)=> axios.post(url, newPost)


//crud

 export const getPosts= async (dispatch)=>{
    try{
        const res= await fetchPosts()
        console.log(res)
       dispatch ({type:"FETCH_ALL", payload:res.data.data})
    
    }catch(err){
        console.log(err.message)
    }
}


export const addPost=async (post,dispatch)=>{
    try {
        const res= await createPost(post)
        dispatch({type:"CREATE", payload:res.data.data})
    } catch (err) {
        
    }
}