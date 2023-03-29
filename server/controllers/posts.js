import PostMessage from "../models/postMessageSchema.js"
export const getPosts=async (req,res)=>{
   try{
    const postMessages= await PostMessage.find()
    res.status(200).json({success:true, data:postMessages})
   }catch(err){
    res.status(404).json({success:false, message:err.message})
   }
}

export const createPost= async (req,res)=>{
    try{
         const post=new PostMessage(req.body)
         await post.save()
         res.status(201).json({success:true, data:post})


    }catch(err){
        res.status(409).json({success:false, message:err.message})

    }

}