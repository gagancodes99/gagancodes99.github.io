import React, { useEffect, useState } from 'react'

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const Timer = () => {
      const [dateTime, setDateTime] = useState(new Date());
    
    useEffect(() => {
        const interval = setInterval(() => {
          setDateTime(new Date());
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);
      const handleDate = (date)=>{
        const splitedDate = date.split('/');
        const currDate = splitedDate[0];
        const month = splitedDate[1];
        const year = splitedDate[2];
        return `${currDate} ${months[month-1]} ${year}`;
      }
  return (
    <>
        {dateTime.toLocaleTimeString()} - {handleDate(dateTime.toLocaleDateString())}
    </>
  )
}

export default Timer