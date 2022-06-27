import { Grid } from "@mui/material";
import { set } from "date-fns";
import React, { useState } from "react";
import "../Dataforms.css";
//Component of values of the forms
export default function DataForms({ values }) {
  console.log(values[values.length - 1]);
  return (
    <Grid container columns={2}>
      {values[values.length - 1].image.length > 0 && (
        <Grid item sx={1}>
          <h1 style={{ textTransform: "capitalize" }}>Image</h1>
          <img
            src={values[values.length - 1].image}
            alt=""
            style={{ width: "100%" }}
          />
        </Grid>
      )}
      <Grid item>
        {values.map((value, index) => {
          //Keys are the name placeholder of the form
          const keys = Object.keys(value);
          return keys.map((key, index) => {
            if (
              value[key].length > 0 ||
              (key === "date" &&
                value[key].constructor().length > 0 &&
                key !== "image")
            ) {
              if (key === "date") {
                return (
                  <>
                    <h1 style={{ textTransform: "capitalize" }}>{key}</h1>
                    <p className="styleValue">{value[key].constructor()}</p>
                  </>
                );
              } else {
                return (
                  <>
                    <h1 style={{ textTransform: "capitalize" }}>{key}</h1>
                    <p className="styleValue">{value[key]}</p>
                  </>
                );
              }
            }
          });
        })}
      </Grid>
    </Grid>
  );
}
