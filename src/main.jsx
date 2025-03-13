import {createRoot} from "react-dom/client";
import Calculator from "./App";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


const root = createRoot(document.getElementById("root"));
root.render(<Calculator/>)