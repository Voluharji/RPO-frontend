import { Link } from "react-router-dom";
import CountrySelect from "./CheckoutPageComponents/Countryselector.jsx";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import "./CheckoutPage.css";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import EuroOutlinedIcon from "@mui/icons-material/EuroOutlined";
import ToggleButton from "@mui/material/ToggleButton";
import { Button } from "@mui/material";
import { useState } from "react";

import logoSVG from '../../Components/NavBar/NavBarAssets/VoSuHi.svg'

function CheckoutPage() {
    const [selectedToggle, setSelectedToggle] = useState("pickup");

    const handleToggle = (value) => {
        setSelectedToggle(value);
    };

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

                    }}
                    noValidate
                    autoComplete="off"
                >
                    {/* Toggle buttons for Delivery and Pick Up */}
                    <ToggleButton
                        value="delivery"
                        selected={selectedToggle === "delivery"} // Check if this is selected
                        onClick={() => handleToggle("delivery")} // Toggle state on click
                        sx={{
                            color: selectedToggle === "delivery" ? "rgb(204,134,5)" : "rgb(204,134,5)",
                            backgroundColor: selectedToggle === "delivery" ? "rgb(204,134,5)" : "rgba(204,134,5,0.22)",
                            borderColor: "rgb(197,129,0)",
                        }}
                    >
                        <h3>DELIVERY</h3>
                    </ToggleButton>
                    <ToggleButton
                        value="pickup"
                        selected={selectedToggle === "pickup"} // Check if this is selected
                        onClick={() => handleToggle("pickup")} // Toggle state on click
                        sx={{
                            color: selectedToggle === "pickup" ? "white" : "rgb(204,134,5)",
                            backgroundColor: selectedToggle === "pickup" ? "rgb(204,134,5)" : "rgba(204,134,5,0.22)",
                            borderColor: "rgb(197,129,0)",
                        }}
                    >
                        <h3>PICK UP</h3>
                    </ToggleButton>

                    <hr/>
                    <hr/>

                    <TextField id="outlined-basic" label="Cardholder name" variant="outlined"/>
                    <TextField id="outlined-basic" label="Cardholder surname" variant="outlined"/>

                    <TextField id="outlined-basic" label="Billing address" variant="outlined"/>
                    <TextField id="outlined-basic" label="Post number" variant="outlined"/>

                    <TextField id="outlined-basic" label="Phone number" variant="outlined"/>
                    <CountrySelect sx={{width: "60%"}}/>

                    <hr/>
                    <hr/>

                    <CreditScoreOutlinedIcon fontSize="medium"/>
                    <EuroOutlinedIcon fontSize="medium"/>

                    <TextField id="outlined-basic" label="Card number" variant="outlined"/>
                    <TextField id="outlined-basic" label="Expiration date" variant="outlined"/>
                    <TextField id="outlined-basic" label="CVC" variant="outlined"/>

                    <Button
                        variant="outlined"
                        sx={{
                            color: "rgb(204,134,5)",
                            borderColor: "rgb(197,129,0)",
                        }}
                    >
                        <h3>PURCHASE</h3>
                    </Button>

                    <Link to="/ShopPage" className="nav-link">
                        <Button
                            variant="outlined"
                            sx={{
                                color: "black",
                                borderColor: "black",
                            }}
                        >
                            <h4>CANCEL TRANSACTION</h4>
                        </Button>
                    </Link>
                </Box>
            </div>
        </>
    );
}

export default CheckoutPage;
