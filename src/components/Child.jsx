import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function Child() {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <p>Mode Saat ini: {theme}</p>
    </div>
  );
}

export default Child;
