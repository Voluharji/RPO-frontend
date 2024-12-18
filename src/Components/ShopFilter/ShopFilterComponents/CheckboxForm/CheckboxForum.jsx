import './CheckboxForum.css'

function CheckboxForum({id,name}){
 return(
     <div className='checkbox-forum-container'>
         <input className='checkbox-input' type="checkbox" id={id} name={name} value={name}/>
         <label className='checkbox-label' htmlFor={name}>{name}</label>
     </div>
 )
}

export default CheckboxForum