import './SearchBar.css'
import PovStekloSVG from './SearchBarAssets/magnifying-glass-svgrepo-com.svg'
import axios from "axios";
import {useState} from "react";

function SearchBar(){

    const [input, setInput] = useState("");


    const handleInput = (event) => {
        setInput(event.target.value);
    }

    const handleSearch = async () => {

        const data = {search: input};

        console.log("Data:", data);

        try {
            const response = await axios.post("http://localhost:8081/api/filter", data);
            console.log("Server Response:", response.data);
        } catch (error) {
            console.error("Error sending data:", error);
        }
    }



    return (
        <div className='search-section-container'>

            <div className='search-bar-container'>
                <input onChange={handleInput} type='text' className='search-bar' placeholder='Search'/>
                <button onClick={handleSearch} className='find-btn'><img src={PovStekloSVG} alt='icon' height='25'/></button>
            </div>

        </div>
    )
}

export default SearchBar