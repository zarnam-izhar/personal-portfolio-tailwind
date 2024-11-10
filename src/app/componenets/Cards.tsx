import React from 'react'
import Image from 'next/image';

interface propsType {
  title: string;
  desc: string;
  img: string;
  tags: string[];
}

const Cards: React.FC<propsType> = ({ title, desc, img, tags }) => {
  return (
    <div className="border border-accent w-[300px] sm:w-[350px] h-[450px] flex flex-col" data-aos="zoom-in-up">
      <div className="w-full h-[200px] overflow-hidden">
        <Image
          className="object-cover w-full h-full"
          src={img}
          width={350}
          height={200}
          alt={title}
        />
      </div>

      <div className="p-4 space-y-4 flex-grow">
        <div className="text-4xl font-extralight">{title}</div>
        <div>{desc}</div>
        <div className="flex flex-wrap gap-2">
          {tags.map((el) => (
            <div className="tags" key={el}>
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Cards
