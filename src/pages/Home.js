import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';
import { Link, useParams } from 'react-router-dom';

export default function Home() {
  const [events, setEvents] = useState([]);
  //const [error, setErrors] = useState('');

  const { guid } = useParams();

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    const result = await axios.get('http://localhost:8080/events');
    console.log(result.data);
    setEvents(result.data);
    // .catch(e => setErrors(e.message));
  };

  const deleteEvent = async (guid) => {
    await axios.delete(`http://localhost:8080/event/${guid}`);
    loadEvents();
  };

  return (
    <div className="gallery">
      {/* <h1>{error}</h1> */}
      {events.map((event) => (
        <tr>
          <div className="card border rounded shadow">
            <div className="container ">
              <div className="row">
                <div className="col-4 align-self-center text-left">
                  <div className="event-info">
                    <p>{event.title}</p>
                    <br />
                    <p>{event.place}</p>
                    <br />
                    <p>{event.date}</p>
                  </div>
                </div>
                <div className="col align-self-center">
                  <div className="event-description">
                    <p>{event.description}</p>
                  </div>
                </div>
              </div>
              <Link
                className="btn btn-outline-secondary mx-2"
                to={`/editevent/${event.guid}`}
              >
                Edit
              </Link>
              <button
                className="btn btn-outline-danger mx-2"
                onClick={() => deleteEvent(event.guid)}
              >
                Delete
              </button>
            </div>
          </div>
        </tr>
      ))}
    </div>
  );
}
