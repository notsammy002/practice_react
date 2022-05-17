import React, { useState } from 'react'

const TodoChecked = ({ value, deleteTodo }) => {
    const [checks, setChecked] = useState(false)
    const [isEdit, setIsEdit] = useState(false)

    const lists = {
        Active: {
            listStyle: 'none',
            backgroundColor: 'orange'
        },
        Inactive: {
            listStyle: 'none',
            backgroundColor: 'grey'
        },
    }


    return (
        <li style={checks ? lists.Active : lists.Inactive} onClick={() => {
            setChecked(!checks)
        }}>
            {
                isEdit ? (
                    <>
                    <input type="text" />
                    <button onClick={() => setIsEdit(!isEdit)} >Cancel</button>
                    </>
                ) : 
                (
                    <>
                        <span>{value.tasks}</span>
                        <button onClick={() => setIsEdit(!isEdit)} >Edit</button>
                        <button onClick={() => deleteTodo(value)} >Delete</button>
                    </>
                )
            }

        </li>
    )
}

export default TodoChecked

{/* <li >{todo.tasks}</li> */ }