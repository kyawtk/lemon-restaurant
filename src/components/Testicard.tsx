import React from "react";

const Testicard = ({ name, jobTitle, message }) => {
  return (
    <div className="text-center  p-10 relative flex flex-col bg-white min-w-[290px] max-w-[300px] rounded-xl shadow-2xl">
      <div className="absolute top-[-50px] left-[36%] w-[100px] h-[100px] rounded-full overflow-hidden">
        <img src="https://xsgames.co/randomusers/avatar.php?g=male" className="image"></img>
      </div>

      <h2 className="mt-[70px] font-semibold text-2xl">{name}</h2>
      <small>{jobTitle}</small>
      <p>{message}</p>
    </div>
  );
};

export default Testicard;
