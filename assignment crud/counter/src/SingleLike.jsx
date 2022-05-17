import axios from 'axios'
import React, {useState} from 'react'

const SingleLike = ({ num}) => {
    const [increase, setIncrease] = useState([])

    const increaseFn = (itemToIncrease) => {
        const newTodoList = itemToIncrease.likes++
        setIncrease(newTodoList);
        console.log(increase)


        axios.put(`http://localhost:3000/likesarray/${itemToIncrease.id}`, {
            id: itemToIncrease.id,
            likes: itemToIncrease.likes,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    
    const decreaseFn = (itemToIncrease) => {
        const newTodoList = itemToIncrease.likes--
        setIncrease(newTodoList);
        console.log(increase)


        axios.put(`http://localhost:3000/likesarray/${itemToIncrease.id}`, {
            id: itemToIncrease.id,
            likes: itemToIncrease.likes,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
  return (
      <>
    <div>SingleLike</div>
    <table>
        <thead>
            <tr>
                <th>id</th>
                <th>likes</th>
                <th>edit</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                  {num.id}  
                </td>
                <td>
                   {num.likes} 
                </td>
                <td>
                    <button onClick={() => increaseFn(num)}>Increase</button>
                    <button onClick={() => decreaseFn(num)}>Decrease</button>
                </td>
            </tr>
        </tbody>
    </table> 
    </>
  )
}

export default SingleLike