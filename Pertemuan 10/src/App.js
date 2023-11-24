import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Service, { Desain, Pemasaran, Pengembangan } from "./pages/Service";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/:id?" element={<Home />} />
          </Route>

          <Route caseSensitive path="/service/" element={<Service />}>
            <Route path="pengembangan" element={<Pengembangan />} />
            <Route path="desain" element={<Desain />} />
            <Route path="pemasaran" element={<Pemasaran />} />
          </Route>
          <Route path="/about" element={<AnotherAbout />} />
          <Route path="/about" element={<About />} />

          <Route path="*" element={<NoMatch />}></Route>
        </Routes>
      </div>
    </div>
  );
}
export default App;

const NoMatch = () => <h2>Not Found</h2>;

function AnotherAbout() {
  const navigate = useNavigate();
  const isAuthenticated = false;
  useEffect(() => {
    if (!isAuthenticated) {
      return navigate("/service/");
    }
  }, []);
  return <h1>About</h1>;
}
