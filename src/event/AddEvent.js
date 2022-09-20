import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddEvent() {

    let navigate=useNavigate()

    const [event,setEvent]=useState({
        title:"",
        description:"",
        place:"",
        date:""
    });

    const{title,description,place,date}=event;

    const onInputChange=(e)=>{
        setEvent({...event,[e.target.name]:e.target.value})
    };

    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/event",event)
        navigate("/")
    };

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p4 mt-2 shadow'>
                <h2 className='text-center m-4'>Add Event</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className='mb-3'>
                    <label htmlFor='Title' className='form-label'>
                        Title
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder='Enter the title of the event'
                    name='title'
                    value={title}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='Description' className='form-label'>
                        Description
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder='Enter the description'
                    name='description'
                    value={description}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='Place' className='form-label'>
                        Place
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder='Enter the location'
                    name='place'
                    value={place}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='Date' className='form-label'>
                    Date
                    </label>
                    <input
                    type={"datetime-local"}
                    className="form-control"
                    placeholder='Enter the date'
                    name='date'
                    value={date}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <button type='submit' className='btn btn-outline-primary'>
                    Submit
                </button>
                <Link className='btn btn-outline-danger mx-2' to="/">
                    Cancel
                </Link>
              </form>
            </div>
        </div>

    </div>
  )
}
