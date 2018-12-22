import React from 'react';


const TodoListItem = ({text}) =>{
    return(
        <li className='list-group-item'>{text}</li>
    );
}

export default TodoListItem;