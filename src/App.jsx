import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Menu from "./components/Menu";
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  )
}

export default App;
