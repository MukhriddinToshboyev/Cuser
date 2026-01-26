import "./style.css";

function Users({ users, deleteUser }) {
  return (
    <div className="userList">
      {users.map((user) => {
        return (
          <div key={user.id} className="userCard">
            <img src={user.img} />
            <h3>
              {user.firstName} {user.lastName} {user.age} age
            </h3>
            <p>From: {user.from}</p>
            <p>Job: {user.job}</p>
            <p>gender: {user.gender}</p>
            <button
              className="userCardDelete"
              onClick={() => deleteUser(user.id)}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
export default Users;
