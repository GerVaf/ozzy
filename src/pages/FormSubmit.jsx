
import { useState } from "react";

const FormSubmit = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    facebookName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here
    console.log("Form submitted with data:", formData);
  };
  return (
    <div className="bg-white h-[100vh] w-[100vw] items-center flex justify-center">
      <div className=" bg-gradient-to-br from-slate-200 to-slate-100 p-10 px-10  rounded-lg ">
        <form className="flex flex-col gap-16" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5">
            <label className="text-lg" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className=" sm:w-[500px] formdecoration"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
            <label className="text-lg" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="formdecoration"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            <label className="text-lg" htmlFor="facebookName">
              Facebook Name
            </label>
            <input
              type="text"
              id="facebookName"
              name="facebookName"
              className=" sm:w-[500px] formdecoration"
              value={formData.facebookName}
              onChange={handleChange}
              placeholder="Enter your facebook name"
            />
          </div>
          <button
            className="py-3 font-bold text-lg rounded-lg bg-gradient-to-r from-violet-700 to-purple-600 text-white"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormSubmit;
