import React, { useState } from "react";
import { useHistory } from "react-router-dom";
//axios is here for  now until we make axiosWithAuth()
import axios from "axios";

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
    // axios.post("link here whenever its ready", potluckValues);
    // push('/login')
  };
  const handleChange = (e) => {
    setPotluckValues({
      ...potluckValues,
      [e.target.name]: e.target.value,
    });
  };
  return (
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
  );
};

export default CreatePotluckPage;
