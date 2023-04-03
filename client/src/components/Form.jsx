import {useState,useContext} from "react";
import { addPost } from "../api";
import { MyContext } from "../context/Context";

const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const { dispatch } = useContext(MyContext);

  const getImage = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPostData({ ...postData, selectedFile: reader.result.toString() });
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(postData, dispatch);
  };

  return (
    <form className="flex flex-col gap-4 w-full max-w-lg mx-auto" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-bold mb-4">Creating a Memory</h1>
      <input
        className="px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        name="creator"
        value={postData.creator}
        onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
        placeholder="Creator"
      />
      <input
        className="px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        name="title"
        value={postData.title}
        onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        placeholder="Title"
      />
      <input
        className="px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        name="message"
        value={postData.message}
        onChange={(e) => setPostData({ ...postData, message: e.target.value })}
        placeholder="Message"
      />
      <input
        className="px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        name="tags"
        value={postData.tags}
        onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        placeholder="Tags"
      />
      <div>
        <input
          // className="hidden"
          type="file"
          onChange={(e) => {
            getImage(e.target.files[0]);
          }}
        />
        {/* <label className="px-4 py-2 border border-gray-400 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-100" htmlFor="file-input">
          {postData.selectedFile ? 'File Uploaded' : 'Upload File'}
        </label> */}
      </div>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Submit
      </button>
    </form>
  );
};




export default Form;
