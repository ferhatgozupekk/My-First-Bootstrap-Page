import React from "react";

function Input({ value, placeholder, type, id, name, onChange }) {
  return (
    <input
      value={value}
      placeholder={placeholder}
      type={type}
      id={id}
      name={name}
      onChange={onChange}
      className=" h-10 w-full border rounded-md p-2 outline-none my-3"
    />
  );
}

export default Input;
