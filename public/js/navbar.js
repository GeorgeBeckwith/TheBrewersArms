//Responsive Nav
function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar-collapse") {
      x.className += " responsive";
    } else {
      x.className = "navbar-collapse";
    }
}

//Hide Nav once link is clicked
function hide(){
    console.log("hide");
    var click = document.getElementById("myNavbar");
    click.style.display = "none" ;
}