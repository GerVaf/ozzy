import axios from "axios";
import React, { useEffect, useState } from "react";

const DataTable = () => {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [ticket, setTicket] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://api.ozzy.today/transactions");

        console.log(response);
        setData(response?.data?.result?.data);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchTicketData = async () => {
      try {
        const response = await axios.get("http://api.ozzy.today/tickets");

        console.log(response);
        setTicket(response?.data?.result?.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTicketData();
    fetchData();
  }, [refresh]);

  console.log(data);
  console.log(ticket);

  const handleSubmit = async (e, id) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://api.ozzy.today/tickets", {
        transaction_id: id,
      });
      console.log(response);

      if (response?.data?.result?.msg === "Successful") {
        // nav("/");
        setRefresh(!refresh);
      }
      // if (response?.data?.status === 400) {
      //   setErrorMessages(response?.data?.err);
      // }
    } catch (error) {
      console.error(error);
    }
    // console.log(formData);
  };

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center text-white">
      <div className="flex gap-10 mb-10 text-2xl">
        <div className=" flex flex-col  ">
          <p className=" col-span-1">Name</p>
          <p className=" col-span-1">Total</p>
        </div>
        <div className=" flex gap-10">
          {ticket?.map((el) => {
            return (
              <div>
                <p className=" col-span-1">{el?.ticket_name}</p>
                <p className=" col-span-1">{el?.whole_total_ticket}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col">
        {/* header  */}
        <div className=" grid grid-cols-8 border p-5 text-center">
          <h1 className=" col-span-1">No.</h1>
          <p className=" col-span-1">Name</p>
          <p className=" col-span-1">Email</p>
          <p className=" col-span-1">Transition ID</p>
          <p className=" col-span-1">Ticekt</p>
          <p className=" col-span-1">extra person</p>
          <p className=" col-span-1">total price</p>
          <h1 className=" col-span-1">control</h1>
        </div>
        {data?.map((el, index) => {
          return (
            <div key={el?._id} className=" grid grid-cols-8 text-center p-5">
              <p className=" col-span-1">{index + 1}</p>
              <p className=" col-span-1">{el?.customer_id?.bank_acc_name}</p>
              <p className=" col-span-1">{el?.customer_id?.user_email}</p>
              <p className=" col-span-1">{el?.customer_id?.transaction_id}</p>
              <p className=" col-span-1">{el?.ticket_id?.ticket_name}</p>
              <p className=" col-span-1">{el?.plus_person}</p>
              <p className=" col-span-1">{el?.total_price}</p>
              <p className=" col-span-1">
                {el?.sold_out ? (
                  <button className="bg-red-600 p-5 rounded-md">
                    sold out
                  </button>
                ) : (
                  <button
                    onClick={(e) => handleSubmit(e, el?._id)}
                    className="bg-green-600 p-5 rounded-md"
                  >
                    avaiable
                  </button>
                )}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DataTable;
