import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AddDeatail from './AddDeatail'


const Table = () => {
  const [data, setData] = useState([])
  const [pageNumber, setPageNumber] = useState(1)
  useEffect(() => {
    axios.get(`http://localhost:3000/user?_page=${pageNumber}&_limit=3`)
      .then((d) => {setData(d.data)})
      .catch(function (error) {
        // handle error
        console.log(error);
      })

  }, [pageNumber])


  return (
    <>

      <h2>Table</h2>
      <table>
        <tr>
          <th>S. No.</th>
          <th>Name</th>
          <th>Username</th>
          <th>Company Name</th>
          <th>Company Catch Phrase</th>
          <th>Street</th>
          <th>Zip Code</th>
          <th>City</th>
        </tr>


        {data.map(repo =>
          <tr key={repo.id}>
            <td>{repo.id}</td>
            <td>{repo.name}</td>
            <td>{repo.username}</td>
            <td>{repo.company.name}</td>
            <td>{repo.company.catchPhrase}</td>
            <td>{repo.address.street}</td>
            <td>{repo.address.zipcode}</td>
            <td>{repo.address.city}</td>
          </tr>
        )}

      </table>
      <button onClick={() => {
        if (pageNumber > 1) {
          setPageNumber(pageNumber - 1)
        }
      }} >Previous Page</button>
      <button onClick={() => {
        setPageNumber(pageNumber + 1)
      }} >Next Page</button>
    </>
  )
}

export default Table


