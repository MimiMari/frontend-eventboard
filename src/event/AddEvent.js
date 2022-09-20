import React from 'react'

export default function AddEvent() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p4 mt-2 shadow'>
                <h2 className='text-center m-4'>Add Event</h2>
                <div className='mb-3'>
                    <label htmlFor='Title' className='form-label'>
                        Title
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder='Enter the title of the event'
                    name='title'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='Description' className='form-label'>
                        Description
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder='Enter the description'
                    name='description'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='Place' className='form-label'>
                        Place
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder='Enter the location'
                    name='place'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='Date' className='form-label'>
                    Date
                    </label>
                    <input
                    type={"datetime-local"}
                    className="form-control"
                    placeholder='Enter the date'
                    name='date'/>
                </div>
                <button type='submit' className='btn btn-outline-primary'>
                    Submit
                </button>
                <button type='submit' className='btn btn-outline-danger mx-2'>
                    Cancel
                </button>
            </div>
        </div>

    </div>
  )
}
