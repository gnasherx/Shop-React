import React from "react";

const Input = ({ label, type, value, name, onChange }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div className="input-group mb-3">
        <input
          name={name}
          value={value}
          type={type}
          onChange={onChange}
          className="form-control"
          id={name}
          aria-describedby="basic-addon3"
        />
      </div>
    </div>
  );
};

export default Input;
