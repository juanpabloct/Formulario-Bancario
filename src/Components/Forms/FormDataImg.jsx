import React from "react";

export default function FormDataImg({setValueInputs, showValues}) {
    return <>
     <input
            accept=".jpg,.png"
            style={{ margin: "auto" }}
            type="file"
            name=""
            id=""
            onChange={(e) => {
              setValueInputs((current) => {
                return !showValues
                  ? {
                      ...current,
                      image: URL.createObjectURL(e.target.files[0]),
                    }
                  : { ...current };
              });
            }}
          /></>
}