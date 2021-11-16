import React, { useState, useEffect } from "react";

const Guest = () => {
  //State
  const [currentItems, setCurrentItems] = useState([]);
  const [guests, setGuests] = useState([]);

  //side effects

  // useEffect(() => {}, [currentItems, guests]);

  return (
    <section>
      <div>
        <h3>Current Items</h3>
        {/* {currentItems.map((item)=>{
        return <p>{item.item}</p>
      })} */}
        <h3>Current Guests</h3>
        {/* {guests.map((guest) => {
          return <p>{guest.username}</p>;
        })} */}
      </div>
    </section>
  );
};

export default Guest;
