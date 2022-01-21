const Todo = ({ text, todos, setTodos, todo }) => {

    const deleteHandler = () => {
        const filteredTodos = todos.filter(el => el.id !== todo.id)
        setTodos(filteredTodos)
    }

    return (
        <div className="todo">
            <li className="todo-item">
                {text}
            </li>
            <button className='complete-btn'><i className="fas fa-check"></i></button>
            <button className='trash-btn' onClick={deleteHandler}><i className="fas fa-trash"></i></button>
        </div >
    );
}

export default Todo;