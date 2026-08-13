import Button from "../Button";

export const TodoList = ({ todoArray, setTodoArray, deleteTodo }) => {
  const toggleChange = (id) => {
    setTodoArray(
      todoArray.map((todo) => todo.id === id ? {...todo, completed: !todo.completed } : todo)
    );
  };
  return (
    <div className="todo-list-wrapper">
      <h3 style={{ color: "red" }}>Todo List</h3>
      {todoArray.length === 0 ? (
        <p className="no-todos">No todos yet. Add one above to get started.</p>
      ) : (
        <ul className="todo-list">
          {todoArray.map((todo) => (
            <li key={todo.id}>
              <span>{todo.id}. {todo.task}</span>
              <div className="todo-item-actions">
               <span onClick={() => toggleChange(todo.id)} style={{ cursor: "pointer" }}>
                
            {todo.completed ? "✅" : "❌"}
            
        </span>
        

                <Button
                  className="todo-delete-button"
                  text="Delete"
                  alertme={() => deleteTodo(todo.id)}
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}