import React, { useEffect } from "react";
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddToCartToaster = ({ isAdded, setIsAdded }) => {
  useEffect(() => {
    if (isAdded) {
      notify();
    }
  }, [isAdded]);

  const notify = () => {
    toast.success("Item Added", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      onClose: () => setIsAdded(false),
    });
  };

  return (
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition:Bounce
    />
  );
};

export default AddToCartToaster;
