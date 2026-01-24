import "./style.css";

function Users({ users, HandleClick }) {
  return (
    <div className="userList">
      {users.map((user) => {
        return (
          <div key={user.id} className="user-card">
            <button onClick={() => HandleClick(user.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}
export default Users;
