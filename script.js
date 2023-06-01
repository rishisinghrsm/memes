const first = document.getElementsByClassName("first");
const second = document.getElementsByClassName("second");
const but = document.getElementsByClassName("but");
// const classes = span.classList;

but.addEventListener("click", () => {
    second.style.display = "none";
    first.style.display = "block";
    
});


but.addEventListener("click", () => {
    first.style.display = "none";
    second.style.display = "block";
    
});
function myFunction() {
    var element = document.getElementById("myDIV");
    element.classList.remove("mystyle");
  }