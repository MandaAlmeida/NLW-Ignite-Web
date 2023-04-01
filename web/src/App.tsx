import { Outlet } from "react-router-dom";
import { Home } from "./Pages/Home";

function App() {
  return (
    <div>
      <Home />
      <Outlet />
    </div>
  );
}

export default App;
