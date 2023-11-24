import React, { useState, useEffect, Component } from "react";
import axios from "axios";

export default function Time() {
  const [localTime, setLocalTime] = useState(new Date().toLocaleTimeString());
  const [worldTime, setWorldTime] = useState(null);

  useEffect(() => {
    const localTimer = setInterval(() => tickLocalTime(), 1000);
    fetchWorldTime();
    const worldTimer = setInterval(() => fetchWorldTime(), 1000);
    return () => {
      clearInterval(localTimer);
      clearInterval(worldTimer);
    };
  }, []);

  const tickLocalTime = () => {
    setLocalTime(new Date().toLocaleTimeString());
  };

  const fetchWorldTime = async () => {
    try {
      const response = await axios.get("https://worldtimeapi.org/api/ip");
      setWorldTime(response.data.utc_datetime);
    } catch (error) {
      console.error("Error fetching world time:", error);
    }
  };

  return (
    <div>
      <h1>Your Local Time is {localTime}</h1>
      {worldTime && <h2>World Time is {worldTime}</h2>}
    </div>
  );
}
