import {MyContext} from "./Context"
import Reducer from "../reducers/Reducer.js"
import { useEffect,useReducer } from "react"
import * as api from "../api/index.js";

const initialState={posts:[],user:null} 
const Container=(props)=>{
   
const [state, dispatch]=useReducer(Reducer,initialState)

useEffect(()=>{
// axios.get("/posts").then(res=>{
//     if(){
      dispatch(api.getPosts())
// })
},[])
return (
    <MyContext.Provider value={{state,dispatch}}>
        {props.children}
    </MyContext.Provider>
)
}
export default Container