import React, { useState } from "react";
import {  Grid } from "@mui/material";

import "./App.css";
import Forms from "./Components/Forms";
import IconsNavbar from "./Components/Icons.navbar";
import iconsNavbar from "./variables/Iconos.Navbar";
import DataForms from "./Components/DataForms";


function App() {
  const [valueInputs, setValueInputs] = useState([]);
  const [showValues, setShowValues] =useState(false)
  return (
    <div className="App ">
      <Grid container columns={12} spacing="4">
        <Grid item sm={3} md={2} xs={3} width={'auto'}>
          <nav
            style={{
              backgroundColor: "#0057ad",
              height: "100vh",
              position: "fixed",
              width:'auto'
            }}
          >
            <div
              style={{
                width: "100%",
                height: "6rem",
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
        <Grid item justifyContent="center" sm={showValues?5:9} md={showValues?4:9} xs={showValues?4:9}  xl={showValues?4:9}  borderRight={showValues&&'2px solid black'}>
          <h1 style={{ textAlign: "center", fontFamily: "italic" }}>
            Formulario Crediticio
          </h1>
          <Forms valueInputs={valueInputs} setValueInputs={setValueInputs} setShowValues={setShowValues} showValues={showValues} />
        </Grid>             
      {showValues && <Grid sm={4} md={6} lg={6} xs={5} xl={6} ><DataForms values={valueInputs}/></Grid>}
      </Grid>

    </div>
  );
}

export default App;
