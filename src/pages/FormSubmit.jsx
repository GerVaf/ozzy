import React, { useState } from "react";
import { BsPaypal } from "react-icons/bs";
import kbz from "../../public/kbz.png";

const FormSubmit = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    paymentMethod: "",
    transition_id: "",
    // termsAndConditions: false,
  });
  const [qty, setQty] = useState(1);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send the formData to an API
    console.log(formData);
  };

  return (
    <div className=" flex items-center justify-center bg-black ">
      <div className="flex flex-col lg:w-[900px] gap-5">
        {/* top form side  */}
        <div className=" bg-slate-50 p-5 rounded-md">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Personal info  */}
            <div className="flex flex-col gap-5">
              <label
                className="text-3xl font-bold self-end"
                htmlFor="personal_info"
              >
                Purchased Information
              </label>
              {/* name, phone number, and KBZ pay transition ID */}
              <input
                placeholder="Your name"
                type="text"
                className="inputForm"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                placeholder="Your phone number"
                className="inputForm"
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
              <input
                placeholder="Transition ID"
                className="inputForm"
                type="number"
                id="transition_id"
                name="transition_id"
                value={formData.transition_id}
                onChange={handleChange}
                required
              />
              <input
                placeholder="Your email"
                className="inputForm"
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {/* Quantity */}
              <div className=" cursor-pointer flex justify-between border-white bg-gradient-to-r from-zinc-600 to-zinc-500 items-center p-5 rounded-md text-white">
                <p>Quantity : </p>
                <div className="flex items-center gap-2 text-xl bg-white justify-center text-black rounded-md overflow-hidden">
                  <p
                    className="w-10 h-10 flex justify-center items-center"
                    onClick={() => setQty(qty + 1)}
                  >
                    +
                  </p>
                  <p className="w-10 h-10 flex justify-center items-center ">
                    {qty}
                  </p>
                  <p
                    className="w-10 h-10 flex justify-center items-center"
                    onClick={() => setQty(qty - 1)}
                  >
                    -
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="flex flex-col gap-5">
              <label className="text-xl font-bold text-end" htmlFor="paymentMethod">
                Payment Information
              </label>
              <div className="flex rounded-md gap-5">
                <select
                  className="w-2/4 outline-none p-5"
                  id="paymentMethod"
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                >
                  <option value="ayapay">AYA Pay</option>
                  <option value="ayaaccount">AYA account</option>
                  <option value="kbzpay">KBZ Pay</option>

                </select>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex gap-5">
              <input
                className="w-5 h-5"
                type="checkbox"
                id="termsAndConditionsCheckbox"
                name="termsAndConditions"
                // checked={formData.termsAndConditions}
                // onChange={handleChange}
                required
              />
              <label htmlFor="termsAndConditionsCheckbox">
                <div>
                  I agree to the{" "}
                  <a className="text-blue-600" href="#">
                    terms and conditions.
                  </a>
                </div>
              </label>
            </div>

            <button
              className="bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 from-blue-500 to-blue-700 rounded-md py-3 text-white font-bold"
              type="submit"
            >
              Confirm
            </button>
          </form>
        </div>
        {/* bottom side  */}
        <div className="p-5  flex flex-col rounded-md ">
          <div className="text-black bg-gradient-to-r from-zinc-200 to-zinc-300 rounded-md">
            <div className="text-3xl py-5 flex justify-between px-5 border-b-2">
              <p>GA</p> <p>35000mmk</p>
            </div>
            {/* price  */}
            <div className=" flex justify-between p-5">
              <div className="text-xl flex flex-col gap-5 ">
                <p>Price : </p>
                <p>Quantity : </p>
                <p>Fee : </p>
              </div>
              <div className="text-xl flex flex-col gap-5 ">
                <p>35000mmk </p>
                <p>{qty} ticket</p>
                <p>555mmk </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSubmit;
