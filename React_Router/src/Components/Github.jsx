import React, { useEffect, useState } from "react";

function Github() {
  // useEffect will be called whenever the component will be loaded
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/ranaabdullahjaved")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div>
      <h1>Followers on Github: {data.followers}</h1>
    </div>
  );
}

export default Github;
