import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import HomeChild from "./HomeChild";

const Home = () => {
  const { name, setName, profile, setProfile } = useContext(UserContext);

  useEffect(() => {
    console.log("Home Parent Rendering");
  }, []);

  return (
    <>
      <HomeChild />
      <h1>Home</h1>
      name : <input value={name} onChange={(e) => setName(e.target.value)} />
      email :{" "}
      <input
        value={profile?.email}
        onChange={(e) => {
          //   const props = { ...profile };
          //   props.email = e.target.value;
          //   setProfile(props);

          setProfile({ ...profile, email: e.target.value });
        }}
      />
    </>
  );
};

export default Home;
