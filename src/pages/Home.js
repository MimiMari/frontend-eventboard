import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';

export default function Home() {
  const [events, setEvents] = useState([]);
  //const [error, setErrors] = useState('');

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    const result = await axios.get('http://localhost:8080/events');
    console.log(result.data);
    setEvents(result.data);
    // .catch(e => setErrors(e.message));
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
              <button className="btn btn-primary mx-2">View</button>
              <button className="btn btn-outline-primary mx-2">Edit</button>
              <button className="btn btn-outline-danger mx-2">Delete</button>
            </div>
          </div>
        </tr>
      ))}
    </div>
  );
}
