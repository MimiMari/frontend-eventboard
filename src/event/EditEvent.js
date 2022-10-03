import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditEvent() {
  let navigate = useNavigate();

  const { guid } = useParams();

  const [event, setEvent] = useState({
    title: '',
    description: '',
    place: '',
    date: '',
  });

  const { title, description, place, date } = event;

  const onInputChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadEvent();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/event/${guid}`, event);
    navigate('/');
  };

  const loadEvent = async () => {
    const result = await axios.get(`http://localhost:8080/event/${guid}`);
    setEvent(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded mt-2 shadow">
          <h2 className="text-center m-4">Edit Event</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Title" className="form-label">
                Title
              </label>
              <input
                type={'text'}
                className="form-control"
                placeholder="Enter title of event"
                name="title"
                required
                value={title}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Description" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                rows="4"
                type={'text'}
                placeholder="Enter description"
                name="description"
                required
                value={description}
                onChange={(e) => onInputChange(e)}
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="Place" className="form-label">
                Place
              </label>
              <input
                type={'text'}
                className="form-control"
                placeholder="Enter location"
                name="place"
                required
                value={place}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Date" className="form-label">
                Date
              </label>
              <input
                type={'datetime-local'}
                className="form-control"
                placeholder="Choose date and time"
                name="date"
                required
                value={date}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
