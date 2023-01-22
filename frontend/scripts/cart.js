console.log("cart page")


let totalproduct=document.getElementById("totalproduct")
let subtotal=document.getElementById("subtotal")
let save=document.getElementById("save")
let totalcost=document.getElementById("totalcost")




async function Cart()
{
    try {
        let res=await fetch(`https://angry-turtleneck-lamb.cyclic.app/cart`,{
            headers:{

                "Authorization":localStorage.getItem("token")
            }
        })
        let data=await res.json()
        console.log(data)
        totalproduct.innerHTML= "Total Product: "+data.length
        console.log(typeof data[0].price)
        const producttotal = data.reduce(
            (accumulator, el) => (accumulator) + (el.price),0
            );
            console.log(producttotal)
            totalcost.innerHTML="₹"+producttotal
        renderdata(data)
    } catch (error) {
        console.log(error)
    }
}

Cart()




function renderdata(data)
{
   let display=data.map((element)=>
   {
      return`
      <div id="card">
                    <div id="cardtop">
                        <div>
                            <p id="seller">${element.seller}</p>
                        </div>
                        <div >
                            
                            </div>
                    </div>
                    <div id="midcard">
                    <img id="image" src=${element.image} alt="">
                    <p  id="price">₹${element.price}/-</p>
                    <p id="name">${element.name}</p>
                    </div>
                    <div id="trial">
                        <div>
                           <button id="tryhome" ><i class="fa fa-home" aria-hidden="true"></i> Book Try at Home</button> 
                        </div>
                    <div>
                       <button id="livevedio"><i class="fa fa-video-camera" aria-hidden="true"></i>live vedio call</button> 
                    </div>
                    
                    </div id=cart>
                    <button id="remove" data-id=${element._id}>remove</button>
                    <button id="addtowishlist" data-id=${element._id}>Add to wishlist</button>
                </div>`
   })

    document.getElementById("renderdata").innerHTML=display.join(" ")

   
    let remove=document.querySelectorAll("#remove");

    for(let removebtn of remove)
    {
        removebtn.addEventListener("click",function(e){
            removeproduct(e.target.dataset.id)
        })
    }

    let wishlist = document.querySelectorAll("#addtowishlist");
    for (let wishlistBtn of wishlist) {
      wishlistBtn.addEventListener("click", function (e) {
        // alert("Added On cart Page")
        wishlistcard_data(e.target.dataset.id);
      });
    }
}




async function wishlistcard_data(id) {
    console.log(id);
    try {
      let res = await fetch(
        `https://angry-turtleneck-lamb.cyclic.app/usersrender/productbyid/${id}`
      );
      let data = await res.json();
      console.log(data);
  
      addtowishlist(data);
    } catch (error) {
      console.log(error);
    }
  }
  
  async function addtowishlist(data) {
    try {
      console.log("function add to wishlist");
      let res = await fetch(`https://angry-turtleneck-lamb.cyclic.app/wishlist/createwihslist`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          "Authorization":localStorage.getItem("token")
        }
      });
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        alert(data.message)
      }
    } catch (error) {
     console.log("cannot fetch wishlist")
    }
  }



  async function removeproduct(id) {
    try {
        console.log("try catch function")
   const res=  await fetch(`https://angry-turtleneck-lamb.cyclic.app/cart/delete/${id}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json",
                "Authorization":localStorage.getItem("token")
            }
        })
        const ans=await res.json()
        console.log("cart user ID")
        console.log(ans)
        Cart()
        alert(ans.message)
       
        
        // alert("note removed")
    } catch (error) {
        
    }
  }



  function checkout()
  {
    window.location.href="./html/payment.html"
  }