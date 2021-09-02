import React from 'react'

const List = ({ list, onShowList }) => {
    return(
        <a onClick={() => onShowList(list)}>{list.nameList}</a>
    )
}

export default List