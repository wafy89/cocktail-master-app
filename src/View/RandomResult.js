import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Drink from "../components/Drink";
import { isInFavorite, ingredientsGenerator } from "../utils/functions";

const useStyles = makeStyles((theme) => ({
  root: {
    width: " 90%",
    margin: "auto",
    marginTop: "12vh",
    backgroundColor: " rgba(255, 255, 255, 0.95)",
    minHeight: " 100vh",
    paddingTop: "50px",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  subRoot: {
    width: " 31%",
    margin: "1rem",
    marginTop: "0",
    backgroundColor: "transparent",
    paddingTop: "0",
    borderRadius: "0",
  },
}));

function RandomResult(props) {
  const classes = useStyles();
  return (
    <div className="ListContainer">
      {props.randomList ? (
        <Button
          className="clearRandomBTN"
          variant="contained"
          color="secondary"
          onClick={props.clearRandoms}
        >
          CLEAR RANDOMS
        </Button>
      ) : (
        ""
      )}
      <Grid
        /* container justifyContent="center" */ className={classes.root}
        spacing={0}
      >
        {props.randomList.map((drink, index) => (
          <Grid className={classes.subRoot} xs={12} sm={12} md={4} lg={3}>
            <Drink
              key={index}
              drink={drink}
              isInFavorite={isInFavorite(props.favoriteList, drink.idDrink)}
              saveToFavorite={props.saveToFavorite}
              ingredientsArr={ingredientsGenerator(drink)}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default RandomResult;
