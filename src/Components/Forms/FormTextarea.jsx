import React from "react";


export default function FormTextarea({setValueInputs, valueInputs, showValues}){
    return <>
     <label htmlFor="description" style={{ fontFamily: "helvatica" }}>
            Description
          </label>
          <br />
          <textarea
            value={valueInputs.description}
            name="description"
            id="description"
            rows="3"
            className="border-2 border-zinc-600 ml-4"
            placeholder="Porque quiere solicitar el crédito"
            style={{
              fontFamily: "italic",
              width: "100%",
              border: "1px solid #acaaaa",
              fontSize: "1.2rem",
              resize: "none",
              overflow: "auto",
            }}
            onChange={(e) => {
              setValueInputs((current) => {
                return !showValues
                  ? { ...current, description: e.target.value }
                  : { ...current };
              });
            }}
          /></>
}