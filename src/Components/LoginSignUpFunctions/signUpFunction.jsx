
function SignUpFunction({email, username, password, phoneNumber, firstName, lastName}) {


    const formData = new FormData();
    formData.append("email", email);
    formData.append("username", username);
    formData.append("password", password);
    formData.append("phoneNumber", phoneNumber);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);

    return (
        fetch(`http://127.0.0.1:8081/api/registration`, {method: "POST", body: formData})

            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Sign up failed: ${response.statusText}`);
                }

                return response.json();
            })

            .catch((error) => {
                console.error("Error during registration:", error);
                throw error;
            })
    )

}export default SignUpFunction;