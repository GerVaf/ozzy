import axios from "axios";
import React, { useEffect, useState } from "react";

const DataTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://206.189.39.172/transactions");

        console.log(response);
        setData(response?.data?.result?.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center text-white">
      <div className="flex flex-col">
        {/* header  */}
        <div className=" grid grid-cols-8 border p-5 text-center">
          <h1 className=" col-span-2">No.</h1>
          <p className=" col-span-1">Name</p>
          <p className=" col-span-1">Email</p>
          <p className=" col-span-1">Transition ID</p>
          <p className=" col-span-1">Ticekt</p>
          <p className=" col-span-1">extra person</p>
          <p className=" col-span-1">total price</p>
        </div>
        {data?.map((el, index) => {
          return (
            <div key={el?._id} className=" grid grid-cols-8 text-center p-5">
              <p className=" col-span-2">{index + 1}</p>
              <p className=" col-span-1">{el?.customer_id?.bank_acc_name}</p>
              <p className=" col-span-1">{el?.customer_id?.user_email}</p>
              <p className=" col-span-1">{el?.customer_id?.transaction_id}</p>
              <p className=" col-span-1">{el?.ticket_id?.ticket_name}</p>
              <p className=" col-span-1">{el?.plus_person}</p>
              <p className=" col-span-1">{el?.total_price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DataTable;
