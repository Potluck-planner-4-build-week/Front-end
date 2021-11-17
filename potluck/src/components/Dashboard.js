import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import { useHistory } from "react-router-dom";
import "../GlobalStyles.css";
import styled from "styled-components";
import axiosWithAuth from "../ultils/axiosWithAuth";
=======
import { Link, Route } from "react-router-dom";
import "../GlobalStyles.css";
import styled from "styled-components";
import CreatePotluckPage from "./CreatePotluckPage";
>>>>>>> main

const StyledDashboard = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: black;
  align-items: center;
  
  button {
    font-size: 2rem;
  }

<<<<<<< HEAD
  background-color: ${(pr) => pr.theme.primaryColor};
  color: ${(pr) => pr.theme.white};
`;
const myPotlucks = [
  {
    meetingName: "Foodapaloosa",
    people: [
      { userName: "Abe123", dish: "spaghetti" },
      { userName: "Gabe234", dish: "cookies" },
      { userName: "Sal123", dish: "biscuits" },
      { userName: "Phil2", dish: "pretzels" },
    ],
    organizer: "Phil2",
    date: "11/19/2021",
    time: "12PM-1PM",
    location: "McArthur Park",
    userDish: "pretzels",
    confirmed: false,
=======
  h2 {
    line-height: 8rem;
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
    meetingName: "Foodapaloosa",
    people: [
      {username:"Abe123", item: "spaghetti", role: "organizer"}, 
      {username:"Gabe234", item: "cookies", role: "guest"},
      {username:"Sal123", item: "biscuits", role: "guest"},
      {username:"Phil2", item: "pretzels, cheese, crackers, chips, soda", role: "guest"}
    ],
    date: "11/19/2021",
    time: "12PM-1PM",
    location: "McArthur Park",
    userRole: "guest",
    userItem: "pretzels",
    confirmed: false
>>>>>>> main
  },
  {
    meetingName: "Feast Fest",
    people: [
<<<<<<< HEAD
      { userName: "Abe123", dish: "apricots" },
      { userName: "Gabe234", dish: "bread bowls" },
      { userName: "Sal123", dish: "chowder" },
      { userName: "Phil2", dish: "turkey" },
    ],
    organizer: "Sal123",
    date: "11/26/2021",
    time: "11AM-12PM",
    location: "BJHS staff lounge",
    userDish: "turkey",
    confirmed: false,
  },
];
=======
      {username:"Abe123", item: "apricots", role: "guest"}, 
      {username:"Gabe234", item: "bread bowls", role: "guest"},
      {username:"Sal123", item: "chowder", role: "guest"},
      {username:"Phil2", item: "turkey", role: "organizer"}
    ],
    date: "11/26/2021",
    time: "11AM-12PM",
    location: "BJHS staff lounge",
    userRole: "organizer",
    userItem: "turkey",
    confirmed: false
  },
  {
    meetingName: "Feast Fest",
    people: [
      {username:"Abe123", item: "apricots", role: "guest"}, 
      {username:"Gabe234", item: "bread bowls", role: "guest"},
      {username:"Sal123", item: "chowder", role: "guest"},
      {username:"Phil2", item: "turkey", role: "organizer"}
    ],
    date: "11/26/2021",
    time: "11AM-12PM",
    location: "BJHS staff lounge",
    userRole: "organizer",
    userItem: "turkey",
    confirmed: false
  },
  {
    meetingName: "Feast Fest",
    people: [
      {username:"Abe123", item: "apricots", role: "guest"}, 
      {username:"Gabe234", item: "bread bowls", role: "guest"},
      {username:"Sal123", item: "chowder", role: "guest"},
      {username:"Phil2", item: "turkey", role: "organizer"}
    ],
    date: "11/26/2021",
    time: "11AM-12PM",
    location: "BJHS staff lounge",
    userRole: "organizer",
    userItem: "turkey",
    confirmed: false
  }
]
>>>>>>> main

const Dashboard = () => {
  //destructuring
  const { push } = useHistory();

  //state
  const [confirmed, setConfirmed] = useState(false);
  const [confirmText, setConfirmText] = useState("");
<<<<<<< HEAD

  // useEffect(() => {
  //   axiosWithAuth()
  //     .get("/api/events")
  //     .then((resp) => {
  //       console.log(resp.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  useEffect(() => {
    confirmed
      ? setConfirmText("Not Going? Cancel")
      : setConfirmText("Confirm You're Going!");
  }, [confirmed]);

  const potluck1 = myPotlucks[0];
  const currentUser = "Phil2";
  const confirmClick = (e) => {
    e.preventDefault();
    setConfirmed(!confirmed);
  };
  const newPotluck = () => {
    push("/potluck/create");
  };
  console.log(confirmed);
  return (
    <StyledDashboard>
      <section id="dashboard">
        <h1 className="pageTitle">Dashboard</h1>
        <button className="styledButton" onClick={newPotluck}>
          Create New Potluck
        </button>
      </section>

      <section id="myPotlucks" className="mtg-container">
        <h2>My Potlucks</h2>
        {myPotlucks.map((potluck) => {
          return (
            <div className="meeting">
              <div className="info">
                <h3>Event: {`${potluck["meetingName"]}`}</h3>
                <ul>
                  <li>I'm bringing: {`${potluck["userDish"]}`}</li>
                  <li>Date:{`${potluck["date"]}`}</li>
                  <li>Time:{`${potluck["time"]}`}</li>
                  <li>Location: {`${potluck["location"]}`}</li>
                </ul>
              </div>
              <div className="alert">
                <button onClick={confirmClick}>{`${confirmText}`}</button>
              </div>
              <div></div>
            </div>
          );
        })}
      </section>
    </StyledDashboard>
  );
};
=======
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

  const newPotluck = () => {
      // link to new potluck component
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
              <div className="meeting" key={`meeting ${potluck["meetingName"]}`}>
                <div className="info">
                  <h3 className="potluckName">{`${potluck["meetingName"]}`}</h3>
                  
                  <ul>
                    <li>Role: {`${potluck["userRole"]}`}</li>
                    <li>I'm bringing: {`${potluck["userItem"]}`}</li>
                    <li>Date: {`${potluck["date"]}`}</li>
                    <li>Time: {`${potluck["time"]}`}</li>
                    <li>Location: {`${potluck["location"]}`}</li>
                    <li><button className={ `styledButton ${detailsClass}`} onClick={detailsClick}>Details</button></li>
                  </ul>

                <ul className={ hidden? "hidden" : ""} onClick={detailsClick}>
                  {potluck["people"].map( person => {
                    return(
                      <li className={ `${person["username"]}`}>{`${person["username"]}`} is bringing {`${person["item"]}`}</li>
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
>>>>>>> main

export default Dashboard;
