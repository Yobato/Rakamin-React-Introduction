// =========== MATERI STATE ================

import React from "react";
import { useState } from "react";

function Game() {
  const [score, setScore] = useState(0);
  return (
    <div>
      <h2>Skor Game: {score}</h2>
      <button onClick={() => setScore(score + 1)}>Tambah Skor</button>
      <button onClick={() => setScore(score + 1)}>Tambah Skor</button>
    </div>
  );
}

export default Game;
