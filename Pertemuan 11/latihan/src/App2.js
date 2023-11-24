import "./App.css";
import Counter from "./Counter";

function App2() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Counter />
      {/* <h1>Counter</h1>
      <h2>Result: {count}</h2>
      <button
        className="btnDecrement"
        onClick={() => {
          const perhitungan = count - 1;
          setCount(perhitungan);
        }}
      >
        -cc 3``
      </button>

      <button
        className="btnIncrement"
        onClick={(e) => {
          const perhitungan = count + 1;
          setCount(perhitungan);
        }}
      >
        +
      </button>

      <button
        className="btnReset"
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button> */}
    </div>
  );
}

export default App2;
