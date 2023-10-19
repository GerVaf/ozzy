import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import kbzpay from "../assets/kbzpay.webp";
import kbzBank from "../assets/kbzBank.png";
import ayabank from "../assets/ayabank.png";
import ayapay from "../assets/ayapay.png";
import poster from "../assets/poster.jpg";
import floorplan from "../assets/floorplan.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col gap-5">
      {/* Hero Image */}
      <div className="aspect-auto">
        <img className="h-full w-full" src={poster} />
      </div>
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 lg:justify-center lg:items-center">
        <div className="w-full lg:w-[30%]">
          <img className="w-full h-full" src={floorplan} />
        </div>
        {/* Second Image */}
        <div className=" text-slate-900 px-5">
          {/* Bank Card */}
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 md:col-span-6 p-5 bg-slate-100 rounded flex flex-col gap-3 items-center">
              {/* Image */}
              <img src={ayabank} alt="" className="h-[100px] aspect-auto" />

              {/* Header */}
              <h1>AYA Account</h1>
              <p>20009182392</p>
            </div>
            <div className="col-span-12 md:col-span-6 p-5 bg-slate-100 rounded flex flex-col gap-3 items-center">
              {/* Image */}
              <img src={ayapay} alt="" className="h-[100px] aspect-auto" />

              {/* Header */}
              <h1>Apay</h1>
              <p>09788343932</p>
            </div>
            <div className="col-span-12 md:col-span-6 p-5 bg-slate-100 rounded flex flex-col gap-3 items-center">
              {/* Image */}
              <img src={kbzpay} alt="" className="h-[100px] aspect-auto" />

              {/* Header */}
              <h1>KBZ pay</h1>
              <p>09788343932</p>
            </div>
          </div>
        </div>
      </div>
      {/* Ticket Section */}
      <div className="grid grid-cols-12 gap-5 px-5">
        {/* Card */}
        <div className="col-span-12 md:col-span-4 rounded bg-slate-600 overflow-hidden">
          {/* Image */}
          <div className="">
            <img
              src={poster}
              alt=""
              className="w-full h-[150px] object-cover"
            />
          </div>
          <div className=" text-white flex justify-between items-center p-5">
            <h1 className="">GA</h1>
            <p>9,500 MMK</p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 rounded bg-slate-600">
          {/* Image */}
          <div className="">
            <img
              src={poster}
              alt=""
              className="w-full h-[150px] object-cover"
            />
          </div>
          <div className=" text-white flex justify-between items-center p-5">
            <h1 className="">VIP</h1>
            <p>9,500 MMK</p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 rounded bg-slate-600">
          {/* Image */}
          <div className="">
            <img
              src={poster}
              alt=""
              className="w-full h-[150px] object-cover"
            />
          </div>
          <div className=" text-white flex justify-between items-center p-5">
            <h1 className="">VVIP</h1>
            <p>9,500 MMK</p>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="bg-slate-600 p-5 flex flex-col md:flex-row gap-5 justify-between items-center">
        {/* Social Icons */}
        <div className="text-white flex items-center gap-5 text-xl">
          <BsFacebook />
          <BsInstagram />
          <FaSquareXTwitter />
        </div>
        {/* Privacy Policy */}
        <div className="text-center md:text-start">
          <p className="text-sm text-slate-300">
            ©2023 Example - All Rights Reserved.
          </p>
          <p className="underline text-sm text-slate-300">
            Terms & conditions Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
