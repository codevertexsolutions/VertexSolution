import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  data: {
    id: number;
    title: string;
    cover: string;
    link: string;
    category: string;
    date: string;
  };
}

const Card = ({ data }: CardProps) => {
  if (!data?.link) {
    return null;
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="relative w-full h-60">
        <Image
          src={data.cover}
          alt={data.title}
          fill
          className="object-cover object-center transition duration-300 transform hover:scale-105"
        />
      </div>
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