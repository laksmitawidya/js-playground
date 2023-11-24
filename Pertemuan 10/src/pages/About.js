import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function About() {
  const navigate = useNavigate();
  const isAuthenticated = false;
  useEffect(() => {
    if (!isAuthenticated) {
      return navigate("/");
    }
  }, []);

  return <h1>About</h1>;
}
