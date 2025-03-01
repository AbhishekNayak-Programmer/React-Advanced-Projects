import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchOrder = () => {
  const [orderId, setOrderId] = useState();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!orderId) return;
    navigate(`/order/${orderId}`);
    setOrderId("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="Search order #"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
        className="focus:ring-opacity-50 w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:ring-yellow-500 focus:outline-none sm:w-64 sm:focus:w-96"
      />
    </form>
  );
};

export default SearchOrder;
