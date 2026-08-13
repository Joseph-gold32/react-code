import Button from "../Button";

export const TodoInput = ({task, setTodoArray, todoArray, setTask}) => {
  const addTodo = () => {
    if (task.trim() === "") {
      return alert("Cannot add an empty value")
    }
    setTodoArray([...todoArray, { task, id: todoArray?.length + 1, completed: false }])
    setTask('')
    console.log(todoArray)
  }
  
  return (
    <div className="todo-form">
      <input
        className="todo-input"
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="ENTER YOUR PREFERED TEXT..."
      />
      <Button className="todo-button" text="ADD" alertme={addTodo} />
    </div>
  )
}