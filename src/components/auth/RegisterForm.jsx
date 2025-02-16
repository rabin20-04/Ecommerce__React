import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Email_Regex } from "../constants/Regex";
import { login } from "../../api/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const RegisterForm = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();
  //  error bhitra email xa email bhitra message
  // const { name, ref, onChange, onBlur } = register("email"); if used name={name} type is single destruct then no need ie{...register("email")}
  // register to take form user handle to send to backend and formstate to send like required message

  // this submitform is use to post the data from here to backend
  function submitForm(data) {
    console.log(data);
    navigate("/auth/login");
  }

  // we sent the user to home after correct email and password putting by naviagte from useNavigate of react-router-dom

  // } try catch is like .then .catch
  // .then ma arrow fn parameter response fn ma something then after this .catch arro fn parameter error and fn inside it

  // here we sent data to the function named login which is in api/auth folder
  // function submitForm(data) {
  //   login(data)
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error.response.data);
  //     });

  return (
    <form
      action=""
      className="w-full  md:w-1/2 bg-slate-100 rounded  py-8 px-12 "
      onSubmit={handleSubmit(submitForm)}
    >
      <div className="p-1 ">
        <label htmlFor="Email">Name:</label>
        <input
          id="name"
          type="text"
          placeholder="Harry"
          className="px-2 py-1 mt-1 w-full rounded "
        ></input>
      </div>
      <div className="p-1 ">
        <label htmlFor="Email">Email:</label>
        <input
          id="email"
          type="email"
          placeholder="abc@yahoo.com"
          className="px-2 py-1 mt-1 w-full rounded "
          {...register("email", {
            required: "Email address is required",
            pattern: {
              value: Email_Regex,
              // regex for email form like abc@gmail.com not ab.com or ab@.com etc so maintain format
              message: "Invalid email address! `xyz@abc.com` ",
            },
          })}
        />
        <p className="text-red-500 text-xs mt-1 px-2">
          {errors.email?.message}
        </p>
      </div>
      <div className="p-1 relative ">
        <label htmlFor="Password">Password:</label>
        <input
          type={hidePassword ? "password" : "text"} // if hidepass type = password  if eye is clicked set hidepass of usestate to false then make type =text if hidepassord is false
          placeholder="Enter Password"
          id="Password"
          className="px-3 py-1 mt-1 w-full rounded "
          // this register takes the data of this field and then sends to handleSubmitand then handel to other fn like submit form
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password lenght must be greater than 8 ",
            },
          })}

          // {...register("password", { required: "Password is required" })}
          // {..register("password"),{other}}
        />
        <button
          type="button"
          onClick={() => setHidePassword(!hidePassword)}
          className="absolute right-4  top-10"
        >
          {hidePassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
      <p className="text-red-500 text-xs mt-1 px-2">
        {errors.password?.message}
      </p>

      <div className=" mt-6 text-center">
        <input
          type="submit"
          value="Register"
          className="bg-teal-400  px-3 py-1 rounded  cursor-pointer hover:bg-teal-500"
        />

        <p className="text-center mt-5">Please Register to continue!</p>
      </div>
    </form>
  );
};

export default RegisterForm;
