import React, { useState } from "react";
import "./styles.css";

const category = {
  animation: [
    { name: "Kung Fu Panda", rating: "7.5" },
    { name: "How To Train Your Dragon", rating: "8.1" },
    { name: "Big Hero 6", rating: "7.8" }
  ],
  sciFi: [
    { name: "Ready Player One", rating: "7.5" },
    { name: "Tomorrowland", rating: "7.8" },
    { name: "Real Steel", rating: "7.1" }
  ],
  biographies: [
    { name: "The Social Network", rating: "7.7" },
    { name: "Steve Jobs", rating: "7.2" },
    { name: "Wolf of Wall Street", rating: "8.2" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("sciFi");
  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <section>
        <h1 style={{ fontSize: "32px" }}>🎬movies</h1>
        <p style={{ fontSize: "smaller" }}>
          here are some of my favourite movies you should definitely not miss
        </p>
        {Object.keys(category).map((genre) => (
          <button
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
            onClick={() => genreClickHandler(genre)}
          >
            {genre}
          </button>
        ))}
      </section>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          <div>
            {category[selectedGenre].map((movie) => (
              <li
                style={{
                  listStyle: "none",
                  padding: "1rem",
                  border: "1px solid #D1D5DB",
                  width: "70%",
                  margin: "1rem 0rem",
                  borderRadius: "0.5rem"
                }}
                key={movie.name}
              >
                <div style={{ fontSize: "larger" }}>{movie.name}</div>
                <div style={{ fontSize: "smaller" }}>imdb: {movie.rating}</div>
              </li>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
}
