import React from 'react'

const SportComponents = (sport) => {
  return (
    <>
        <tr>
            <td>{sport.name}</td>
            <td>{sport.price}</td>
        </tr>
    </>
  )
}

export default SportComponents