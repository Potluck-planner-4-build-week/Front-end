import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../GlobalStyles.css";
import styled from "styled-components";
import axios from "axios";

const StyledDashboard = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: black;
  align-items: center;
  
  form{
    display: inline-block;
    height: 120px;
  }
  
  button {
    font-size: 2rem;
  }

  h2 {
    line-height: 8rem;
  }
  
  .styledButton {
    width: 200px;
  }

  @media (min-width: 700px){
    button {
      font-size: 2.5rem;
    }

    h2 {
      margin: none;
      padding: 50px 0 0 0;
    }
  }
`;

const myPotlucks = [
  {
    meetingId: "11",
    meetingName: "Foodapaloosa",
    people: [
      {username:"Abe123", item: "spaghetti", role: "organizer", confirmed: false}, 
      {username:"Gabe234", item: "cookies", role: "guest", confirmed: false},
      {username:"Sal123", item: "biscuits", role: "guest", confirmed: false},
      {username:"Phil2", item: "ratatouille", role: "guest", confirmed: false}
    ],
    items: ["spaghetti", "cookies", "biscuits", "pretzels", "ratatouille", "soda", "crackers", "cookies" ],
    date: "11/19/2021",
    time: "12PM-1PM",
    location: "McArthur Park",
    confirmed: false
  },
  {
    meetingId: "12",
    meetingName: "Feast Fest",
    people: [
      {username:"Abe123", item: "apricots", role: "guest", confirmed: false}, 
      {username:"Gabe234", item: "bread bowls", role: "guest", confirmed: false},
      {username:"Sal123", item: "chowder", role: "guest", confirmed: false},
      {username:"Phil2", item: "turkey", role: "organizer", confirmed: false}
    ],
    items: ["turkey","chowder","bread bowls","apricots", "ratatouille", "soda", "crackers", "cookies" ],
    date: "11/26/2021",
    time: "11AM-12PM",
    location: "BJHS staff lounge",
    confirmed: false
  },
  {
    meetingId: "13",
    meetingName: "Feast Fest",
    people: [
      {username:"Abe123", item: "apricots", role: "guest", confirmed: false}, 
      {username:"Gabe234", item: "bread bowls", role: "guest", confirmed: false},
      {username:"Sal123", item: "chowder", role: "guest", confirmed: false},
      {username:"Phil2", item: "turkey", role: "organizer", confirmed: false}
    ],
    items: [ "turkey","chowder","bread bowls","apricots", "ratatouille", "soda", "crackers", "cookies" ],
    date: "11/26/2021",
    time: "11AM-12PM",
    location: "BJHS staff lounge",
    confirmed: false,
  },
  {
    meetingId: "14",
    meetingName: "Feast Fest",
    people: [
      {username:"Phil2", item: "turkey", role: "organizer", confirmed: false},
      {username:"Abe123", item: "apricots", role: "guest", confirmed: false}, 
      {username:"Gabe234", item: "bread bowls", role: "guest", confirmed: false},
      {username:"Sal123", item: "chowder", role: "guest", confirmed: false}
    ],
    items: [ "turkey","chowder","bread bowls","apricots","ratatouille", "soda", "crackers", "cookies" ],
    date: "11/26/2021",
    time: "11AM-12PM",
    location: "BJHS staff lounge",
    confirmed: false,
  },
];

const userLoggedIn = "Phil2";

const initialUserItems = myPotlucks.map(p => {
  return { 
    item: p.people.find(p => p.username === userLoggedIn).item,
    id: p.meetingId 
  }
})
    
const Dashboard = () => {

  //state
  const [myPotluckData, setMyPotluckData] = useState(myPotlucks);
  const [confirmed, setConfirmed] = useState(false);
  const [confirmText, setConfirmText] = useState("");
  const [userItems, setUserItems] = useState(initialUserItems);
  const [hidden, setHidden] = useState(true);
  const [detailsClass, setDetailsClass] = useState("");

  useEffect(() => {
    confirmed
      ? setConfirmText("Not Going? Cancel")
      : setConfirmText("Confirm You're Going!");
  }, [confirmed]);

  const confirmClick = (e) => {
    e.preventDefault();
    setConfirmed(!confirmed);
  };

  useEffect(() => {
    hidden ? setDetailsClass("") : setDetailsClass("hidden");
  }, [hidden]);

  const detailsClick = (e) => {
    e.preventDefault();
    setHidden(!hidden);
  };

  const selectUserItem = (e) => {
    const newUserItems = [...userItems];
    const optionIdx = userItems.indexOf(userItems.find( i => i.id === e.target.id));
    newUserItems[optionIdx].item = e.target.value
    setUserItems(newUserItems);
  }

  const changeItem = (e) => {
    e.preventDefault();
    const currentPotluck = myPotluckData.find( p => p.meetingId === e.target.name)
    const currPotIdx = myPotluckData.indexOf(currentPotluck);
    const currentUser = currentPotluck.people.find( p => p.username === userLoggedIn)
    const currUsrIdx = currentPotluck.people.indexOf(currentUser);
    let newPotluckData = [...myPotluckData];
    const selectedItem = userItems.find( i => i.id === e.target.name).item;
    newPotluckData[currPotIdx]["people"][currUsrIdx]["item"] = selectedItem;
    
    setMyPotluckData(newPotluckData);    
    
    axios.post('https://reqres.in/api/users', myPotluckData)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <StyledDashboard>
      <h1 className="pageTitle">Dashboard</h1>
      
      <Link to="/potluck/create">
        <button className="newPotLuck-button">Create New Potluck</button>
      </Link>
      
      <h2>My Potlucks</h2>

      <section id="myPotlucks" className="mtg-container">
      
          {
           
            myPotluckData.map( potluck => {
              return (

              <div className="meeting" key={`meeting ${potluck["meetingId"]}`} name={potluck.meetingId}>
                <div className="info">
                  <h3 className="potluckName">{`${potluck["meetingName"]}`}</h3>
                  
                  <ul>
                    
                    <form name={potluck.meetingId}>
                      <li>I'm bringing: {potluck.people.find(p => p.username === userLoggedIn).item}</li>
                      <select 
                        id={potluck.meetingId} 
                        onChange={selectUserItem}
                        name={potluck.meetingId}
                      > 
                       
                        {
                        potluck.items.filter( item => {
                          return !potluck.people.map( person => person.item).includes(item)
                          }
                          ).map( item => {
                          return (
                            <option name={item} key={`${item}-${potluck["meetingId"]}`}>
                              {item}
                            </option>
                          );
                        })}

                      </select>
                      <button name={potluck.meetingId} className="styledButton" onClick={changeItem}>Change Your Item</button>
                    </form>
                    <li>Role: {`${potluck.people.filter(p => p.username === userLoggedIn)[0].role}`}</li>
                    <li>Date: {`${potluck["date"]}`}</li>
                    <li>Time: {`${potluck["time"]}`}</li>
                    <li>Location: {`${potluck["location"]}`}</li>
                    <li><button name={potluck.meetingId} className={ `styledButton ${detailsClass}`} onClick={detailsClick}>Details</button></li>
                  </ul>

                <ul className={ hidden? "hidden" : ""} onClick={detailsClick}>
                  {potluck["people"].filter(person => person.username !== userLoggedIn).map( person => {
                    return(
                      <li key={`${person["username"]}-${potluck["meetingId"]}`}>{`${person["username"]}`} is bringing {`${person["item"]}`}</li>
                    )
                  })}
                </ul>

                <ul className={hidden ? "hidden" : ""} onClick={detailsClick}>
                  {potluck["people"].map((person) => {
                    return (
                      <li className={`${person["username"]}`}>
                        {`${person["username"]}`} is bringing{" "}
                        {`${person["item"]}`}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="alert">
                <button className="styledButton" onClick={confirmClick}>
                  {`${confirmText}`}
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </StyledDashboard>
  );
};

export default Dashboard;
