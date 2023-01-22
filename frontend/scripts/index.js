let i=0;
let images=[]

images[0] = "https://cdn.caratlane.com/media/static/images/V4/2023/CL/01-JAN/AppBanner/Blaze/01/Desktop_1920-x560_toplisting.jpg"
images[1] = "https://cdn.caratlane.com/media/static/images/V4/2022/Shaya/12_Dec/19)12_2022/CL_x_Shaya_Banners/Desktop_Toplisting_1920x560.jpg"



function changeImage(){ 
   document.querySelector(".container").innerHTML = "";
   let img = document.createElement("img");
     img.src = images[i];
 document.querySelector(".container").append(img);

 if(i<images.length-1){
    i++;
}else{
    i=0;
}
setTimeout("changeImage()",3000)
}
changeImage()   


function searchfunction()
{
    window.location.href='./ringspage.html'
}