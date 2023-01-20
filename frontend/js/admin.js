let bag= [];
async function products(){
    try {
         let res=await fetch(`http://localhost:8080/adminproducts/products`)
         let data=await res.json()
         console.log(data)
         bag=data
         renderdata(bag)  
    } catch (error) {
        console.log(error.message)
    }
}
products()


function renderdata(bag)
{
   let display=bag.map((element)=>
   {
      return`
      <div id="card">
                    <div id="cardtop">
                        <div>
                            <p id="seller">${element.seller}</p>
                        </div>
                        <div >
                            <button id="wishlist"> 
                                <i class="fa fa-heart-o"  aria-hidden="true" style="font-size:24px;" ></i>
                                   </button>
                            </div>
                    </div>
                    
                    <img src=${element.image} alt="">
                    <p  id="price">₹${element.price}/-</p>
                    <p id="name">${element.name}</p>
                    <div id="trial">
                        <div>
                           <button id="tryhome" ><i class="fa fa-home" aria-hidden="true"></i> Book Try at Home</button> 
                        </div>
                    <div>
                       <button id="livevedio"><i class="fa fa-video-camera" aria-hidden="true"></i>live vedio call</button> 
                    </div>
                    </div>
                    <div id=cart>
                    
                    <button id="addtocart"><i class="fa fa-cart-plus" aria-hidden="true"></i>Add to Cart</button>
            </div>`
   })

    document.querySelector(".fetchdata").innerHTML=display.join(" ")
}
//--------------create data-----------//

let createForm = document.getElementById("create")
    createForm.addEventListener("submit", async (e) => {
        e.preventDefault()
        let allInputTags = document.querySelectorAll("input")
        try {
            let userObj = {}
            for (let i = 0; i < allInputTags.length; i++) {
                userObj[allInputTags[i].id] = allInputTags[i].value
            }
            let res = await fetch("http://localhost:8080/adminproducts/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // Authorization: localStorage.getItem("token"),
                },
                body: JSON.stringify(userObj)
            })
            if(res.ok){
                // let data = res.json()
                // renderdata(bag)
            alert("notes created")
            }else{
                alert("something went wrong")
            }
            // window.location.href = "shownotes.html"
        } catch (error) {
            console.log(error.message)
        }
    })


    //-------------delete data------------//


//  let del = document.getElementById("del-form")
//     del.addEventListener("submit", async (e) => {
//         e.preventDefault()
//         let id = document.getElementById("pro").value
//         console.log(id)
//         alert(id)
//         let res1 = await fetch(`http://localhost:8080/adminproducts/delete/${id}`, {
//           method: "DELETE",
//         //   headers: { Authorization: localStorage.getItem("token") },
//         })
//           .then((res1) => res1.json())
//           .then((res1) => {
//             alert("DELETED");
//             console.log(res1);
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//      })
    