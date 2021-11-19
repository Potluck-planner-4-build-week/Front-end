# Front-end

## ☝️ **Pitch**

If you have ever tried to organize a potluck through text messages, online to-do lists or spreadsheets, you'll understand why this app is essential. 

In the world of social gatherings and potlucks the "Potluck Planner" is king. This is your place for all things pot luck.

## ✅  **MVP**

1. As an `organizer` I can create an upcoming `potluck` and invite my friends to attend

2. As an `organizer` I can adjust `date`s, `time`s and `location`s of the potluck

3. As an `organizer` I can use the list feature in my app to add food `items` that we'd like to see at the potluck

4. As a `guest` to a potluck I want to be able to confirm that I'm going to the upcoming `event`

5. As a `guest` I'd like to be able to select which `item`s I'd like to be responsible for bringing

**NOTE: All of the user stories above should only require a single user type. Users can create "potlucks" and add other users to them.**

## 🏃‍♀️ **Stretch**

1. Add a reminders functionality that allows users to link up their upcoming `date`s to their Google calendar.

2. Ability to upload multiple `photos` from the potluck gathering, like a photo gallery for a past event.

### Link to class names for styling shared doc
https://docs.google.com/document/d/1nkA7Xo5Pbbkb2JkDORICQk7ChhfeQY1nQfXKTpJEIfo/edit?usp=sharing

### API Documentation

**[POST]** to `https://back-end-node-postgresql.herokuapp.com/api/auth/register`: lets a user register.
<!-- This endpoint needs to be fixed in the backend (GIVING A 500 ERROR when called through axios) -->

**[POST]** to `https://back-end-node-postgresql.herokuapp.com/api/logout`: returns the expired authentication information of the user.
<!-- This endpoint needs to be created in the backend -->

**[GET]** to `https://back-end-node-postgresql.herokuapp.com/api/users`: returns a current authentication information of a user. Pass in the following credentials as the `body` of the request: `{username: ``, password: ``}` for a successful login.

**[GET]** to `https://back-end-nodes-postgresql.herokuapp.com/api/events`: returns all the events currently available.
<!-- This endpoint needs to be created in the backend -->
*This endpoint can only be accessed by an authenticated user.*

**[POST]** to `https://back-end-nodes-postgresql.herokuapp.com/api/events`: creates an event object. Returns all available events. Pass the event as the `body` of the request.
<!-- This endpoint needs to be created in the backend --> 
*This endpoint can only be accessed by an authenticated user.*

**[PUT]** to `https://back-end-nodes-postgresql.herokuapp.com/api/events:id`: updates the events using the `id` passed as part of the URL. Returns all available events. Sends the updated event object as the `body` of the request.
<!-- This endpoint needs to be created in the backend (IF THERES STILL TIME!) -->
*This endpoint can only be accessed by an authenticated user.*

**[DELETE]** to `https://back-end-nodes-postgresql.herokuapp.com/api/events/:id`; removes the event with the `id` referenced. Returns all available events. 
<!-- This endpoint needs to be created in the backend (IF THERES STILL TIME!) -->
*This endpoint can only be accessed by an authenticated user.*


Dashboard:
  The features that allow guests to change their item and confirm they're going are tested by axios post requests to reqres. 