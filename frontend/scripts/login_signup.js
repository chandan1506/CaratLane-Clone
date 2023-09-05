// <--------------signup------------>
let registerForm = document.getElementById("signup-form-container")
registerForm.addEventListener("submit",async (e)=>{
e.preventDefault()
let name = document.querySelector(".signup-name").value;
let email = document.querySelector(".signup-email").value;
let password = document.querySelector(".signup-password").value;
let userObj = { name, email, password };
try{
        let register_request = await fetch("https://angry-turtleneck-lamb.cyclic.app/users/signup",{
            method:"POST",
            headers:{
               "Content-Type": "application/json"
            },
            body:JSON.stringify(userObj)
        })
        const res = await register_request.json() 
        if(res.message == "User Registered"){
            await swal(`${res.message}`,"You are now Registered!","success")
        }else{
            await swal(`${res.message}`,"","error")
        }
} catch (error) {
        await swal("An error occurred. Please try again later.", "", "error");
    }
    })

    
 //<-------------------login---------------->
 let loginForm = document.getElementById("login-form-container")
 loginForm.addEventListener("submit", async (e) => {
     e.preventDefault()
     let email = document.querySelector(".login-email").value;
     let password = document.querySelector(".login-password").value;
     let userObj = { email, password };

     try {
         let login_request = await fetch("https://angry-turtleneck-lamb.cyclic.app/users/login", {
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
                 "Welcome to Jewels",
                 "Lets Explore, Redirecting to Home page....",
                 "success"
               );
             localStorage.setItem("token", res.token)
         window.location.href = "../index.html"
         }else{
             await swal("plz Login Again","","error");
         }
         
     } catch (error) {
        await swal("An error occurred. Please try again later.", "", "error");
     }
 })