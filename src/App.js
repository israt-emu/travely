import { BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Switch></Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
