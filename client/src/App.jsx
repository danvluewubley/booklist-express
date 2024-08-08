import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import CreateBook from "./pages/CreateBook";
import Booklist from "./pages/Booklist";
import Logout from "./pages/Logout";

function App() {
  return (
    <div className="w-screen h-screen">
      <Router>
        <Link to="/">Home Page</Link>
        <Link to="/login">Login</Link>
        <Link to="/registration">Registration</Link>
        <Link to="/book">Add book</Link>
        <Link to="/booklist">Booklist</Link>
        <Link to="/logout">Logout</Link>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
          <Route path="/book" element={<CreateBook />}></Route>
          <Route path="/booklist" element={<Booklist />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
