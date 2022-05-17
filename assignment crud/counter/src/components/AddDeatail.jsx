import React, { useState } from 'react';
import axios from 'axios';

const AddDeatail = () => {
    const [formdata, setFormdata] = useState({});

    const onChangedetail = (e) => {
        const { name, value } = e.currentTarget;
        console.log(name, value)

        setFormdata({
            ...formdata,
            [name]: value
        })
    }

    const onSubmitform = () => {
        axios.post('http://localhost:3000/comments', formdata)
            .then(response => {
                console.log(response)
                setFormdata({})
            })
            .catch(error => {
                this.setState({ errorMessage: error.message });
                console.error('There was an error!', error);
            });
    }
    return (
        <>
            <h4>Please fill the formm to add detail</h4>
            <form onSubmit={onSubmitform}>
                <div>
                    <label>Sr no.</label>
                    <input
                        type="number"
                        name="id"
                        value={formdata.id}
                        placeholder='Enter the id'
                        onChange={onChangedetail}
                        required
                    />
                </div>

                <div>
                    <label>name</label>
                    <input
                        type="text"
                        name="name"
                        value={formdata.name}

                        placeholder='Enter the text'
                        onChange={onChangedetail}
                        required
                    />
                </div>

                <div>
                    <label>username</label>
                    <input
                        type="text"
                        name="address"
                        value={formdata.username}

                        placeholder='Enter the username'
                        onChange={onChangedetail}
                    />
                </div>

                <div>
                    <label>company name</label>
                    <input
                        type="text"
                        name="company"
                        value={formdata.companyname}

                        placeholder='Enter the id'
                        onChange={onChangedetail}
                    />
                </div>

                <button type='submit'>submit</button>
            </form>
        </>
    )
}


export default AddDeatail