import React from 'react'

const List = ({ list, onCheckList }) => {
    return(
        <a onClick={() => onCheckList(list)}>{list.nameList}</a>
    )
}

export default List;