import React from 'react';

const TaskForm = (props) => {

    const sendForm = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        let contact = Object.fromEntries(formData.entries())

        props.onSubmit({
            title: contact.title, 
            done: false, 
            description: contact.description, 
            date: new Date(contact.date), 
            id: 10
        })
    }



    return (
        <form name="addTask" onSubmit={sendForm}>
            <input type="text" name="title" placeholder="Task" />
            <input type="text" name="description" placeholder="Description" />
            <input type="date" name="date" placeholder="Deadline" />
            <button type="submit">Add</button>
        </form>
    )
}

export default TaskForm;