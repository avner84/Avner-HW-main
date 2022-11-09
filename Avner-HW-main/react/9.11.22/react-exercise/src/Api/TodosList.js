import TodoItem from "./TodoItem"


export default function TodoList(props) {
    const todos = props.todos
    return (
        <div className={props.todosListsClassName}>
            {todos.map((todo) => {
                return (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                    />
                )
            })}
        </div>
    )
}


