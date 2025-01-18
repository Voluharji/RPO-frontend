import './CheckboxForum.css'
import {Checkbox, FormControlLabel} from "@mui/material";
import {yellow} from "@mui/material/colors";


function CheckboxForum({id, name, onChange}){

 return (
     <div className='checkbox-forum-container'>
         <FormControlLabel
             control={
                 <Checkbox
                     id={id}
                     value={name}
                     onChange={(e) => onChange(e.target.checked, name)}
                     sx={{
                         '&.Mui-checked': {
                             color: yellow[800],
                         },
                     }}
                 />
             }
             label={name}
         />
     </div>
 )
}

export default CheckboxForum