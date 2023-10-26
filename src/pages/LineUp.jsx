import React from "react";
import poster from "../assets/poster.jpg";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import { useNavigate } from "react-router-dom";
const LineUp = () => {
    const nav = useNavigate()
  return (
    <div>
      {/* Poster */}
      <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center my-5 items-center gap-5">
        {/* Line up */}
      <img src={poster} alt="" className="w-full lg:w-[25%]"/>
        <img src={img1} alt="" className="w-full lg:w-[25%]" />
        <img src={img2} alt="" className="w-full lg:w-[25%]" />
        <img src={img3} alt="" className="w-full lg:w-[25%]" />
        <img src={img4} alt="" className="w-full lg:w-[25%]" />
        <img src={img5} alt="" className="w-full lg:w-[25%]" />
        <img src={img6} alt="" className="w-full lg:w-[25%]" />
      </div>
      <button onClick={()=>nav('/')} className="w-full mx-auto bg-red-600 text-white rounded px-10 py-3">Go Back to Home</button>
    </div>
  );
};

export default LineUp;
