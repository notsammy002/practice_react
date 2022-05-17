import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SingleLike from './SingleLike';

const Likes = () => {
  const [numbers, setNumber] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/likesarray')
      .then(function (response) {
        // handle success
        //console.log(response);
        setNumber(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])
  

  return (
    <>
    <div> helloo</div>
    <div>
    { numbers.map((num) => (
        <SingleLike  key = { num.id } num = {num}/>
    ))}
    </div>
    </>
  )
}

export default Likes