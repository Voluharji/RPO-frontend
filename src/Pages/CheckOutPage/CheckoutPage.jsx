import CountrySelect from "./CheckoutPageComponents/Countryselector.jsx";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import "./CheckoutPage.css";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import EuroOutlinedIcon from "@mui/icons-material/EuroOutlined";
import {Button, CircularProgress} from "@mui/material";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

import logoSVG from '../../Components/NavBar/NavBarAssets/VoSuHi.svg'

function CheckoutPage() {
    const [selectedToggle, setSelectedToggle] = useState("delivery");

    const handleToggle = (value) => {
        setSelectedToggle(value);
    };

    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();

    const handleCancel = () =>{
        setLoading(true);
        setTimeout(() => {
            navigate("/ShopPage");
            setLoading(false);
        }, 1500)
    }

    return (
        <>
            <div className="checkoutpage-container">
                <img src={logoSVG} alt="Logo" width="100%" height="10%"/>

                <Box
                    component="form"
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 50%)",
                        width: "47%",
                        gap: 2,
                        margin: 2,
                        opacity: '1'

                    }}
                    noValidate
                    autoComplete="off"
                >

                    <Button
                        value="delivery"
                        selected={selectedToggle === "delivery"} // Check if this is selected
                        onClick={() => handleToggle("delivery")} // Toggle state on click
                        sx={{
                            color: selectedToggle === "delivery" ? "white" : "black",
                            backgroundColor: selectedToggle === "delivery" ? "rgb(0,0,0,1)" : "rgb(255,255,255)",
                            border: "none"
                        }}
                    >
                        <h3>DELIVERY</h3>
                    </Button>
                    <Button
                        value="pickup"
                        selected={selectedToggle === "pickup"} // Check if this is selected
                        onClick={() => handleToggle("pickup")} // Toggle state on click
                        sx={{
                            color: selectedToggle === "pickup" ? "white" : "black",
                            backgroundColor: selectedToggle === "pickup" ? "rgb(0,0,0)" : "rgb(255,255,255)",
                            border: "none"
                        }}
                    >
                        <h3>PICK UP</h3>
                    </Button>

                    <hr/>
                    <hr/>

                    <CountrySelect sx={{width: "60%", border: "none"}}/>
                    <TextField id="outlined-basic" label="Phone number" variant="filled"/>

                    <TextField id="outlined-basic" label="Cardholder name" variant="filled"/>
                    <TextField id="outlined-basic" label="Cardholder surname" variant="filled"/>

                    <TextField id="outlined-basic" label="Billing address" variant="filled"/>
                    <TextField id="outlined-basic" label="Post number" variant="filled"/>

                    <CreditScoreOutlinedIcon fontSize="medium"/>
                    <EuroOutlinedIcon fontSize="medium"/>

                    <TextField id="outlined-basic" label="Card number" variant="filled"/>
                    <TextField id="outlined-basic" label="Expiration date" variant="filled"/>
                    <TextField id="outlined-basic" label="CVC" variant="filled"/>

                    <Button
                        variant="outlined"
                        sx={{
                            color: "white",
                            border: "none",
                            backgroundColor: "black"
                        }}
                    >
                        <h3>PURCHASE</h3>
                    </Button>

                    {
                        loading ? (
                            <CircularProgress sx={{color: "white", marginLeft: "43%"}}/>
                        ) : (
                            <Button
                                onClick={handleCancel}
                                variant="outlined"
                                sx={{
                                    color: "black",
                                    borderColor: "black",
                                }}
                            >
                                <h4>CANCEL TRANSACTION</h4>
                            </Button>
                        )
                    }

                </Box>
            </div>
        </>
    );
}

export default CheckoutPage;
