import React from "react";
import { toast } from "react-toastify";

const ContactUs = () => {
  return (
    <div className="w-100 p-0 m-0 justify-content-center row bg_light py-5">
      <div className="text-center text-black slider_title">Contact Us</div>
      <form className="p-0 m-0 col-lg-6 col-11 form-group row py-3">
        <input
          placeholder="Name"
          style={{ borderRadius: "100px" }}
          className="form-control w-100 my-2"
        />
        <input
          placeholder="Surname"
          style={{ borderRadius: "100px" }}
          className="form-control w-100 my-2"
        />
        <input
          placeholder="Email"
          style={{ borderRadius: "100px" }}
          className="form-control w-100 my-2"
        />
        <textarea
          placeholder="Message"
          style={{ borderRadius: "20px" , minHeight:"130px" }}
          className="form-control w-100 my-2"
        />
        <button onClick={(e)=>{e.preventDefault() , toast.success("SuccessFull") ; }} className="w-100 button_home py-2 mt-3">
            Send a Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
