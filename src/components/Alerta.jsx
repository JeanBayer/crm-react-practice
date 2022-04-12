import React from "react";

const Alerta = ({ children }) => {
  return (
    <p className="text-red-800 text-xs text-right font-semibold">{children}</p>
  );
};

export default Alerta;
