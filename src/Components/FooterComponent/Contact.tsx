import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
function Contact() {
  return (
    <>
      <div className="flex items-center justify-between">
        <p className="flex-1 text-[1.25rem] font-[500]">Phone</p>
        <p className="flex-1 text-left text-sm">022-20277564</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="flex-1 text-[1.25rem] font-[500]">Service Center</p>
        <p className="flex-1 text-left text-sm">0811-233-8899</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="flex-1 text-[1.25rem] font-[500]">Customer Service</p>
        <p className="flex-1 text-left text-sm">0811-235-9988</p>
      </div>
      <div className="flex justify-evenly">
        <div className="w-fit rounded-full bg-white p-2">
          <FaFacebookF className="text-primary" />
        </div>
        <div className="w-fit rounded-full bg-white p-2">
          <FaInstagram className="text-primary" />
        </div>
        <div className="w-fit rounded-full bg-white p-2">
          <FaTwitter className="text-primary" />
        </div>
        <div className="w-fit rounded-full bg-white p-2">
          <FaYoutube className="text-primary" />
        </div>
      </div>
    </>
  );
}

export default Contact;
