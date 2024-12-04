import './SearchBar.css'
import PovStekloSVG from './SearchBarAssets/magnifying-glass-svgrepo-com.svg'
function SearchBar(){
    return (
        <div className='search-bar-container'>
            <input type='text' className='search-bar' placeholder='Search'/>
            <button className='find-btn'><img src={PovStekloSVG} alt='icon' height='25'/></button>
        </div>
    )
}

export default SearchBar