import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notifications = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      closeOnClick={false}
      pauseOnHover
      draggable
      theme="light"
    />
  );
};

export default Notifications;
