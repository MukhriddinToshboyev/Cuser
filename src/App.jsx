import "./App.css";
import Footer from "./footer";
import Navbar from "./navbar";
// import { useState } from "react";

function App() {
  // const [user, setUser] = useState([]);
  return (
    <div className="Container">
      <Navbar />
      <main>
        <h1>Welcome to the App Component</h1>
      </main>
      <Footer />
    </div>
  );
}

export default App;
