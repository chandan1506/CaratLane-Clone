// const { json } = require("body-parser")

console.log("product page");

let query = "ring";
async function products() {
  try {
    if (query !== undefined) {
      let res = await fetch(
        `https://angry-turtleneck-lamb.cyclic.app/usersrender/products?type=${query}`
      );
      let data = await res.json();
      console.log(data);
      renderdata(data);
    } else {
      let res = await fetch(`https://angry-turtleneck-lamb.cyclic.app/usersrender/products`);
      let data = await res.json();
      console.log(data);
      renderdata(data);
    }
  } catch (error) {}
}

// query="ring"
products();

let loader = document.getElementById("loader")
function renderdata(data) {
  loader.style.display = "none"
  let display = data.map((element) => {
    return `
      <div id="card">
                    <div id="cardtop">
                        <div>
                            <p id="seller">${element.seller}</p>
                        </div>
                        <div >
                            <button id="wishlist" > 
                                <i data-id=${element._id} class="fa fa-heart-o"  aria-hidden="true" style="font-size:24px;" ></i>
                                   </button>
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
                    
                    <button id="addtocart" data-id=${element._id}><i class="fa fa-cart-plus" aria-hidden="true"></i>Add to Cart</button>
                </div>`;
  });

  document.getElementById("renderdata").innerHTML = display.join(" ");

  let btn = document.querySelectorAll("#addtocart");
  for (let addCardBtn of btn) {
    addCardBtn.addEventListener("click", function (e) {
      // alert("Added On cart Page")
      cartcard_data(e.target.dataset.id);
    });
  }

  let wishlist = document.querySelectorAll("#wishlist");
  for (let wishlistBtn of wishlist) {
    wishlistBtn.addEventListener("click", function (e) {
      // alert("Added On cart Page")
      wishlistcard_data(e.target.dataset.id);
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
    console.log("inside post");
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
  } catch (error) {}
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

let sort = document.getElementById("sort");
sort.addEventListener("click", () => {
  sorting();
});

function sorting() {
  console.log("sort");
  let value = document.querySelector("#sort").value;
  console.log(value);
  if (value == "rec") {
    products();
  }
  if (value == "desc") {
    sortHightoLow();
  }
  if (value == "asc") {
    sortLowtoHigh();
  }
}

const sortLowtoHigh = async () => {
  try {
    const res = await fetch(
      `https://angry-turtleneck-lamb.cyclic.app/usersrender/sorting?type=${query}&sort=asc`
    );
    const data = await res.json();
    console.log(data);
    renderdata(data);
  } catch (error) {
    console.log(error);
  }
};

const sortHightoLow = async () => {
  try {
    const res = await fetch(
      `https://angry-turtleneck-lamb.cyclic.app/usersrender/sorting?type=${query}&sort=dsc`
    );
    const data = await res.json();
    console.log(data);
    renderdata(data);
  } catch (error) {
    console.log(error);
  }
};

//  filter by price

let price1 = document.getElementById("price1");

price1.addEventListener("click", () => {
  filterbyprice(price1);
});

let price2 = document.getElementById("price2");

price2.addEventListener("click", () => {
  filterbyprice(price2);
});

let price3 = document.getElementById("price3");

price3.addEventListener("click", () => {
  filterbyprice(price3);
});

let price4 = document.getElementById("price4");

price4.addEventListener("click", () => {
  filterbyprice(price4);
});

let price5 = document.getElementById("price5");

price5.addEventListener("click", () => {
  filterbyprice(price5);
});

let price6 = document.getElementById("price6");

price6.addEventListener("click", () => {
  filterbyprice(price6);
});

let price7 = document.getElementById("price7");

price7.addEventListener("click", () => {
  filterbyprice(price7);
});

let price8 = document.getElementById("price8");

price8.addEventListener("click", () => {
  filterbyprice(price8);
});

let filterbyprice = async (el) => {
  console.log(el.value);
  let value = el.value;
  try {
    let res = await fetch(
      `https://angry-turtleneck-lamb.cyclic.app/usersrender/filterbyprice?type=ring&filter=${value}`
    );

    let data = await res.json();
    console.log(data);
    renderdata(data);
  } catch (error) {
    console.log({ message: error });
  }
};

// filter by product type

let type1 = document.getElementById("type1");

type1.addEventListener("click", () => {
  filterbytype(type1);
});

let type2 = document.getElementById("type2");

type2.addEventListener("click", () => {
  filterbytype(type2);
});

let type3 = document.getElementById("type3");

type3.addEventListener("click", () => {
  filterbytype(type3);
});

let type4 = document.getElementById("type4");

type4.addEventListener("click", () => {
  filterbytype(type4);
});

let type5 = document.getElementById("type5");

type5.addEventListener("click", () => {
  filterbytype(type5);
});

let type6 = document.getElementById("type6");

type6.addEventListener("click", () => {
  filterbytype(type6);
});

let type7 = document.getElementById("type7");

type7.addEventListener("click", () => {
  filterbytype(type7);
});

let type8 = document.getElementById("type8");

type8.addEventListener("click", () => {
  filterbytype(type8);
});

let filterbytype = async (element) => {
  // console.log(element.value)
  let type = element.value;
  console.log(type);

  try {
    let res = await fetch(
      `https://angry-turtleneck-lamb.cyclic.app/usersrender/filterbytype/?type=${type}`
    );
    let data = await res.json();
    console.log(data);
    renderdata(data);
  } catch (error) {}
};


