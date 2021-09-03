import React from 'react'
import { Link } from 'react-router-dom';

// onClick={() => onTodayTasks(new Date())


const GoToDate = ({onTodayTasks}) => {

    const sendForm = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target);
        let newDate = Object.fromEntries(formData.entries())
        newDate = new Date(newDate.date)
        onTodayTasks(newDate)
        
    }

    return (
        <form className="goToDate" onSubmit={sendForm}>
            <input type="date" name="date" />
            <button type="submit" className="goButton">Go To Date</button>
        </form>
    )
}

export default GoToDate;

// onClick={() => onTodayTasks(new Date())}
// <Link type="submit" className="goButton" to={`/go-to-date-tasks`}  >Go To Date</Link>
