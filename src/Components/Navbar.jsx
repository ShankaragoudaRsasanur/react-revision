function Navbar(props) {
  return (
    <nav>
      <h2>{props.title}</h2>
      <p>Welcome, {props.username}</p>
      <a href="#">Home</a>{" | "}
      <a href="#">Notes</a>{" | "} 
      <a href="#">About</a>{" | "}
      
    </nav>
  );
}

export default Navbar;