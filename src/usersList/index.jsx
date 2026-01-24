import "./style.css";

function Users({ users }) {
  return (
    <div className="userList">
      {users.map((user) => {
        return (
          <div key={user.id} className="user-card">
            <h2>{user.name}</h2>
          </div>
        );
      })}
    </div>
  );
}
export default Users;
