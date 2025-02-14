
import React from "react";
import { Portfolio } from "../../interfaces/portfolio";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

interface IProps {
  portfolio: Portfolio;
  imageBig?: boolean;
}

const SinglePortfolio = ({ portfolio, imageBig = false }: IProps) => {
  if (!portfolio?.link) return null;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="relative w-full h-60">
        <Image
          src={portfolio.cover}
          alt={portfolio.title}
          fill
          className="object-cover object-center transition duration-300 transform hover:scale-105"
        />
      </div>
      <div className="p-7">
        <h2 className="text-xl font-semibold text-gray-800">{portfolio.title}</h2>
        <p className="mt-2 text-sm text-gray-600">{portfolio.category}</p>
        <p className="text-sm text-gray-600">{portfolio.date}</p>
      </div>
      <div className="px-7 pb-5">
        <Link 
          href={portfolio.link}
          className="inline-block text-center bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
          target="_blank"
        >
          View Project <FiExternalLink className="inline ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default SinglePortfolio;