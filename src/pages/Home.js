import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Home.css';

export default function Home() {

    const [events,setEvents]=useState([])

    useEffect(() => {
        loadEvents();
    }, []);

    const loadEvents=async()=>{
        const result=await axios.get("http://localhost:8080/events");
        console.log(result.data)
        setEvents(result.data);
    }

    // handleEndDateChange = (event) => {
    //   event.date = event.target.value.replace('T', ' ');
    // }

  //   const splitDate = (date) => {
  //     return date.split("",10)
  // }

  // <p>Date:    {splitDate(props.stock.date)}</p>

   

  return (
    <div className="gallery">
                {
                  events.map((event,index)=>(
                    <tr>
                      <div className="card">
                          <div className="row">
                            <div className="col">
                              <div className="collumn">
                               <p key={index}>{index+1}</p>
                               <p>Title: {event.title}</p>
                               <p>Date: {event.date}</p>
                               <p>Place: {event.place}</p>
                             </div>
                            </div>
                            <div className="col align-self-center">
                             <div className="description">
                              Description: 
                             <p>{event.description}</p>
                            </div>
                          </div>                           
                        </div>
                      </div>
                    </tr>
                    ))
                }
      </div>
  )
}
