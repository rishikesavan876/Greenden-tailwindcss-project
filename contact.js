var sidnav = document.getElementById("sidnav")
var menuicon = document.getElementById("menuicon")
var closeNav = document.getElementById("closeNav")

closeNav.addEventListener("click", function() 
{
    sidnav.style.right = "-50%";
})

menuicon.addEventListener("click", function() 
{
    sidnav.style.right = "0";
})