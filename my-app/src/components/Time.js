import React, { useEffect } from 'react'
import { useState } from 'react'

export const Time = () => {

  const [time, setTime] = useState(new Date());
  const [formattedTime, setFormattedTime] = useState('');
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      let date = new Date();
      let hh = date.getHours();
      let mm = date.getMinutes();
      let ss = date.getSeconds();
      let session = "AM";

      if (hh === 0) {
        hh = 12;
      }
      if (hh > 12) {
        hh = hh - 12;
        session = "PM";
      }

      hh = (hh < 10) ? "0" + hh : hh;
      mm = (mm < 10) ? "0" + mm : mm;
      ss = (ss < 10) ? "0" + ss : ss;

      let formattedTime = hh + ":" + mm + ":" + ss + " " + session;
      setFormattedTime(formattedTime);

      let formattedDate = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
      setFormattedDate(formattedDate);

      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };

  });


  return (
    <div class="row">
    <div class="column">
        {/* <h1 className='time-left'>Time</h1> */}
        <h3 className='time-left'>{formattedTime}</h3>
    </div>
    <div class="column">
        {/* <h2 className='time-right'>Date</h2> */}
        <h3 className='time-right'>{formattedDate}</h3>
    </div>
    </div>
  )
}
