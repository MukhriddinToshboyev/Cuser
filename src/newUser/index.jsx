import "./style.css";

function NewUser() {
  return (
    <div className="newUserContainer">
      <div className="newUserForm">
        <h2>Create New User</h2>
        <form>
          <label>Name:</label>
          <input type="text" placeholder="Enter name" />
          <label>Email:</label>
          <input type="email" placeholder="Enter email" />
          <button type="submit">Add User</button>
        </form>
      </div>
    </div>
  );
}
export default NewUser;
