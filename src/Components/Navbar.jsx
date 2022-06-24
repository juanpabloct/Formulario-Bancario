import { Grid } from "@mui/material"
import React from "react"
import iconsNavbar from "../variables/Iconos.Navbar"
import IconsNavbar from "./Icons.navbar"


export default function Navbar (){
    return (
        <Grid item sm={3} md={2} xs={3} width={"auto"}>
        <nav
          style={{
            backgroundColor: "#0057ad",
            height: "100vh",
            position: "fixed",
            width: "auto",
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
    )
}