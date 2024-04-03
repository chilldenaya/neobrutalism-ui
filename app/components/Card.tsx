import React from "react";

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => (
  <>
    <div className="bg-pink-100 w-80 h-full border-black border-2 rounded-md bg-white hover-3d">
      <a className="block cursor-pointer">
        <article className="w-full h-full">
          <div className="px-6 py-5 text-left h-full">
            <h1 className="text-3xl mb-4 font-mono">{title}</h1>
            <p className="text-2xl mb-4 line-clamp-4 font-pen">{description}</p>
          </div>
        </article>
      </a>
    </div>
  </>
);

export default Card;
