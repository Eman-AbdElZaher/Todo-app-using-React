import "./App.css";
import data from "./assets/Data.json";
import Header from "./components/header";
import ToDoList from "./components/TodoList";
import { useState,useEffect } from "react";
const App = () => {

  const Tasks = localStorage.getItem('Tasks') ? JSON.parse(localStorage.getItem('Tasks')) : [...data];
  const [toDoList, setToDoList] = useState(Tasks);
  const [theme, setTheme] = useState("dark");
  const [filterType, setfilterType] = useState("All");

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('Tasks',JSON.stringify(toDoList));
  }, [theme,toDoList])

  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const updateFilterType = (selected) => {
    setfilterType(selected);
  };
  const handleActive = () => {
    let filtered = toDoList.filter((task) => {
      return !task.complete;
    });
    setToDoList(filtered);
  };
  const handleCompleted = () => {
    let TasksList = [...toDoList];
    setToDoList(TasksList.filter((task) => task.complete));
  };
  const handleDelete = (id) => {
    const TasksList=[...toDoList];
    setToDoList(TasksList.filter((task) => task.id !== parseInt(id)));
  };

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [
      ...copy,
      { id: Date.now(), task: userInput, complete: false },
    ];
    setToDoList(copy);
  };
  const updateItems = (updatedList) => {
    setToDoList(updatedList);
  }
  return (
    <main>
      <Header addTask={addTask} toggleTheme={toggleTheme} theme={theme} />
      <ToDoList
        toDoList={toDoList}
        handleToggle={handleToggle}
        handleFilter={handleActive}
        handleDelete={handleDelete}
        handleCompleted={handleCompleted}
        filterType={filterType}
        handleFilterType={updateFilterType}
        updateItems={updateItems}
      />
    </main>
  );
};
export default App;
