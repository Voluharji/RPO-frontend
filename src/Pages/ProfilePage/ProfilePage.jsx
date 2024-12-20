import NavBar from '../../Components/NavBar/NavBar.jsx';
import Footer from "../../Components/Footer/Footer.jsx";
import './ProfilePage.css'

function ProfilePage() {

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return undefined;
    }

    //spodnja funkcija se ne dela
    /*function fetchWithToken() {
        const token = getCookie("token");

        if (!token) {
            alert("You are not logged in! Please log in to access this data.");
            return;
        }

        fetch(`http://127.0.0.1:8081/api/login_check`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Request failed: ${response.statusText}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log("Data received:", data);
            })
            .catch((error) => {
                console.error("Error during fetch:", error);
            });
    }
    fetchWithToken();*/


    return (
        <> <NavBar/>
            <main>

            </main>
            <Footer/>
        </>
    )
}export default ProfilePage