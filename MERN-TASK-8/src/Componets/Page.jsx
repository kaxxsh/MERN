import React from "react";
import { Link, Route,Routes } from "react-router-dom";
import utube from "./utube";

function Page() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Contact">Contact</Link>
      {/* <Routes>
        <Route path="/Youtube" element={<utube />}></Route>
      </Routes> */}
    </>
  );
}

export default Page;
