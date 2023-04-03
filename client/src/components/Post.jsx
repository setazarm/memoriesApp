import React from 'react'

const Post = ({ title, image, message }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-700 text-base">{message}</p>
      </div>
    </div>
  )
}

export default Post




