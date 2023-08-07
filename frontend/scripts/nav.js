 //logout feature//

 function ifUser(){
    let logout = document.getElementById("logout")
    logout.style.display = "block"
    logout.addEventListener("click",async ()=>{
      localStorage.clear("token")
      logout.style.display = "none"
      await swal({
         title: 'Are you sure?',
         text: "You won't be able to revert this!",
         icon: 'warning'
         })
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

function searchfunction(){
     let input = document.getElementById("search_book").value
     if(input == "NEW ARRIVALS"){
        window.location.href='./newarrival.html'
     }else if(input == "RINGS"){
        window.location.href='./ringspage.html'
     }else if(input == "EARRINGS"){
        window.location.href='./earing.html'
     }else if(input == "BRACELETS & BANGLES"){
        window.location.href='./bracelet.html'
     }else if(input == "SOLITAIRES"){
        window.location.href='./solitaires.html'
     }else if(input == "MANGALSUTRA"){
        window.location.href='./mangalsutra.html'
     }else if(input == "KIDS"){
        window.location.href='./kid.html'
     }else{
        alert(" Write Correct Page Name Such As :- RINGS, KIDS etc ")
     }
   
}

     