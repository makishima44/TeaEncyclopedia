import "./App.css";
import { Button } from "./components/Button";

import { Header } from "./components/Header";
import { NavMenu } from "./components/NavMenu";
import { TeaBlock } from "./components/TeaBlock";

function App() {
  return (
    <div className="App">
      <Header />
      <NavMenu />
      <TeaBlock />
    </div>
  );
}

export default App;
