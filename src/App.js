import React from "react";
import { Box } from "@mui/material";
import "./App.css";
import Forms from "./Components/Forms";
import IconsNavbar from "./Components/Icons.navbar";
import iconsNavbar from "./variables/Iconos.Navbar";
function App() {
  return (
    <div className="App">
      <Box sx={{ display: "flex", gap: "3rem" }}>
        <nav style={{ backgroundColor: "#0057ad" }}>
          <picture>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ3qX3IVgefYwLYL89ov2M2kO0bt50k65RL1ztie0VnA&s"
              alt=" Banco de Bogotá"
              className="mix-blend-hard-light"
            />
          </picture>
          <IconsNavbar icons={iconsNavbar} />
        </nav>
        <section>
          <h1 style={{ textAlign: "center", fontFamily: "italic" }}>
            Formulario Crediticio
          </h1>
          <Forms />
        </section>
      </Box>
    </div>
  );
}

export default App;
