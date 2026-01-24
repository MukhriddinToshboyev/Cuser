import "./App.css";
import Footer from "./footer";
import Navbar from "./navbar";
import { useState } from "react";
import Users from "./usersList";

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
        <div className="text">
          {user.length === 0 && <h2>No users available.</h2>}
        </div>
        <Users users={user} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
