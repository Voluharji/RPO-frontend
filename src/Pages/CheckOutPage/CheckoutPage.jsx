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
import axios from "axios";

function CheckoutPage() {
    const [selectedToggle, setSelectedToggle] = useState("delivery");
    const [phone,setPhone] = useState(0);
    const [name,setName] = useState("");
    const [surname, setSurname] = useState("");
    const [address, setAddress] = useState("");
    const [post,setPost] = useState(0);

    const [cardNum,setCardNum] = useState(0);
    const [expDate, setExpDate] = useState(0);
    const [cvc,setCvc] = useState(0);


    const handleToggle = (value) => {
        setSelectedToggle(value);
    };

    const handlePhone = (event) => {
        setPhone(event.target.value);
    };

    const handleName = (event) => {
        setName(event.target.value);
    };

    const handleSurname = (event) => {
        setSurname(event.target.value);
    };

    const handleAddress = (event) => {
        setAddress(event.target.value);
    };

    const handlePost = (event) => {
        setPost(event.target.value);
    };

    const handleCardNum = (event) => {
        setCardNum(event.target.value);
    };

    const handleExpDate = (event) => {
        setExpDate(event.target.value);
    };

    const handleCvc = (event) => {
        setCvc(event.target.value);
    };

    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();

    const handleCancel = () =>{
        setLoading(true);
        setTimeout(() => {
            navigate("/ShopPage");
            setLoading(false);
        }, 1000)
    }


    const handlePurchase = () =>{
        setTimeout(async () => {
            const data = { method: selectedToggle,
                phone: phone, name: name, surname: surname, address: address, post: post,
            cardNum: cardNum, expDate: expDate,cvc: cvc};

            console.log("Data:", data);

            try {
                const response = await axios.post("https://api/product_search", data);
                console.log("Server Response:", response.data);
            } catch (error) {
                console.error("Error sending data:", error);
            }

        },1000)
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
                        selected={selectedToggle === "delivery"}
                        onClick={() => handleToggle("delivery")}
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
                        selected={selectedToggle === "pickup"}
                        onClick={() => handleToggle("pickup")}
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
                    <TextField onChange={handlePhone} id="outlined-basic" label="Phone number" variant="filled"/>

                    <TextField onChange={handleName} id="outlined-basic" label="Cardholder name" variant="filled"/>
                    <TextField onChange={handleSurname} id="outlined-basic" label="Cardholder surname" variant="filled"/>

                    <TextField onChange={handleAddress} id="outlined-basic" label="Billing address" variant="filled"/>
                    <TextField onChange={handlePost} id="outlined-basic" label="Post number" variant="filled"/>

                    <CreditScoreOutlinedIcon fontSize="medium"/>
                    <EuroOutlinedIcon fontSize="medium"/>

                    <TextField onChange={handleCardNum} id="outlined-basic" label="Card number" variant="filled"/>
                    <TextField onChange={handleExpDate} id="outlined-basic" label="Expiration date" variant="filled"/>
                    <TextField onChange={handleCvc} id="outlined-basic" label="CVC" variant="filled"/>

                    <Button
                        onClick={handlePurchase}
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
