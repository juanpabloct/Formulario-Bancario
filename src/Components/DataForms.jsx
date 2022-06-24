import { Grid } from "@mui/material";
import React from "react";

export default function DataForms({ values }) {
  const keys = Object.keys(values);
  const filterImage = keys.filter((value) => value === "image");
  console.log(filterImage);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Valores Formulario</h1>
      <hr />
      <Grid
        container
        columns={values[filterImage[0]] === "image" ? 2 : 1}
        style={{ textAlign: "center" }}
      >
        {
          <Grid item xs={2} md={1}>
            {" "}
            {[values].map((value, index) => {
              return (
                <div key={index}>
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
        <Grid item xs={2} md={1} height={"30rem"} overflow="auto">
          {[values].map((value, index) => {
            return (
              <div key={index}>
                {keys.map((item, index) => {
                  if (item !== "image") {
                    if (item === "date") {
                      return (
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
                    } else {
                      return (
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
                          <span style={{ fontFamily: "verdana" }}>
                            {values[item]}
                          </span>
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
