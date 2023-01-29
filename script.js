// // When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.getElementById("navbar");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

window.addEventListener("scroll", function(){
  var nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});


// window.addEventListener("scroll", function(){
//   var anchor = document.querySelectorAll(".anchor-text");

//   anchor.classList.toggle("anchor-text-black", window.scrollY > 0);
// });






window.addEventListener("scroll", function(){

  var anchor = [...document.querySelectorAll(".anchor-text")];
  anchor.forEach(function(element){
    element.classList.toggle("anchor-text-black", window.scrollY > 0)
  })

});

