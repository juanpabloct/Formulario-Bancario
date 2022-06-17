import { TextField, Checkbox, FormControlLabel, InputLabel, FormControl, Select, MenuItem } from '@mui/material';

import './App.css';
import Forms from './Components/Forms';

import PaymentIcon from '@mui/icons-material/Payment';


function App() {
  
  return (
    <div className="App flex" >
      <nav style={{backgroundColor:'#0057ad'}}>
        <picture >
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ3qX3IVgefYwLYL89ov2M2kO0bt50k65RL1ztie0VnA&s" alt=" Banco de Bogotá" className='mix-blend-hard-light'/>
        </picture>
      </nav>
      <Forms/>
    </div>
  );
}

export default App;
