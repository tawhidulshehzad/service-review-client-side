import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Router/Routes/Routes";

function App() {
  return (
    <div style={{ width: "1280px" }} className="m-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
