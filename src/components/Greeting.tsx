import React, { useState } from "react";
import { fetchJokes } from "../api";
import { TOP_TEN_JOKES_URL, RANDOM_JOKE_URL } from "../constant";

interface IJokes {
  id: number;
  type: string;
  setup: string;
  punchline: string;
}

const Greeting = () => {
  const [jokes, updateJokes] = useState<[IJokes]>([
    {
      id: 1,
      type: "general",
      setup: "Hello",
      punchline: "Hello"
    }
  ]);
  return (
    <div>
      <button
        onClick={() => {
          fetchJokes(TOP_TEN_JOKES_URL, updateJokes);
        }}
      >
        Get jokes
      </button>

      {!!jokes.length &&
        jokes.map((joke, i) => (
          <div
            tw="bg-black text-white"
            key={`test-joke-${i}`}
            data-testid={`test-joke-${i}`}
            style={{
              textAlign: "left",
              padding: "1em",
              border: "1px solid black"
            }}
          >
            <p>Question: {joke.setup}</p>
            <p>Reply: {joke.punchline}</p>
          </div>
        ))}
    </div>
  );
};

export default Greeting;
