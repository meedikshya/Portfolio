import React from "react";

const Title = ({ title }) => {
  return (
    <div className="">
      <div className="flex flex-col items-center my-0">
        <hr className="w-2/3 border-t-2 border-gray-300 self-start mb-2" />

        <h1 className="text-4xl font-bold text-[#be9398] tracking-wide">
          {title}
        </h1>

        <hr className="w-2/3 border-t-2 border-gray-300 self-end mt-2" />
      </div>
    </div>
  );
};

export default Title;
