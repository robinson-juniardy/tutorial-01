import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const About = () => {
  const { name, profile } = useContext(UserContext);
  return (
    <>
      <h1>About</h1>
      <h1>name : {name}</h1>
      <h1>email : {profile?.email}</h1>
    </>
  );
};

export default About;
