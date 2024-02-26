import React from "react";

const Card = ({ data }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <a href={data.link} target="_blank" rel="noopener noreferrer">
        <img
          className="w-full h-60 object-cover object-center transition duration-300 transform hover:scale-105"
          src={data.cover}
          alt={data.title}
        />
      </a>
      <div className="p-7">
        <h2 className="text-xl font-semibold text-gray-800">{data.title}</h2>
        <p className="mt-2 text-sm text-gray-600">{data.category}</p>
        <p className="text-sm text-gray-600">{data.date}</p>
      </div>
      <div className="px-7 pb-5">
        <a
          href={data.link}
          className="inline-block text-center bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default Card;
