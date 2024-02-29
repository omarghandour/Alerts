import LSide from "./components/LSide";
import Middle from "./components/Middle";
import RSide from "./components/RSide";

function App() {
  return (
    <div className="app">
      <LSide />
      <div className="con">
        <Middle />
        <RSide />
      </div>
    </div>
  );
}

export default App;
