import React,{useState} from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';

function Todo({todos,completeTodo,removeTodo,updateTodos}) {

    const [edit,setedit]=useState({
        id:null,
        value:''
    })

    const submitUpdate =value=>
    {
        updateTodos(edit.id,value)
        setedit({
            id:null,
            value:''
        })
    }

    if(edit.id)
    {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }
  return todos.map((todo,index)=>(
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} 
    key={index}> 


    <div key={todo.id} onClick={()=>completeTodo(todo.id)}>

        {todo.text}
    </div>

    <div className='icons'>
        <RiCloseCircleLine
        
        onClick={()=> removeTodo(todo.id)}
        className='delete-icon'
        />

        <TiEdit onClick={()=> setedit({id:todo.id,value:todo.text})}
        className='edit-icon'
        />

    </div>

    </div>
  ))
}

export default Todo
