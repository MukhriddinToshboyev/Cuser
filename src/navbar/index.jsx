import "./style.css";
function Navbar({ user }) {
  return (
    <div className="Navbar-container">
      <h1 className="Navbar-title">Cuser</h1>
      <h1>
        {" "}
        {user.length > 0 ? "You have:" + " " + user.length : "No users :("}
      </h1>
    </div>
  );
}
export default Navbar;
