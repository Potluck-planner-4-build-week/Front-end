import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import "../GlobalStyles.css";
import styled from "styled-components";
import CreatePotluckPage from "./CreatePotluckPage";
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

`

const myPotlucks = [ 
  {
    meetingId: 11,
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
    userRole: "guest",
    confirmed: false
  },
  {
    meetingId: 12,
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
    userRole: "organizer",
    confirmed: false
  },
  {
    meetingId: 13,
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
    userRole: "organizer",
    userItem: "turkey",
    confirmed: false
  },
  {
    meetingId: 14,
    meetingName: "Feast Fest",
    people: [
      {username:"Abe123", item: "apricots", role: "guest", confirmed: false}, 
      {username:"Gabe234", item: "bread bowls", role: "guest", confirmed: false},
      {username:"Sal123", item: "chowder", role: "guest", confirmed: false},
      {username:"Phil2", item: "turkey", role: "organizer", confirmed: false}
    ],
    items: [ "turkey","chowder","bread bowls","apricots","ratatouille", "soda", "crackers", "cookies" ],
    date: "11/26/2021",
    time: "11AM-12PM",
    location: "BJHS staff lounge",
    userItem: "turkey",
    confirmed: false
  }
]

const userLoggedIn = "Phil2";

const Dashboard = () => {
  const [confirmed, setConfirmed] = useState(false);
  const [confirmText, setConfirmText] = useState("");
  const [userItem, setUserItem] = useState("");
  const [hidden, setHidden] = useState(true);
  const [detailsClass, setDetailsClass] = useState("");
 
  useEffect(() => {
    confirmed? setConfirmText("Not Going? Cancel") : setConfirmText("Confirm You're Going!");
  }, [confirmed]);
  
  const confirmClick = (e) => {
    e.preventDefault();
    setConfirmed(!confirmed);
  }
  
  useEffect(() => {
    hidden? setDetailsClass("") : setDetailsClass("hidden");
  }, [hidden]);

  const detailsClick = (e) => {
    e.preventDefault();
    setHidden(!hidden);
  }

  const SelectUserItem = (e) => {
    useEffect(() => {
      setUserItem(e.target.name);
      
    }, [userItem])
  }

  const onSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <StyledDashboard>
      <h1 className="pageTitle">Dashboard</h1>
      <Link to="/potluck/create">
        <button >Create New Potluck</button>
      </Link>
        <Route path="/potluck/create">
          <CreatePotluckPage />
        </Route> 
      <h2>My Potlucks</h2>

      <section id="myPotlucks" className="mtg-container">
      
          {
            myPotlucks.map( potluck => {
              return (
              <div className="meeting" key={`meeting ${potluck["meetingId"]}`}>
                <div className="info">
                  <h3 className="potluckName">{`${potluck["meetingName"]}`}</h3>
                  
                  <ul>
                    
                    <form>
                      <li>I'm bringing: {potluck.people.find(p => p.username === userLoggedIn).item}</li>
                      <select 
                        id = {potluck.meetingId} 
                        onSelect={SelectUserItem}
                        name={userItem}
                        
                      > 
                       
                        {
                        potluck.items.filter( item => {
                          return !potluck.people.map( person => person.item).includes(item)
                          }
                          ).map( item => {
                          return (
                            <option name={item} key={`${item}-${potluck["meetingId"].toString()}`}>
                              {item}
                            </option>
                          );
                        })}

                      </select>
                      <button className="styledButton" onClick={onSubmit}>Change Your Item</button>
                    </form>
                    <li>Role: {`${potluck.people.filter(p => p.username === userLoggedIn)[0].role}`}</li>
                    <li>Date: {`${potluck["date"]}`}</li>
                    <li>Time: {`${potluck["time"]}`}</li>
                    <li>Location: {`${potluck["location"]}`}</li>
                    <li><button className={ `styledButton ${detailsClass}`} onClick={detailsClick}>Details</button></li>
                  </ul>

                <ul className={ hidden? "hidden" : ""} onClick={detailsClick}>
                  {potluck["people"].filter(person => person.username !== userLoggedIn).map( person => {
                    return(
                      <li key={`${person["username"]}-${potluck["meetingId"].toString()}`}>{`${person["username"]}`} is bringing {`${person["item"]}`}</li>
                    )
                  })}
                </ul>

              </div>
              <div className="alert">
                <button className="styledButton" onClick={confirmClick}>
                  { `${confirmText}`}
                </button>
              </div>
            </div>
          )})
        }
      
        </section>

      </StyledDashboard>
    )  
}

export default Dashboard