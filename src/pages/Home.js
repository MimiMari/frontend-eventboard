import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Home() {

    const [events,setEvents]=useState([])

    useEffect(() => {
        loadEvents();
        console.log("test logging")
    }, []);

    const loadEvents=async()=>{
        const result=await axios.get("http://localhost:8080/events");
        console.log(result.data)
        setEvents(result.data);
    }

  return (
    <div className="container">
      <div className='py-4'>
                {
                  events.map((event,index)=>(
                    <tr>
                      <div className="border border-dark rounded m-2 p-3">
                        <th>
                        <p key={index}>{index+1}</p>
                        <p>Title: {event.title}</p>
                        <p>Date: {event.date}</p>
                        <p>Place: {event.place}</p>
                        </th>
                        <th className="my-2">Description: {event.description}</th>
                      </div>
                    </tr>
                    ))
                }
      </div>
    </div>
  )
}
