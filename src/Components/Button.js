import React from "react";

export const Button = ({ handelOnCLick }) => {
  return (
    <div>
      <button className="btn" onClick={handelOnCLick}>
        {" "}
        <i class="fas fa-moon"></i>Dark Mode
      </button>
    </div>
  );
};
