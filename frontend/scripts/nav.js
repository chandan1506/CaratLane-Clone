 //logout feature//

 function ifUser(){
    let logout = document.getElementById("logout")
    logout.style.display = "block"
    logout.addEventListener("click",async ()=>{
      localStorage.clear("token")
      logout.style.display = "none"
      await  swal(
          "Logout Successfull",
          "success"
        );
    })
  }
  
  
  
              //logout feature//
  window.addEventListener("load",()=>{
      let token = localStorage.getItem("token")
      console.log(token)
      if(token){
          ifUser()
      } 
  })
            
    //search function//

function searchfunction()
{
    window.location.href='./ringspage.html'
}

     