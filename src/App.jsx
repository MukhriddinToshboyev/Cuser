import "./App.css";
import Footer from "./footer";
import Navbar from "./navbar";
import { useState } from "react";
import Users from "./usersList";
import NewUser from "./newUser";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [showModal, setShowModal] = useState(false);

  const [user, setUser] = useLocalStorage("users", []);

  const deleteUser = (id) => {
    setUser(user.filter((user) => user.id !== id));
  };

  const closeModal = (e) => {
    if (e.target.className === "modalContainer") setShowModal(false);
    if (e.key === "Escape") setShowModal(false);
  };

  const addUser = (newUser) => {
    setUser((prev) => [...prev, newUser]);
    setShowModal(false);
  };

  return (
    <div
      onClick={(e) => closeModal(e)}
      onKeyDown={(e) => closeModal(e)}
      className="App"
    >
      <Navbar user={user} />
      <main className="mainContainer">
        <div className="mainHeader">
          {user.length === 0 && <h2>No users available.</h2>}
        </div>
        <Users users={user} deleteUser={deleteUser} />
      </main>
      {showModal && <NewUser addUser={addUser} />}
      <button onClick={() => setShowModal(true)} className="creat-user">
        Create User
      </button>
      <Footer />
    </div>
  );
}

export default App;
