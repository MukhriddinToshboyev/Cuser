import "./style.css";

function Users({ users, deleteUser }) {
  return (
    <div className="userList">
      {users.map((user) => {
        return (
          <div key={user.id} className="user-card">
            <img src={user.img} />
            <h3>
              {user.firstName} {user.lastName}
            </h3>
            <p>Age: {user.age}</p>
            <p>From: {user.from}</p>
            <p>Job: {user.job}</p>
            <p>gender: {user.gender}</p>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}
export default Users;
