import "./style.css";

function Users({ users, deleteUser }) {
  return (
    <div className="userList">
      {users.map((user) => {
        return (
          <div key={user.id} className="user-card">
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}
export default Users;
