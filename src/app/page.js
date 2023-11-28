"use client";
import { useState } from "react";

import defaultAliens from "../app/Aliens.js";
import Divider from "../app/components/Divider.js";

export default function Home() {
  const [aliens, setAliens] = useState(defaultAliens);

  return (
    <>
      <h1>1</h1>
      <Divider />
      <div className="box"></div>

      <h1>2</h1>
      <Divider />
      <img src="/images/meme.webp" />
      <h1>3</h1>
      <Divider />
      <h3>Alien Planets</h3>
      {aliens.map((aliens) => {
        return (
          <div key={aliens.id} className="aliens-container">
            <div>
              <p>{aliens.name}</p>
              <p>{aliens.emoji}</p>
              <p>{aliens.details}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
