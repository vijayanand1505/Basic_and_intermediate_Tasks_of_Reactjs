import { useState } from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Time } from "./components/Time";
import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Task } from "./components/Task";
import { Crud } from "./components/Crud";
import { Count } from "./Count";
import { Update } from "./components/Update";

function App() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  function hide() {
    var header = document.getElementById("Header");
    header.style.display = "none";
  }

  function show() {
    var header = document.getElementById("Header");
    header.style.display = "block";
  }

  return (
    <div className="App">
      <h1>First Program</h1>
      <Time />
      <nav>
        <ul id="mainMenu">
          <li>
            <Link to="/count">Count</Link>
          </li>
          <li>
            <Link to="/crud">Crud</Link>
          </li>
          <li>
            <Link to="/task">Task</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/task" element={<Task />} />
        <Route path="/crud" element={<Crud />} />
        <Route path="/count" element={<Count />} />
        <Route path="/update" element={<Update />} />
      </Routes>
      <button onClick={hide}>Hide</button> &nbsp;
      <button onClick={show}>Show</button> &nbsp;
      <p id="Header">This is a paragraph</p>
      <button onClick={handleClick}>Click</button> <br /> <br />
      {isShown && <Header />} <br />
      <Footer />
    </div>
  );
}

export default App;
