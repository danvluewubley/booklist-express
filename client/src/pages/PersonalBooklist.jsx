import React from "react";
import PersonalBooks from "../components/PersonalBooks";
import useRedirectIfNotAuthenticated from "../hooks/useRedirectIfNotAuthenticated";

function PersonalBooklist() {
  useRedirectIfNotAuthenticated();

  return (
    <>
      <PersonalBooks />
    </>
  );
}

export default PersonalBooklist;
