import {useState} from "react";
import axios from "axios";
function CategoriesMenu (){

    const [selectedValue,setSelectedValue] = useState();

    const options = [
        { value: 1, label: 'Man' },
        { value: 2, label: 'Woman'},
        { value: 3, label: 'Other' },
    ];

    console.log(selectedValue)

    function handleChange (e){
        setSelectedValue(e.target.value)

        axios.post("https://api/product_search", { selectedValue })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    return(
        <select value={selectedValue} onChange={handleChange}>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    )
}

export default CategoriesMenu