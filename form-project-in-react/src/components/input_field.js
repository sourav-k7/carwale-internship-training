import React from "react";

export default function InputField({ label, type, onEdit, errorMessage,value }) {
  return (
    <label>
      {label}
      <input
        type={type}
        onChange={onEdit}
        className={`${ value!==""? errorMessage === ""  ? "correct-input" : "error-input":""}`}
      />
      <div id="username-error" className="emsg">
        {errorMessage}
      </div>
    </label>
  );
}
