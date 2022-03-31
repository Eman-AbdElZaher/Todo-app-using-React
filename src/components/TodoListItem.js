import rmvIcon from '../assets/images/icon-cross.svg';
const TodoItem = ({todo, handleToggle,handleDelete}) => {

  const handleClick = (e) => {
    e.preventDefault()
    handleToggle(e.currentTarget.parentNode.id)
  }
  const handleDeleteClick = (e) =>{
    e.preventDefault()
    handleDelete(e.currentTarget.parentNode.id);
  }
    return ( 
         <li id={todo.id} className={todo.complete ? "list-item completed" : "list-item"}>
         <div className="item-check-wrapper" onClick={handleClick}><div className="item-check "></div></div>
         <p>{todo.task}</p>
         <span onClick={handleDeleteClick} className='delete'><img src={rmvIcon} alt='remove icon'/></span>
       </li>
     );
}
 
export default TodoItem;