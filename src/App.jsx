import "./App.css";
import Footer from "./footer";
import Navbar from "./navbar";
import { useState } from "react";
import Users from "./usersList";
import NewUser from "./newUser";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState([]);

  const deleteUser = (id) => {
    setUser(user.filter((user) => user.id !== id));
  };
  const Close = (e) => {
    console.log(e);
  };
  const closeModal = (e) => {
    if (e.target.className === "modalContainer") setShowModal(false);
    if (e.key === "Escape") setShowModal(false);
  };

  return (
    <div
      onClick={(e) => closeModal(e)}
      onKeyDown={(e) => closeModal(e)}
      className="App"
    >
      <Navbar user={user} />
      <main className="main">
        <div className="text">
          {user.length === 0 && <h2>No users available.</h2>}
        </div>
        <Users users={user} deleteUser={deleteUser} />
      </main>
      {showModal && <NewUser />}
      <button onClick={() => setShowModal(true)} className="creat-user">
        Create User
      </button>
      <Footer />
    </div>
  );
}

export default App;
