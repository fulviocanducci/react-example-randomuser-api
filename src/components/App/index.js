import React, { useEffect, useState } from "react";

export default function App() {
  const [results, setResults] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=6&inc=name,picture")
      .then(result => result.json())
      .then(result => setResults(result.results))
      .catch(err => console.log(err));
  }, []);
  return (
    <div>
      {results &&
        results.map((item, index) => (
          <div key={index}>
            <img src={item.picture.thumbnail} alt="" />
            {item.name.title} {item.name.first} {item.name.last}
          </div>
        ))}
    </div>
  );
}
