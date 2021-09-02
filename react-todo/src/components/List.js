import React from 'react'
import { Link } from 'react-router-dom'

const List = ({ list, onShowList }) => {
    return(
        <Link onClick={() => onShowList(list)} to={`/todolist/${list.id}`}>{list.nameList}</Link>
    )
}

export default List