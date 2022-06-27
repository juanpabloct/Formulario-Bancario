import React from "react";

export default function FormDataImg({ setValueInputs, showValues }) {
  return (
    <>
      <input
        accept=".jpg,.png"
        value={setValueInputs.image}
        style={{ margin: "auto" }}
        type="file"
        name=""
        id=""
        onChange={(e) => {
          setValueInputs((current) => {
            try {
              return {
                image: URL.createObjectURL(e.target.files[0]),
              };
            } catch (error) {}
          });
        }}
      />
    </>
  );
}
