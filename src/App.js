import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";

import "./App.css";
import Forms from "./Components/Forms";
import IconsNavbar from "./Components/Icons.navbar";
import iconsNavbar from "./variables/Iconos.Navbar";
import DataForms from "./Components/DataForms";
import { camposInputs } from "./variables/camposInputs";
import Navbar from "./Components/Navbar";

function App() {
  const [valueInputs, setValueInputs] = useState(camposInputs);
  const [showValues, setShowValues] = useState(false);
  const [copyvalueInputs, setCopyvalueInputs] = useState([]);
  //The change shiwValues that copy the values of the valueInputs
  useEffect(() => {
    setCopyvalueInputs(valueInputs);
    setValueInputs(camposInputs);
  }, [showValues]);
  return (
    <div className="App ">
      <Grid container columns={12} spacing="4">
       <Navbar/>
        <Grid
          item
          justifyContent="center"
          sm={showValues ? 5 : 9}
          md={showValues ? 4 : 9}
          xs={showValues ? 4 : 9}
          xl={showValues ? 4 : 9}
          borderRight={showValues && "2px solid black"}
        >
          <h1 style={{ textAlign: "center", fontFamily: "italic" }}>
            Formulario Crediticio
          </h1>
          <Forms
            valueInputs={valueInputs}
            setValueInputs={setValueInputs}
            setShowValues={setShowValues}
            showValues={showValues}
          />
        </Grid>
        {showValues && (
          <Grid item sm={4} md={6} lg={6} xs={5} xl={6}>
            <DataForms values={copyvalueInputs} />
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default App;
