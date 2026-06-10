var sidnav = document.getElementById("sidnav")
var menuicon = document.getElementById("menuicon")
var closeNav = document.getElementById("closeNav")

closeNav.addEventListener("click", function () {
    sidnav.style.right = "-50%";
})

menuicon.addEventListener("click", function () {
    sidnav.style.right = "0";
})
//product search functionality//
var productContainer = document.getElementById("product-container")
var search = document.getElementById("search")
var productlist = productContainer.querySelectorAll("div")
search.addEventListener("keyup", function (){
    var enteredvalue = event.target.value.toUpperCase()
    for (count = 0; count < productlist.length; count++) {
        var productname = productlist[count].querySelector("h2").textContent
        if (productname.toUpperCase().indexOf(enteredvalue) < 0)
        {
            productlist[count].style.display = "none"
        }
        else{
            productlist[count].style.display = "block"
        }
    }
})
