import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import useStyles from "../styles";

const Search = () => {
  const [name, setName] = useState("spider");
  return (
    <>
      <h2 className={title}>Movie Search</h2>
    </>
  );
};

export default Search;
