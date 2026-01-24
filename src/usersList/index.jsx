import "./style.css";

function Users({ users, HandleClick }) {
  return (
    <div className="userList">
      {users.map((user) => {
        return (
          <div key={user.id} className="user-card">
            <p className="userText">{user.name}</p>
            {/* <p className="userText">{user.email}</p>
            <p className="userText">{user.phone}</p>
            <p className="userText">{user.website}</p>
            <p className="userText">{user.company.name}</p>
            <p className="userText">{user.address.city}</p> */}
            <button onClick={() => HandleClick(user.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}
export default Users;
