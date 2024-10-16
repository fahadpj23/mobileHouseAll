import "./App.css";
import PageRoutes from "./pageRoutes";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div>
      <PageRoutes />
    </div>
  );
}

export default App;
