import "./styles.css";

const Header = () => {
  return (
    <div className="container">
      <div className="header-title">
        <a href="/" className="header-logo">
          <img
            src="https://cdn-icons-png.flaticon.com/512/7692/7692809.png"
            alt="Main Logo"
          />
          <h1>My TodoList</h1>
        </a>
      </div>
      <div>React</div>
    </div>
  );
};

export default Header;
