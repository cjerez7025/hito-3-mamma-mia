import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NavBar from "./components/Navbar";
import Pizza from "./components/Pizza";
import Footer from "./components/Footer";
// import Home from "./components/Home";
// import Cart from "./components/Cart";
// import LoginPage from "./components/LoginPage";
// import RegisterPage from "./components/RegisterPage";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      {/* <Home /> */}
      <Pizza />
      {/* <Cart /> */}
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      <Footer />
    </div>
  );
}

export default App;
