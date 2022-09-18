import "./styles.css";
import Cardlist from "./components/Cardlist";

export default function App() {
  return (
    <div className="App">
      <div className="container-fluid my-5">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/1024px-Breaking_Bad_logo.svg.png"
          width="200px"
          alt=""
        />
      </div>
      <hr />
      <Cardlist />
    </div>
  );
}
