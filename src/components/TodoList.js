import TodoItem from "./TodoListItem";
const ToDoList = ({ toDoList, handleToggle, handleFilter,handleDelete,filterType,handleFilterType }) => {
   
  const renderedList = toDoList.map((todo) => {
    return (
      <TodoItem 
      key={todo.id}
      todo={todo}
      handleToggle={handleToggle}
      handleFilter={handleFilter}
      handleDelete={handleDelete} />
    )
  })

  const renderedListActive = toDoList.map((todo) => {
    if (todo.complete) return ''
    return (
      <TodoItem 
      key={todo.id}
      todo={todo}
      handleToggle={handleToggle}
      handleFilter={handleFilter}
      handleDelete={handleDelete}
      />
    )
  })

  const renderedListCompleted = toDoList.map((todo) => {
    if (!todo.complete) return ''
    return (
      <TodoItem 
       key={todo.id}
       todo={todo}
       handleToggle={handleToggle}
       handleFilter={handleFilter}
       handleDelete={handleDelete}/>
    )
  })

  const renderFilteredList = () => {
    if (filterType === 'Active') return renderedListActive
    else if (filterType === 'completed') return renderedListCompleted
    else return renderedList
  }

  const handleListCount = () => {
    let copy = [...toDoList];
    let filteredCount = copy.filter((task) => !task.complete).length;
    return filteredCount > 1 ? `${filteredCount} Items Left` : `item left`;
  };
  return (
    <div className="list-container">
      <div className="container items-list">
        <ul className="list">
        { renderFilteredList() }
        </ul>
        <div className="todo-setting">
          <span>{handleListCount()}</span>
          <div className="switch">
            <span className={filterType === 'All'?'active':''} onClick={()=>handleFilterType('All')}>All</span>
            <span className={filterType === 'Active'?'active':''} onClick={()=>handleFilterType('Active')}>Active</span>
            <span className={filterType === 'completed'?'active':''} onClick={()=>handleFilterType('completed')}>completed</span>
          </div>
          <span onClick={handleFilter}>clear Completed</span>
        </div>
      </div>
      <div className="container mobile-filter-option">
      <span className={filterType === 'All'?'active':''} onClick={()=>handleFilterType('All')}>All</span>
            <span className={filterType === 'Active'?'active':''} onClick={()=>handleFilterType('Active')}>Active</span>
            <span className={filterType === 'completed'?'active':''} onClick={()=>handleFilterType('completed')}>completed</span>
      </div>
    </div>
  );
};

export default ToDoList;
