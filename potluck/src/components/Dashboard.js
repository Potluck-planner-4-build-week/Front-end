import React from React.js

const Dashboard = () => {
  const myPotlucks = [ 
    {
      meetingName: 'Foodapaloosa',
      people: [
        {userName:'Abe123', dish: 'spaghetti'}, 
        {userName:'Gabe234', dish: 'cookies'},
        {userName:'Sal123', dish: 'biscuits'},
        {userName:'Phil2', dish: 'pretzels'}
      ],
      organizer: 'Phil2',
      date: '11/19/2021',
      time: '12PM-1PM',
      location: 'McArthur Park',
      userDish: 'pretzels',
      confirmed: false
    }
  ]
  const potluck1 = myPotlucks[0];
  const currentUser = 'Phil2';
  const newPotluck = () => {
      // link to new potluck component
  }
    return(
    <>
    <section id='dashboard'>
      <h1>Dashboard</h1>
      <button onCick={newPotluck}>Create New Potluck</button>
    </section>
    
    <section id='myPotlucks' className='mtg-container'>
      <h2>My Potucks</h2>
      <div className='meeting'>
        <div className='info'>
        <h3>Event: ${potluck1[meetingName]}</h3>
        <ul>
          <li>I'm bringing: ${potluck1[userDish]}</li>
          <li>Date: ${potluck1[date]}</li>
          <li>Time: ${potluck1[time]}</li>
          <li>Location: ${potluck1[location]}</li>
        </ul>
        <div className='alert'>
          <p>Confirm You're Going</p>
          <input 
            key={potluck1[meetingName]}
            type='checkbox'
            checked={potluck1.confirmed}
          />
        </div>
      </div>
      
    </section>
    </>
  )  
}