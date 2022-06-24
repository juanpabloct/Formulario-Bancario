import { Grid } from "@mui/material";
import React from "react";
import "../Dataforms.css" 
//Component of values of the forms
export default function DataForms({ values }) {
  //Keys are the name placeholder of the form
  const keys = Object.keys(values);
  //Filter image for show if exist
  const filterImage = keys.filter((value) => value === "image");
  console.log(values[filterImage[0]]);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Valores Formulario</h1>
      <hr />
      <Grid
        container
        columns={values[filterImage[0]].length>0 ? 2 : 1}
        style={{ textAlign: "center" }}
      >
        {
          <Grid item xs={2} md={1}>
            {[values].map((value, index) => {
              return (
                <div key={index}>
                  {/*If image exist that take that space*/}
                  {filterImage[0] === "image" && (
                    <img
                      style={{ width: "100%" }}
                      src={values[filterImage[0]]}
                      alt=""
                    />
                  )}
                </div>
              );
            })}
          </Grid>
        }
        {/*Values of the input*/}
        <Grid item xs={2} md={1} height={"30rem"} overflow="auto">
          {[values].map((value, index) => {
            return (
              <div key={index}>
                {keys.map((item, index) => {
                  if (item !== "image") {
                    {/*value of the date */}
                    if (item === "date") {
                      {/*if date dont have value then it isnt show */}
                      return values[item]!=''&&(
                        <div key={index}>
                          <h3
                            style={{
                              fontFamily: "cursive",
                              textTransform: "capitalize",
                              backgroundColor: "aliceblue",
                            }}
                          >
                            {item}
                          </h3>
                          <span>{values[item].constructor()}</span>
                        </div>
                      );
                      {/*values of inputs*/}
                    } else {
                      {/*if input text and number dont have value then it isnt show */}
                      return values[item]!=''&&(
                        <div key={index} className='styleValue'>
                          <h3
                            style={{
                              fontFamily: "cursive",
                              textTransform: "capitalize",
                              backgroundColor: "aliceblue",
                            }}
                          >
                            {item}
                          </h3>
                          <p style={{ fontFamily: "verdana" }} >
                            {values[item]}
                          </p>
                          <hr />
                        </div>
                      );
                    }
                  }
                })}
              </div>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
}
