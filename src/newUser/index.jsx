import { useState } from "react";
import "./style.css";
import { v4 as uuidv4 } from "uuid";

function NewUser({ addUser }) {
  const [user, setUser] = useState({
    id: uuidv4(),
    img: "",
    firstName: "",
    lastName: "",
    age: "",
    from: "",
    job: "",
    gender: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(user);
  };

  return (
    <div className="modalContainer">
      <div className="modal">
        <h2>Create New User</h2>
        <form onSubmit={handleSubmit} className="modalForm">
          <label>
            <span className="modalText"> Img URL:</span>
            <input
              onChange={(e) => {
                setUser((prev) => {
                  return { ...prev, img: e.target.value };
                });
              }}
              type="url"
              required
              className="modalInput"
            />
          </label>
          <label>
            <span className="modalText"> First Name:</span>
            <input
              onChange={(e) => {
                setUser((prev) => {
                  return { ...prev, firstName: e.target.value };
                });
              }}
              type="text"
              required
              className="modalInput"
            />
          </label>
          <label>
            <span className="modalText"> Last Name:</span>
            <input
              onChange={(e) => {
                setUser((prev) => {
                  return { ...prev, lastName: e.target.value };
                });
              }}
              type="text"
              required
              className="modalInput"
            />
          </label>
          <label>
            <span className="modalText"> Age:</span>
            <input
              onChange={(e) => {
                setUser((prev) => {
                  return { ...prev, age: e.target.value };
                });
              }}
              type="number"
              required
              className="modalInput"
            />
          </label>
          <label>
            <span className="modalText"> From:</span>
            <input
              onChange={(e) => {
                setUser((prev) => {
                  return { ...prev, from: e.target.value };
                });
              }}
              type="text"
              required
              className="modalInput"
            />
          </label>
          <label>
            <span className="modalText"> Job:</span>
            <input
              onChange={(e) => {
                setUser((prev) => {
                  return { ...prev, job: e.target.value };
                });
              }}
              type="text"
              required
              className="modalInput"
            />
          </label>
          <div className="gender">
            <span className="modalText"> Gender:</span>
            <label>
              <input
                onChange={(e) => {
                  setUser((prev) => {
                    return { ...prev, gender: e.target.value };
                  });
                }}
                type="radio"
                name="gender"
                value="male"
                required
              />
              Male
            </label>
            <label>
              <input
                onChange={(e) => {
                  setUser((prev) => {
                    return { ...prev, gender: e.target.value };
                  });
                }}
                type="radio"
                name="gender"
                value="female"
                required
              />
              Female
            </label>
          </div>
          <button type="submit" className="modal-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default NewUser;
