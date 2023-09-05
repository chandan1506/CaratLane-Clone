//<-------------------login---------------->
let loginForm = document.getElementById("login-form-container")
loginForm.addEventListener("submit", async (e) => {
    e.preventDefault()
    let email = document.querySelector(".login-email").value;
    let password = document.querySelector(".login-password").value;
    let userObj = { email, password };

    try {
        let login_request = await fetch("https://angry-turtleneck-lamb.cyclic.app/admin/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userObj)
        })
        const res = await login_request.json()
       //  console.log(res) 
       if(res.message == "login sucessfull"){
        await  swal(
            "Welcome To Admin Side",
            "Let's Explore, Redirecting to Admin Page... ",
            "success"
          );
        localStorage.setItem("adminToken", res.adminToken)
        window.location.href = "admin.html"
    }else{
        await swal("plz Login Again","","error");
    }
    } catch (error) {
       await swal("An error occurred. Please try again later.", "", "error");
    }
})