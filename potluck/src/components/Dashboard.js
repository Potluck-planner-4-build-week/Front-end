import React, { useState, useEffect } from "react";
import { Link, Route, useHistory } from "react-router-dom";
import "../GlobalStyles.css";
import styled from "styled-components";
import CreatePotluckPage from "./CreatePotluckPage";

const StyledDashboard = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: black;
  align-items: center;

  button {
    font-size: 2rem;
  }

  h2 {
    line-height: 8rem;
  }

  @media (min-width: 700px) {
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
    meetingName: "Foodapaloosa",
    people: [
      { username: "Abe123", item: "spaghetti", role: "organizer" },
      { username: "Gabe234", item: "cookies", role: "guest" },
      { username: "Sal123", item: "biscuits", role: "guest" },
      {
        username: "Phil2",
        item: "pretzels, cheese, crackers, chips, soda",
        role: "guest",
      },
    ],
    date: "11/19/2021",
    time: "12PM-1PM",
    location: "McArthur Park",
    userRole: "guest",
    userItem: "pretzels",
    confirmed: false,
  },
  {
    meetingName: "Feast Fest",
    people: [
      { username: "Abe123", item: "apricots", role: "guest" },
      { username: "Gabe234", item: "bread bowls", role: "guest" },
      { username: "Sal123", item: "chowder", role: "guest" },
      { username: "Phil2", item: "turkey", role: "organizer" },
    ],
    date: "11/26/2021",
    time: "11AM-12PM",
    location: "BJHS staff lounge",
    userRole: "organizer",
    userItem: "turkey",
    confirmed: false,
  },
  {
    meetingName: "Feast Fest",
    people: [
      { username: "Abe123", item: "apricots", role: "guest" },
      { username: "Gabe234", item: "bread bowls", role: "guest" },
      { username: "Sal123", item: "chowder", role: "guest" },
      { username: "Phil2", item: "turkey", role: "organizer" },
    ],
    date: "11/26/2021",
    time: "11AM-12PM",
    location: "BJHS staff lounge",
    userRole: "organizer",
    userItem: "turkey",
    confirmed: false,
  },
  {
    meetingName: "Feast Fest",
    people: [
      { username: "Abe123", item: "apricots", role: "guest" },
      { username: "Gabe234", item: "bread bowls", role: "guest" },
      { username: "Sal123", item: "chowder", role: "guest" },
      { username: "Phil2", item: "turkey", role: "organizer" },
    ],
    date: "11/26/2021",
    time: "11AM-12PM",
    location: "BJHS staff lounge",
    userRole: "organizer",
    userItem: "turkey",
    confirmed: false,
  },
];

const Dashboard = () => {
  //destructuring
  const { push } = useHistory();

  //state
  const [confirmed, setConfirmed] = useState(false);
  const [confirmText, setConfirmText] = useState("");
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

  const newPotluck = () => {
    // link to new potluck component
  };

  return (
    <StyledDashboard>
      <h1 className="pageTitle">Dashboard</h1>
      <Link to="/potluck/create">
        <button>Create New Potluck</button>
      </Link>
      <Route path="/potluck/create">
        <CreatePotluckPage />
      </Route>
      <h2>My Potlucks</h2>

      <section id="myPotlucks" className="mtg-container">
        {myPotlucks.map((potluck) => {
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
                  <li>
                    <button
                      className={`styledButton ${detailsClass}`}
                      onClick={detailsClick}
                    >
                      Details
                    </button>
                  </li>
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
