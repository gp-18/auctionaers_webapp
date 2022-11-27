let resp = document.getElementById("menubarbtn");
let slider = document.getElementById("slider");
let count = 0;
resp.addEventListener("click",function(){
  console.log("working")
  
  if(count%2 == 0){
    slider.className += " unresponsive";
  }
  else{
    slider.className = "responsive-navbar"
  }
  count++;
});