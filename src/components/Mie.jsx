import React, { useEffect, useState } from "react";

function Mie() {
  const [mie, setMie] = useState("Belum dimasak");

  useEffect(() => {
    async function masakMie() {
      console.log("Masak mie");
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Mie sudah matang");
      setMie("Mie Instant sudah matang");
    }
    masakMie();
  }, []);

  return (
    <div>
      <h2>Masa Mie Instant</h2>
      <p>Status: {mie}</p>
    </div>
  );
}

export default Mie;
