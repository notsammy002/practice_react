import {useState} from 'react';

export const useAPI = (intialValue) =>{
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState(intialValue);


    const fetchAPI = (api) =>{
        return api
        .then((r) => r.json())
        .then((d) => {
            setData(d)
        })
        .catch((err) =>{
            setError(true)
        })
        .finally(()=>{
            setLoading(false);
        })
    };

    const updateAPI = (api) =>{
        return api
        .then((r) => r.json())
        .then((d) =>{
            console.log(d)
            setData([...data, d]);
        })
        .catch((err) =>{
            console.log(err)
            //setError(true)
        })
    }

    const deleteTodo = (ele) =>{
        const newTodo = data.filter((check) => check.id !== ele.id);
        console.log(newTodo)
        setData(newTodo)
    }

    return {loading, error, data, fetchAPI, updateAPI, deleteTodo}
}