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
    {
        label: "Shoes",
        options: [
            { value: 7, label: "Hiking Shoes"},
            { value: 8, label: "Swimming Shoes"},
            { value: 9, label: "Walking Shoes"},
            { value: 0, label: "Sneakers"},
            { value: 0, label: "Boot"},
            { value: 0, label: "Loafer"},
            { value: 0, label: "Heels"},
        ],
    },
    {
        label: "Slippers",
        options: [
            { value: 0, label: "Sliders"},
            { value: 0, label: "Ballerina Slippers"},
            { value: 0, label: "Bootie Slippers"},
            { value: 0, label: "Moccasin Slippers"},
        ],
    },
];


function CategoriesMenu (){

    function handleChange(selectedOptions) {
        // Extract values of selected options
        const data = {categories: selectedOptions.map(option => option.value)};

        console.log("Data:", data);

        axios.post("https://api/product_search", { data })
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
            height: "40px",
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
            color: "rgb(0,0,0)",
            "&:hover": {
                backgroundColor: "rgb(213,210,210)",
                color: "rgb(0,0,0)",
            },
        }),
        placeholder: (base) => ({
            ...base,
            color: "#ffffff",
            fontFamily: "Arial",
            fontSize: "16px",
            textAlign: "center",
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