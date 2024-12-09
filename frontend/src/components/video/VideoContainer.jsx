import React, { useState } from 'react';

const VideoContainer = ({title,description,thumbnail}) => {
  const [textColor, setTextColor] = useState('white');
  console.log(title)

  // const handleMouseEnter = () => {
  //   setTextColor((prev) => (prev === 'white' ? 'red-600' : 'white'));
  // };

  return (
    <div className="flex justify-center items-center">
      <div
        className="group w-[250px] h-[384px] rounded-md border-2 border-red-600 shadow-3xl box-border overflow-hidden hover:shadow-4xl"
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseEnter}
      >
        <img
          src={thumbnail}
          alt="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          className="h-[200px] w-full rounded-md object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="p-4">
          <h1 className={`text-l font-semibold text-pretty truncate group-hover:text-red-600`}>
            {title}
          </h1>
          <p className="mt-3 text-sm text-white">
           {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
