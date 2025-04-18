import React from "react";
import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";

const DeleteItem = ({ pizzaId }) => {
  const dispatch = useDispatch();

  const deleteItemHandler = () => {
    dispatch(deleteItem(pizzaId));
  };

  return (
    <Button type="small" onClick={deleteItemHandler}>
      Delete
    </Button>
  );
};

export default DeleteItem;
