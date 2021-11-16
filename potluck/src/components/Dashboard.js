import React, { useState, useEffect } from 'react';
import '../GlobalStyles.css';
import styled from 'styled-components';
import axios from 'axios';


// axios.get('')
//   .then
//   .

const StyledDashboard = styled.div`
  width: 60%;
  display: flex;
  justify-content: flex-start;
  padding: 8px;
  border-bottom: 2px solid white;

  background-color: ${pr => pr.theme.primaryColor};
  color: ${pr => pr.theme.white}; 
`
const myPotlucks = [ 
  {
    meetingName: 'Foodapaloosa',
    people: [
      {userName:'Abe123', dish: 'spaghetti', role: 'organizer'}, 
      {userName:'Gabe234', dish: 'cookies', role: 'guest'},
      {userName:'Sal123', dish: 'biscuits', role: 'guest'},
      {userName:'Phil2', dish: 'pretzels', role: 'guest'}
    ],
    date: '11/19/2021',
    time: '12PM-1PM',
    location: 'McArthur Park',
    userRole: 'guest',
    userDish: 'pretzels',
    confirmed: false
  },
  {
    meetingName: 'Feast Fest',
    people: [
      {userName:'Abe123', dish: 'apricots', role: 'guest'}, 
      {userName:'Gabe234', dish: 'bread bowls', role: 'guest'},
      {userName:'Sal123', dish: 'chowder', role: 'guest'},
      {userName:'Phil2', dish: 'turkey', role: 'organizer'}
    ],
    date: '11/26/2021',
    time: '11AM-12PM',
    location: 'BJHS staff lounge',
    userRole: 'organizer',
    userDish: 'turkey',
    confirmed: false
  }
]

const Dashboard = () => {
  const [confirmed, setConfirmed] = useState(false);
  const [confirmText, setConfirmText] = useState('');

  useEffect(() => {
    confirmed? setConfirmText('Not Going? Cancel') : setConfirmText('Confirm You\'re Going!');
  }, [confirmed]);
  
  const confirmClick = (e) => {
      e.preventDefault();
      setConfirmed(!confirmed);
  }
  const newPotluck = () => {
      // link to new potluck component
  }
    return (

    <StyledDashboard>
    <section id='dashboard'>
      <h1 className='pageTitle'>Dashboard</h1>
      <button className='styledButton' onClick={newPotluck}>Create New Potluck</button>
    </section>
    
    <section id='myPotlucks' className='mtg-container'>
      <h2>My Potlucks</h2>
      {
        myPotlucks.map( potluck => {
            return (
          <div className='meeting'>
            <div className='info'>
              <h3>Event: {`${potluck['meetingName']}`}</h3>
              <ul>
                <li>Role: {`${potluck['userRole']}`}</li>
                <li>I'm bringing: {`${potluck['userDish']}`}</li>
                <li>Date:{`${potluck['date']}`}</li>
                <li>Time:{`${potluck['time']}`}</li>
                <li>Location: {`${potluck['location']}`}</li>
              </ul>
            </div>
            <div className='alert'>
              <button onClick={confirmClick}>
                { `${confirmText}`}
              </button>
            </div>
            <div>

            </div>
          </div>
        )})
    }
      
    </section>
    </StyledDashboard>
  )  
}

export default Dashboard