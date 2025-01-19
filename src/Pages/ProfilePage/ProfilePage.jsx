import NavBar from '../../Components/NavBar/NavBar.jsx';
import Footer from "../../Components/Footer/Footer.jsx";
import './ProfilePage.css'
import defaultPicture from "./ProfilePageAssets/img.png"
import Cart from "../../Components/CartFunctions/Cart.jsx";
import {useEffect, useState} from "react";
import EditIcon from '@mui/icons-material/Edit';
import {Button, Modal} from "@mui/material";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

function ProfilePage() {

        const [token, setToken] = useState("");
        const [userData, setUserData] = useState(null);

        useEffect(() => {
            // Fetch the token from cookies
            const fetchedToken = getCookie("token");
            if (fetchedToken) {
                setToken(fetchedToken);
                getUserData(fetchedToken);
            }
        }, []);

        function getCookie(name) {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
            return undefined;
        }

        function getUserData(token) {
            fetch(`http://localhost:8081/api/user/get_user_data`, {
                method: "GET",
                headers: new Headers({
                    'Authorization': `Bearer ${token}`,
                }),
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`Fetch user data failed: ${response.statusText}`);
                    }
                    return response.json();
                })
                .then((data) => {
                    setUserData(data);
                })
                .catch((error) => {
                    console.error("Error fetching user data:", error);
                });
        }

    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        username: userData?.username || "",
        firstName: userData?.firstName || "",
        lastName: userData?.lastName || "",
        email: userData?.email || "",
        phoneNumber: userData?.phoneNumber || "",
        id: userData?.id || "",
    });

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSave = () => {
        fetch(`http://localhost:8081/api/user/update_user_data`, {
            method: "POST",
            headers: new Headers({
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
            }),
            body: formData,
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Fetch user data failed: ${response.statusText}`);
                }
            })
            .then((data) => {
                console.log("User data updated successfully console log:", data);
                handleClose();
            })
            .catch((error) => {
                console.error("Error updating user data:", error);
                alert("Failed to update user data. Please try again.");
            });
    };

    const [reviews, setReviews] = useState([]); // State to store reviews
    const userId = userData?.id;

    // Fetch reviews by userId
    useEffect(() => {
        if (userId) {
            const fetchReviews = async () => {
                try {
                    const response = await fetch(`http://localhost:8081/api/review_get_by_user_id?userId=${userId}`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    });

                    if (!response.ok) {
                        throw new Error(`Failed to fetch reviews: ${response.status} ${response.statusText}`);
                    }

                    const data = await response.json();
                    setReviews(data); // Store fetched reviews in state
                } catch (error) {
                    console.error("Error fetching reviews:", error);
                }
            };

            fetchReviews();
        }
    }, [userId]);


        return (
            <>
                <NavBar/>
                <div className="profile-page">
                    <div className="left-section">
                        <img
                            src={userData?.imgRef || defaultPicture}
                            alt="Profile"
                            className="profile-picture"
                        />
                        <h2 className="username">Username: {userData?.username || "Loading..."}</h2>
                        <div className="user-info">
                            <p>Name: {`${userData?.firstName || "Loading..."} ${userData?.lastName || ""}`}</p>
                            <p>Email: {userData?.email || "Loading..."}</p>
                            <p>Phone: {userData?.phoneNumber || "Loading..."}</p>
                            <p>
                                Member since:{" "}
                                {userData?.timeCreated
                                    ? new Date(userData.timeCreated).toLocaleDateString()
                                    : "Loading..."}
                            </p>
                        </div>

                        <div className="Edit button">
                            <Button variant="outlined" endIcon={<EditIcon/>}
                                    sx={{
                                        color: "rgb(215, 174, 121)",
                                        border: "rgb(215, 174, 121)",
                                        fontSize: "20px",
                                    }}onClick={handleOpen}>
                                Edit
                            </Button>
                        </div>

                        {/* Modal to edit user information */}
                        <Modal open={open} onClose={handleClose}>
                            <Box className={"Modal-box"}>
                                <h2>Edit User Information</h2>
                                <form>
                                    <TextField
                                        label="Username"
                                        name="username"
                                        {...(formData.username != null && { value: formData.username })}
                                        onChange={handleChange}
                                        fullWidth
                                        margin="normal"
                                    />
                                    <TextField
                                        label="First Name"
                                        name="firstName"
                                        {...(formData.firstName != null && { value: formData.firstName })}
                                        onChange={handleChange}
                                        fullWidth
                                        margin="normal"
                                    />
                                    <TextField
                                        label="Last Name"
                                        name="lastName"
                                        {...(formData.lastName != null && { value: formData.lastName })}
                                        onChange={handleChange}
                                        fullWidth
                                        margin="normal"
                                    />
                                    <TextField
                                        label="Email"
                                        name="email"
                                        {...(formData.email != null && { value: formData.email })}
                                        onChange={handleChange}
                                        fullWidth
                                        margin="normal"
                                    />
                                    <TextField
                                        label="Phone Number"
                                        name="phoneNumber"
                                        {...(formData.phoneNumber != null && { value: formData.phoneNumber })}
                                        onChange={handleChange}
                                        fullWidth
                                        margin="normal"
                                    />
                                    <Button
                                        sx={{
                                            marginTop: "15px",
                                            padding: "10px",
                                            background: "rgb(215, 174, 121)",
                                            width: "100%",
                                        }}
                                        variant="contained"

                                        onClick={handleSave}
                                    >
                                        Save Changes
                                    </Button>
                                </form>
                            </Box>
                        </Modal>
                    </div>

                    {/* Right section: Basket and reviews */}
                    <div className="right-section">
                        <div className="basket">
                            <Cart/>
                        </div>

                        <div className="reviews">
                            <h3>Reviews</h3>
                            {reviews.length > 0 ? (
                                reviews.map((review) => (
                                    <p key={review.review_id}>
                                        "{review.description}" - (Rating: {review.rating}/5)
                                    </p>
                                ))
                            ) : (
                                <p>No reviews available.</p>
                            )}
                        </div>
                    </div>
                </div>

                <Footer/>
            </>
        );
}


export default ProfilePage;
