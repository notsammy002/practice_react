import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SportComponents from './SportComponents';

const Home = () => {
    const [sports, setSports] = useState([])
    const [searchs, setSearchs] = useState("")
    const [checked, setChecked] = useState(true)
    const [sorting, setSorting] = useState(false)
    const [error, setError] = useState(false)

    const checks = {
        isAvaiable: {
            color: "black"
        },
        NotAvaiable: {
            color: "red"
        },
    }

    useEffect(() => {
        axios.get(`http://localhost:3000/posts`)
            .then((d) => {
                console.log(d.data)
                setSports(d.data)
            })
            .catch((e) => {
                setError(true)
                console.log(e)
            })
            .finally(() => setError(false))
    }, [])

    const SearchItem = () => {
        if (searchs === "") {
            alert("Empty search")
            setSports(sports)
        }
        else {
            console.log(searchs)
            const newList = sports.filter((ele) => ele.name == searchs)
            setSports(newList)
            setSearchs("")
        }

    }

    const CheckedFilter = () => {
        setChecked(!checked)
        if (checked) {
            const newChecked = sports.filter((ele) => ele.stocked != false)
            setSports(newChecked)

        }
        else {
            setSports(sports)
        }
        
        console.log(checked)
    }

    const SortingFilter = () => {
        sports.sort(function (a, b) {
            return parseInt(a.price) - parseInt(b.price);
          });
        setSports(sports)
    }


    if (error) {
        return <div>Error</div>
    }
    else {
        return (
            <>
                <input type="text" value={searchs} onChange={(e) => setSearchs(e.currentTarget.value)} />
                <button onClick={SearchItem} >Search</button>


                <label>Remove non stocked</label>
                <input type="checkbox" onClick={() => {
                    CheckedFilter()
                }} />



                <label>Sort by price</label>
                <input type="checkbox" onClick={() => {
                    setSorting(!sorting)
                    SortingFilter()
                }} />

                <table style={{ borderSpacing: "15px" }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody >
                        {sports.map((sport) =>
                            <tr key={sport.id}>
                                <tr>
                                    <td style={sport.stocked ? checks.isAvaiable : checks.NotAvaiable}>{sport.name}</td>
                                    <td >${sport.price}</td>
                                </tr>

                            </tr>
                        )}
                    </tbody>
                </table>
            </>

        )
    }

}

export default Home