import icon from "../assets/images/icon-sun.svg";
import light from "../assets/images/icon-moon.svg";
import ToDoForm from "./ToDoForm";
const Header = ({ addTask, toggleTheme, theme }) => {
  return (
    <header>
      <div className="container">
        <div className="app-title">
          <h1>ToDo</h1>
          <span onClick={() => toggleTheme()} style={{cursor:'pointer'}}>
            <img src={theme === "dark" ? icon : light} alt="theme-btn" />
          </span>
        </div>
        <ToDoForm addTask={addTask} />
      </div>
    </header>
  );
};

export default Header;
