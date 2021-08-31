import React from 'react';

const AddForm = () => {
    return (
        <form name="addTask">
            <input type="text" name="title" placeholder="Task" />
            <input type="text" name="description" placeholder="Description" />
            <input type="date" name="date" placeholder="Deadline" />
            <button type="submit">Add</button>
        </form>
    )
}

export default AddForm;