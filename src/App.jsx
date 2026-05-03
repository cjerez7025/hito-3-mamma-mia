import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NavBar from "./components/Navbar";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
// import Home from "./components/Home";
// import LoginPage from "./components/LoginPage";
// import RegisterPage from "./components/RegisterPage";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      {/* <Home /> */}
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      <Cart />
      <Footer />
    </div>
  );
}

export default App;
