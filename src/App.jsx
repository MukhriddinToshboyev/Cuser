import "./App.css";
import Footer from "./footer";
import Navbar from "./navbar";
import { useState } from "react";
import Users from "./usersList";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState([
    {
      id: 1,
      name: "Alice",
    },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ]);

  const deleteUser = (id) => {
    setUser(user.filter((user) => user.id !== id));
  };
  return (
    <div className="Container">
      <Navbar user={user} />
      <main className="main">
        <div className="text">
          {user.length === 0 && <h2>No users available.</h2>}
        </div>
        <Users users={user} deleteUser={deleteUser} />
      </main>
      {showModal && <newUser />}
      <button onClick={() => setShowModal(true)} className="creat-user">
        Create User
      </button>
      <Footer />
    </div>
  );
}

export default App;
