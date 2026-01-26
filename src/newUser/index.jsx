import "./style.css";

function NewUser() {
  return (
    <div className="modalContainer">
      <div className="modal">
        <h2>Create New User</h2>
        <form className="modalForm">
          <label>
            <span className="modalText"> Img URL:</span>
            <input type="url" required className="modalInput" />
          </label>
          <label>
            <span className="modalText"> First Name:</span>
            <input type="text" required className="modalInput" />
          </label>
          <label>
            <span className="modalText"> Last Name:</span>
            <input type="text" required className="modalInput" />
          </label>
          <label>
            <span className="modalText"> Age:</span>
            <input type="number" required className="modalInput" />
          </label>
          <label>
            <span className="modalText"> From:</span>
            <input type="text" required className="modalInput" />
          </label>
          <label>
            <span className="modalText"> Job:</span>
            <input type="text" required className="modalInput" />
          </label>
          <div className="gender">
            <span className="modalText"> Gender:</span>
            <label>
              <input type="radio" name="gender" value="male" required />
              Male
            </label>
            <label>
              <input type="radio" name="gender" value="female" required />
              Female
            </label>
          </div>
          <button className="modal-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}
export default NewUser;
