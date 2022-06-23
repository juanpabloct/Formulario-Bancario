import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import { makeStyles } from "@mui/material/styles";

import "./App.css";
import Forms from "./Components/Forms";
import IconsNavbar from "./Components/Icons.navbar";
import iconsNavbar from "./variables/Iconos.Navbar";

function App() {
  const [valueInputs, setValueInputs] = useState([]);
  return (
    <div className="App ">
      <Grid container columns={12} spacing="4">
        <Grid item sm={3} md={2} xs={3}>
          <nav
            style={{
              backgroundColor: "#0057ad",
              height: "100vh",
              position: "fixed",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "7rem",
                backgroundColor: "#ffff",
                display: "flex",
              }}
            >
              <img
                style={{ width: "auto", maxHeight: "100%", margin: "auto " }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ3qX3IVgefYwLYL89ov2M2kO0bt50k65RL1ztie0VnA&s"
                alt=" Banco de Bogotá"
                className="mix-blend-hard-light"
              />
            </div>
            <IconsNavbar icons={iconsNavbar} />
          </nav>
        </Grid>
        <Grid item justifyContent="center" sm={9} md={9} xs={6} xl={10}>
          <h1 style={{ textAlign: "center", fontFamily: "italic" }}>
            Formulario Crediticio
          </h1>
          <Forms valueInputs={valueInputs} setValueInputs={setValueInputs} />
        </Grid>
        <Grid></Grid>
      </Grid>
    </div>
  );
}

export default App;
