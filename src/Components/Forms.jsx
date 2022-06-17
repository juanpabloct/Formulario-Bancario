import { TextField, Checkbox, FormControlLabel, InputLabel, FormControl, Select, MenuItem } from '@mui/material';



export default function Forms() {
    const statePerson=['Soltero', 'Casado', 'Divorciado']
  const inputs=[{placeholder:'nombre'}, {placeholder:'Apellido'}, {placeholder:'edad'},   {placeholder:'Dinero mensual'}, {placeholder:'Numero celular '}, {placeholder:'Numero fijo'},]
    return (
        <form action="" className=''>
        <div className='flex flex-col w-1/2 m-auto gap-4'>
            {inputs.map((input, index)=>{
              return (
                <>
            <TextField id="outlined-basic" label={input.placeholder} variant="outlined" key={index} />
                  <hr/>
                </>
                )
            })}
            <FormControlLabel control={<Checkbox defaultChecked />} label="Trabaja" />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Selecciona tu estado</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={''}
                  label="Selecciona tu estado"
                >
                  {statePerson.map((value, index)=>{
                  return(
                    <MenuItem key={index} value={value}>{value}</MenuItem>) 
              })}
                </Select>
            </FormControl>

            <label htmlFor="">Descripción</label>
            <textarea name="" id="" cols="30" rows="6" className='border-2 border-zinc-600 ml-4' placeholder='Porque quiere solicitar el crédito'></textarea>
        </div>
      </form>
    )
}