import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h2 onClick={console.log("clicked+")}>Click+</h2>
      <h1>0</h1>
      <h2 onClick={console.log("clicked-")}>Click-</h2>
    </div>
  );
}
