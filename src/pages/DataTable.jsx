import axios from "axios";
import React, { useEffect, useState } from "react";

const DataTable = () => {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://206.189.39.172/user");

        console.log(response);
        setData(response?.data?.result?.data?.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center">
      <div className="flex flex-col">
        {/* header  */}
        <div className=" grid grid-cols-12 border p-5 text-center">
          <h1 className=" col-span-2">No.</h1>
          <h1 className=" col-span-2">Name</h1>
          <h1 className=" col-span-2">Transition ID</h1>
          <h1 className=" col-span-2">email</h1>
          <h1 className=" col-span-2">Time</h1>
        </div>
        {data?.map((el, index) => {
          return (
            <div key={el.id} className=" grid grid-cols-12 text-center p-5">
              <p className=" col-span-2">{index + 1}</p>
              <p className=" col-span-2">{el?.user_name}</p>
              <p className=" col-span-2">{el?.transitionId}</p>
              <p className=" col-span-2">{el?.user_email}</p>
              <p className=" col-span-2">{el?.updatedAt}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DataTable;
