import React, { useState } from "react";
import Button from "./Button";

export default function GameCom() {
  const [xNext, setXnext] = useState(true);
  const [square, setSquare] = useState(Array(9).fill(null));

  function handleclick(i) {
    if (square[i]) {
      return;
    }
    const nextSquare = square.slice();
    if (xNext) {
      nextSquare[i] = "x";
    } else {
      nextSquare[i] = "o";
    }
    setSquare(nextSquare);
    setXnext(!xNext);
  }
  return (
    <div>
      <div>
        <Button value={square[0]} onsquare={() => handleclick(0)} />
        <Button value={square[1]} onsquare={() => handleclick(1)} />
        <Button value={square[2]} onsquare={() => handleclick(2)} />
      </div>
      <div>
        <Button value={square[3]} onsquare={() => handleclick(3)} />
        <Button value={square[4]} onsquare={() => handleclick(4)} />
        <Button value={square[5]} onsquare={() => handleclick(5)} />
      </div>
      <div>
        <Button value={square[6]} onsquare={() => handleclick(6)} />
        <Button value={square[7]} onsquare={() => handleclick(7)} />
        <Button value={square[8]} onsquare={() => handleclick(8)} />
      </div>
    </div>
  );
}
