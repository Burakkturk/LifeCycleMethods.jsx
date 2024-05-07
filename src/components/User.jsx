import React, { useState,useEffect } from "react";

const User = () => {

  const [userData, setUserData] = useState("")

  const getUser = () => {
  fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((data) => setUserData(data.results[0]))
    .catch((err) => console.log(err));
  }

  useEffect(() => {
  //   fetch("https://randomuser.me/api/")
  //   .then((res) => res.json())
  //   .then((data) => setUserData(data.results[0]))
  //   .catch((err) => console.log(err));
  const timer = setInterval(getUser,3000)
   getUser()

   return () => {
    clearInterval(timer)
   }
  }, [])
  
    console.log(userData)
  return (
    <div>
      <img src={userData?.picture?.large} className="rounded-circle"  alt="" />
      <h4>Hi, My Name is</h4>
      <h1>{userData?.name?.first} {userData?.name?.last}</h1>
      <h3>{userData?.email}</h3>
      <h4>{new Date(userData?.dob?.date).toLocaleDateString("tr-TR")}</h4>
      <h5>{userData?.phone}</h5>
      <h6>{userData?.location?.city}</h6>
      <button className="btn btn-success" onClick={getUser}>GET RANDOM USER</button>
    </div>
  );
};

export default User;
