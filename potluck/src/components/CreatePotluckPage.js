import React, { useState } from "react";
import { useHistory } from "react-router-dom";
<<<<<<< HEAD
import axiosWithAuth from "../ultils/axiosWithAuth";
=======
//axios is here for  now until we make axiosWithAuth()
import axios from "axios";
import styled from "styled-components";

const StyledCreatePage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;
    height: 110vh;
    form{
        height: fit-content;
      }

    @media (min-width: 900px){
      height: 145vh;
    }
`
>>>>>>> main

const initialPotluckValues = {
  potluck_name: "",
  location: "",
  date: "",
  time: "",
};

const CreatePotluckPage = () => {
  //state initialization
  const [potluckValues, setPotluckValues] = useState(initialPotluckValues);

  //destructuring
  const { push } = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // axiosWithAuth()
    //   .post("/api/events", potluckValues)
    //   .then((resp) => {
    //     console.log(resp.data);
    //   });
    push("/dashboard");
  };
  const handleChange = (e) => {
    setPotluckValues({
      ...potluckValues,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <StyledCreatePage>
      <div>
        <h1 className="pageTitle">Create Your Potluck</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Event Name:
            <input type="text" name="potluck_name" onChange={handleChange} />
          </label>
          <label>
            Location:
            <input type="text" name="location" onChange={handleChange} />
          </label>
          <label>
            Date (mm-dd-yy):
            <input type="text" name="date" onChange={handleChange} />
          </label>
          <label>
            Time (hh:mm:ss):
            <input type="text" name="time" onChange={handleChange} />
          </label>
          <button>Create Potluck</button>
        </form>
      </div>
    </StyledCreatePage>
  );
};

export default CreatePotluckPage;
