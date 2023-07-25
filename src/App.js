import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Keyboard from "./components/Keyboard.js/Keyboard";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Keyboard />
    </div>
  );
}
export default App;
