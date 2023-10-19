import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Home = () => {
  return (
    <div className="flex flex-col gap-5">
      {/* Hero Image */}
      <div className="h-screen bg-slate-600">
        <img
          className="h-full w-full"
          src={
            "https://images.unsplash.com/photo-1696595883516-76c97aa3a164?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
      </div>
      {/* Second Image */}
      <div className="h-[500px] bg-slate-600"></div>
      {/* Ticket Section */}
      <div className="grid grid-cols-12 gap-5 px-5 h-[500px]">
        {/* Card */}
        <div className="col-span-12 lg:col-span-4 rounded bg-slate-600"></div>
        <div className="col-span-12 lg:col-span-4 rounded bg-slate-600"></div>
        <div className="col-span-12 lg:col-span-4 rounded bg-slate-600"></div>
      </div>
      {/* Footer */}
      <div className="bg-slate-600 p-5 flex flex-col md:flex-row gap-5 justify-between items-center">
        {/* Social Icons */}
        <div className="text-white flex items-center gap-5 text-xl">
          <BsFacebook />
          <BsInstagram />
          <BsTwitter />
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
