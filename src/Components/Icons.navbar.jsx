import { useRef, useState } from "react";
import React from "react";

export default function IconsNavbar({ icons }) {
  const refContent = useRef(null);
  const [seleccionado, setSeleccionado] = useState(icons);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "3rem",
        marginBottom: "2rem",
        marginTop: "1rem",
      }}
    >
      {seleccionado.map((icon, index) => {
        return (
          <div
            className="cursor"
            key={index}
            ref={refContent}
            onClick={() => {
              console.log(seleccionado);
              setSeleccionado((current) => {
                const newArray = current.map((item, key) => {
                  if (index === key)
                    return {
                      ...item,
                      seleccionado: !item.seleccionado,
                    };
                  else if (item.seleccionado)
                    return {
                      ...item,
                      seleccionado: false,
                    };

                  return item;
                });
                return newArray;
              });
            }}
            style={{
              width: "70%",
              height: "4rem",
              backgroundColor: icon.seleccionado && "#ffff",
              borderRadius: "4px",
              margin: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <icon.icon color="primary" sx={{ display: "block" }} />
            <div>{icon.placeholder}</div>
            <hr style={{ width: "90%" }} />
          </div>
        );
      })}
    </div>
  );
}
