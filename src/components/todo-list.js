import React from 'react';
import TodoListItem from './todo-list-item';


const TodoList = ({todos}) => {
    return(
            <ul className='list-group'>
                {todos.map((item) =>{
                    return (
                    <TodoListItem {...item}/>
                    );
                })}
            </ul>
    );
}


export default TodoList;