import React from 'react';
import { Button } from 'reactstrap';

import './toDoItem.css';

const ToDoItem = ({description, complited, handleChange, handleDelete}) => {
    const resolvedClass = {
        textDecoration: 'line-through'
    }

    return (
        <div className="todo-item">
            <div className="description-wrapper">
                <p style={complited === true ? resolvedClass : {}}>{description}</p>
            </div>

            <div className="input-wrapper">
                <input type="checkbox" defaultChecked={complited} onChange={handleChange} />

                <Button outline color="danger" size="sm" type="button" className="btn" onClick={handleDelete}>Удалить</Button>
            </div>

                

        </div>
    );
}

export default ToDoItem;