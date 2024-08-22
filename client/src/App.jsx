import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import CreateBook from "./pages/CreateBook";
import Booklist from "./pages/Booklist";
import Logout from "./pages/Logout";
import Navbar from "./components/Navbar";
import PersonalBooklist from "./pages/PersonalBooklist";
import Book from "./pages/Book";
import "./index.css";

function App() {
  return (
    <div className="grid grid-rows-[auto_1fr] w-screen h-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
          <Route path="/book" element={<CreateBook />}></Route>
          <Route path="/booklist" element={<Booklist />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/personal" element={<PersonalBooklist />}></Route>
          <Route path="/book/:id" element={<Book />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
