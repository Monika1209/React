import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Counter from "./components/Counter";
import ThemeToggle from "./components/ThemeToggle";
import ProfileCard from "./components/ProfileCard";
import Timer from "./components/Timer";
import CartList from "./components/CartList";
import CartDetails from "./components/CartDetails";

function App() {
  return (
    <BrowserRouter>
      <ThemeToggle>
        <h1>Assignment 1</h1>
        <ProfileCard name="John Doe" age={25} location="New York" />
        <br />
        <Timer />
        <br />
        <Counter />
      </ThemeToggle>
      <Routes>
          <Route path="/" element={<CartList />} />
          <Route path="/cart/:id" element={<CartDetails />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
