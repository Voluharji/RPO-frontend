

function LoginFunction({username,password}) {

    //const url = import.meta.env.VITE_BACKEND_URL;

    /*if (!url) {
        console.error('The BACKEND_URL environment variable is not defined');
        return;
    }*/

    return (

        fetch(`http://127.0.0.1:8081/api/login_check`, {method:"POST"
            ,headers:{
            "Content-Type": "application/json",

            },body:JSON.stringify({username:username,password:password})})

            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Login failed: ${response.statusText}`);
                }
                return response.json();
            })
            .then((data) => {
                //console.log(`Token received:`, data.token);
                const expirationTime = new Date(Date.now() + 10 * 60 * 1000).toUTCString(); //nastavo sem na 30 min//expires=${expirationTime};
                document.cookie = `token=${data.token}; path=/; expires=${expirationTime};`

                return data.token;
            })
            .catch((error) => {
                console.error("Error during login:", error);
                throw error;
            })
    )
}export default LoginFunction;