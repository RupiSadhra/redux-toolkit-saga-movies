import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import useStyles from "../style";
import { getMovies } from "../redux/slice/movieSlice";

const Search = () => {
  const [name, setName] = useState("spider");
  const classes = useStyles();
  const dispatch = useDispatch();

  const requestFail = useSelector((state) => {
    return state.movies.requestFail;
  });

  const requestFailMessage = useSelector((state) => {
    return state.movies.requestFailMessage;
  });

  useEffect(() => {
    dispatch(getMovies(name));
  }, [name]);

  return (
    <>
      <h2 className={classes.title}>Movie Search</h2>
      <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
        <TextField type="text" fullWidth value={name} sx={{ m: 1, width: "55ch" }} onChange={(e) => setName(e.target.value)} />
      </form>

      {requestFail && <p className={classes.error}>{requestFailMessage}</p>}
    </>
  );
};

export default Search;
