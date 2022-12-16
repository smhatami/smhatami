let burger = document.getElementById("burger-menu")
let navbar = document.getElementsByTagName("aside")
burger.onclick = function(){
    burger.classList.toggle("active-burger")
    burger.classList.toggle("inactive-burger")

    if(burger.classList.contains("active-burger")){
        navbar[0].classList.add("full-aside")
    }else {
        navbar[0].classList.remove("full-aside")
    }
}
