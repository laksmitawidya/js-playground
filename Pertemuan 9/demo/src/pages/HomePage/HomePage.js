import Sidebar from "../../components/Sidebar/Sidebar";
import "./HomePage.css";
import { useCallback, useEffect, useMemo, useState } from "react";

const HomePage = () => {
  const [user, setUser] = useState([]);

  const fetchUser = useMemo(
    async (user) => {
      const res = await fetch(`https://api.agify.io/?name=${user}`);
      const newUser = await res.json();
      setUser(newUser);
    },
    [user]
  );

  // useEffect(() => {
  //   fetchUser();
  // }, [fetchUser]);
  console.log("user", user, fetchUser());

  return (
    <div className="homePage">
      <input
        onChange={(e) => {
          setUser(e.target.value);
        }}
      ></input>
      {/* <Sidebar /> */}
    </div>
  );
};

export default HomePage;
