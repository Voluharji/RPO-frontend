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
            backgroundColor: "#d9c1a5",
            borderColor: state.isFocused ? "rgb(215, 174, 121)" : "rgb(215, 174, 121)",
            boxShadow: state.isFocused ? "0 0 0 2px rgb(215, 174, 121)" : null,
            width: "100%",
            paddingRight: "0px",
            marginRight: "0px",
            height: "100%",
            borderRadius: "0px",
            "&:hover": {
                borderColor: "rgb(215, 174, 121)",
            },
        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? "rgb(215, 174, 121)" : "white",
            color: state.isFocused ? "rgb(252,252,252)" : "rgb(215, 174, 121)",
            "&:active": {
                backgroundColor: "rgb(239,225,211)",
            },
        }),
        multiValue: (base) => ({
            ...base,
            backgroundColor: "white",
            color: "rgb(241,233,221)",
        }),
        multiValueLabel: (base) => ({
            ...base,
            color: "rgb(215, 174, 121)",
        }),
        multiValueRemove: (base) => ({
            ...base,
            color: "rgb(128,126,126)",
            "&:hover": {
                backgroundColor: "rgb(213,210,210)",
                color: "rgb(128,126,126)",
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