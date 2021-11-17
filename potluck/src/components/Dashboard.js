import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../GlobalStyles.css";
import styled from "styled-components";
import axiosWithAuth from "../ultils/axiosWithAuth";

const StyledDashboard = styled.div`
  width: 60%;
  display: flex;
  justify-content: flex-start;
  padding: 8px;
  border-bottom: 2px solid white;

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
  },
  {
    meetingName: "Feast Fest",
    people: [
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

const Dashboard = () => {
  //destructuring
  const { push } = useHistory();

  //state
  const [confirmed, setConfirmed] = useState(false);
  const [confirmText, setConfirmText] = useState("");

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

export default Dashboard;
