console.log("wish list page")

let totalproduct=document.getElementById("totalproduct")


async function wishlist()
{
    try {
        let res=await fetch("https://angry-turtleneck-lamb.cyclic.app/wishlist",{
          headers:{

            "Authorization":localStorage.getItem("token")
        }
        })
        let data =await res.json()
        console.log(data)
        totalproduct.innerHTML= "Total Product: "+data.length
        renderdata(data)
    } catch (error) {
        console.log(error)   
    }
}


wishlist()




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
                    <button id="addtocart" data-id=${element._id}>Add to cart</button>
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

    let cart = document.querySelectorAll("#addtocart");
    for (let cartbtn of cart) {
        cartbtn.addEventListener("click", function (e) {
        // alert("Added On cart Page")
        cartcard_data(e.target.dataset.id);
      });
    }
}




async function cartcard_data(id) {
    console.log(id);
    try {
      let res = await fetch(
        `https://angry-turtleneck-lamb.cyclic.app/usersrender/productbyid/${id}`
      );
      let data = await res.json();
      console.log(data);
  
      addtocart(data);
    } catch (error) {
      console.log(error);
    }
  }
  
  async function addtocart(data) {
    try {
      console.log("function add to wishlist");
      let res = await fetch(`https://angry-turtleneck-lamb.cyclic.app/cart/createcart`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          "Authorization":localStorage.getItem("token")
        },
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
   const res=  await fetch(`https://angry-turtleneck-lamb.cyclic.app/wishlist/delete/${id}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json",
                "Authorization":localStorage.getItem("token")
            }
        })
        const ans=await res.json()

        console.log(ans)
        wishlist()
        alert(ans.message)
        // alert("note removed")
    } catch (error) {
        
    }
  }