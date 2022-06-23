import { Grid } from "@mui/material";
import React from "react"


export default function DataForms({values}) {
    console.log(values);
    const keys=Object.keys(values)
    const filterImage=keys.filter((value)=>value==='image')
    console.log(filterImage)

    return (
        <div>
        <h1 style={{textAlign:'center'}}>Valores Formulario</h1>
        <hr />
        <Grid container columns={filterImage[0]==='image'?2:1} style={{textAlign:'center'}}>
            {<Grid item xs={2} md={1}>  {[values].map((value, index)=>{
                console.log('entro');
                    return (
                        <>
                        {keys.map((item, index)=>{
                            if (item==='image') {
                                return <img style={{width:'100%'}} src={values[item]} alt="" />
                            }
                        })}
                        </>
                        )
                    }
                    )}
            </Grid>}
            <Grid item xs={2} md={1} height={'30rem'} overflow='auto'>
                {[values].map((value, index)=>{
                    return (
                        <>
                        {keys.map((item, index)=>{
                            if (item!=='image') {
                                if (item==='date'){
                                    return <div>
                                        <h3 style={{fontFamily:'cursive', textTransform:'capitalize', backgroundColor: 'aliceblue'}}>{item}</h3>
                                        <span>{values[item].constructor()}</span>
                                    </div>
                                }
                                else {
                                    return (
                                        <div>
                                            <h3 style={{fontFamily:'cursive', textTransform:'capitalize', backgroundColor: 'aliceblue'}}>{item}</h3>
                                          <span style={{fontFamily:'verdana'}}>{values[item]}</span>
                                          <hr/>
                                        </div>
                                    )
                                }
                            }})}
                        </>
                        )
                }
                )}
        </Grid>
    </Grid>
    </div>)

    
}