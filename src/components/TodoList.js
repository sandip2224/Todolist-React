import Todo from './Todo';

const TodoList = ({ setTodos, filteredTodos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {
                    filteredTodos.map(todo => {
                        return (<Todo
                            text={todo.text}
                            todos={todos}
                            setTodos={setTodos}
                            key={todo.id}
                            todo={todo}
                        />)
                    })
                }
            </ul>
        </div>
    );
}

export default TodoList;