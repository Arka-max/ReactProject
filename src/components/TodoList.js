import React,{useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

function TodoList() {

    const [todos,settodos]=useState([]);

    const addTodo=todo =>
    {
        if(!todo.text || /^\s*$/.test(todo.text))
        {
            return
        }

        const newtodos=[todo,...todos]

        settodos(newtodos)
     
    };

    const removeTodo=id =>
    {
        const removeArr=[...todos].filter(todo=>todo.id!==id)

        settodos(removeArr);
    }

    const updateTodos=(todoId,newValue) =>
    {
        if(!newValue.text || /^\s*$/.test(newValue.text))
        {
            return;
        }

        settodos(prev=>prev.map(item=>(item.id===todoId ? newValue: item)))

    }

    const completeTodo=id=>
    {
        let updateTodos=todos.map(todo=>{
            if(todo.id===id)
            {
                todo.isComplete=!todo.isComplete
            }

            return todo;

        })

        settodos(updateTodos);

    }
  return (
    <div>
      <h1>Whats the plan for today?</h1>
      <TodoForm onSubmit={addTodo}/>
      <Todo
      todos={todos}
      completeTodo={completeTodo}
      removeTodo={removeTodo}
      updateTodos={updateTodos} />
    </div>
  )
}

export default TodoList
