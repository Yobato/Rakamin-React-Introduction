import React, { useEffect, useState } from 'react'

function Kucing() {
    const [makanan, setMakanan] = useState("ikan");

    useEffect(()=>{
        console.log("Komponen kucing siap dirender")
    }, []);

    useEffect(()=>{
        console.log(`Kucing diberi makanan baru: ${makanan}`);
    }, [makanan]);
    
  return (
    <div>
      <h2>Kucing kamu</h2>
      <p>Makanan: {makanan}</p>
      <button onClick={() => setMakanan("Ayam")}>Beri Ayam</button>
      <button onClick={() => setMakanan("Susu")}>Beri Susu</button>
    </div>
  );
}

export default Kucing
