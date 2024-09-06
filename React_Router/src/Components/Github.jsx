import React, { useEffect, useState } from "react";

function Github() {
  // useEffect will be called whenever the component will be loaded
  const [data, setData] = useState([]);
  const [username, setUsername] = useState();
  const fetchData = () => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  };
  const formatDate = (isoDate) => {
    if (!isoDate) return "N/A";
    const date = new Date(isoDate);
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true, // 12-hour format with AM/PM
    });
  };

  return (
    <div className="flex items-center justify-center p-6 shadow-lg rounded-xl max-h-full bg-white">
      <div className="flex-col bg-slate-400 rounded-lg p-6 shadow-lg">
        <h1 className="text-4xl text-center bg-slate-300 mt-2 rounded-xl p-4 font-serif shadow-xl">
          Your GitHub Statistics
        </h1>
        <div className="flex flex-col text-center mt-6">
          <label htmlFor="Github Username" className="text-2xl">
            Enter Your Github Username
          </label>
          <input
            className="ml-3 mt-3 p-3 w-full max-w-lg text-2xl border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-300 ease-in-out"
            type="text"
            placeholder="Enter Your Username"
            onChange={(username) => setUsername(username.target.value)}
          />
          <button
            onClick={() => {
              // setQuery(username);
              fetchData();
            }}
            className="mt-4 px-6 py-3 bg-blue-500 text-white text-xl rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300 ease-in-out transform hover:scale-105 active:scale-95"
          >
            Calculate Stats
          </button>
          <div>
            <h1 className="text-2xl">Followers on Github: {data.followers}</h1>
            <h1 className="text-2xl">
              Public Repositories: {data.public_repos}
            </h1>
            <h1 className="text-2xl">
              Github Last Update at: {formatDate(data.updated_at)}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Github;
