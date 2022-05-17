import React, {useState, useEffect} from 'react';
import axios from 'axios';

const TableFilter = () => {
    const [datas, setDatas] = useState([])
    const columns = datas[0] && Object.keys(datas[0])
    useEffect(()=>{
        axios.get(`http://localhost:3000/posts?_limit=10`)
        .then(res => setDatas(res.data))
        .catch(err => console.log(err))
    },[])
  return (
      <>
    <div>TableFilter</div>
    <table cellPadding={1} cellSpacing={10}>
        <thead>
            <tr>{datas[0] && columns.map((heading) => <th>{heading}</th>)}</tr>
        </thead>
        <tbody>
            {datas.map(row =>
                <tr>
                    { columns.map(column => <td>{row[column]}</td>)}
                </tr>
                )}
        </tbody>
    </table>
    </>
  )
}

export default TableFilter