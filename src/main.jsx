import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {Toaster} from "react-hot-toast"

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <main className="max-w-screen-lg w-full mx-auto flex justify-between items-center">
    <App />
    <Toaster/>
    </main>
  </>
);
