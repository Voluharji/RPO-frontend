import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import axios from "axios";

const animatedComponents = makeAnimated();

const options = [
    {
        label: "Gender",
        options: [
            { value: 1, label: "Male" },
            { value: 2, label: "Female" },
        ],
    },
    {
        label: "Seasons",
        options: [
            { value: 3, label: "Spring" },
            { value: 4, label: "Summer" },
            { value: 5, label: "Autumn" },
            { value: 6, label: "Winter" },
        ],
    },
];


function CategoriesMenu (){

    function handleChange(selectedOptions) {
        // Extract values of selected options
        const values = selectedOptions.map(option => option.value);

        axios.post("https://api/product_search", { values })
            .then(res => {
                console.log("Response:", res);
                console.log("Response Data:", res.data);
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }



    const customStyles = {
        control: (base, state) => ({
            ...base,
            backgroundColor: "#cb2284",
            borderColor: state.isFocused ? "#880d53" : "#880d53",
            boxShadow: state.isFocused ? "0 0 0 2px #880d53" : null,
            width: "100%",
            paddingRight: "0px",
            marginRight: "0px",
            height: "100%",
            borderRadius: "0px",
            "&:hover": {
                borderColor: "#880d53",
            },
        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? "#fbeafa" : "white",
            color: state.isFocused ? "#880d53" : "#333",
            "&:active": {
                backgroundColor: "#ef6eb4",
            },
        }),
        multiValue: (base) => ({
            ...base,
            backgroundColor: "#f3e8f5",
            color: "#880d53",
        }),
        multiValueLabel: (base) => ({
            ...base,
            color: "#880d53",
        }),
        multiValueRemove: (base) => ({
            ...base,
            color: "#880d53",
            "&:hover": {
                backgroundColor: "#880d53",
                color: "#333",
            },
        }),
        placeholder: (base) => ({
            ...base,
            color: "#ffffff",
            fontFamily: "Arial",
            fontSize: "16px",
        })
    };

    return(

        <Select components={animatedComponents}
                options={options}
                placeholder="Select categories..."
                isMulti
                onChange={handleChange}
                styles={customStyles}
        />
    )
}

export default CategoriesMenu