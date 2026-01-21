import "./App.css";
import Footer from "./footer";
import Navbar from "./navbar";
import { useState } from "react";

function App() {
  const [user, setUser] = useState([
    // {
    //   id: 1,
    //   name: "Alice",
    // },
    // { id: 2, name: "Bob" },
    // { id: 3, name: "Charlie" },
  ]);
  return (
    <div className="Container">
      <Navbar user={user} />
      <main className="main">
        <h1 className="text">{user.length === 0 && "No users available."}</h1>
      </main>
      <Footer />
    </div>
  );
}

export default App;
