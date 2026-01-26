import "./style.css";

function NewUser() {
  return (
    <div className="modalContainer">
      <div className="modal">
        <h2>Create New User</h2>
        <form>
          <label>
            <span> Name:</span>
            <input type="text" placeholder="Enter name" />
          </label>
          <label>
            <span> Email:</span>
            <input type="email" placeholder="Enter email" />
          </label>
          <button type="submit">Add User</button>
        </form>
      </div>
    </div>
  );
}
export default NewUser;
