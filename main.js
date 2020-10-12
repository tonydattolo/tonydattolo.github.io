// // sticky nav menu
// $(document).ready(function (){

//     let nav_offset_top = $('.header_area').height() + 50;

//     function navbarFixed() {
//         if ($('.header_area').length) {
//             $(window).scroll(function() {
//                 let scroll = $(window).scrollTop();
//                 if (scroll >= nav_offset_top) {
//                     $('.header_area .main-menu').addClass('navbar_fixed');
//                 } else {
//                     $('.header_area .main-menu').removeClass('navbar_fixed');
//                 }
//             })
//         }
//     }

//     navbarFixed();

// });

// var items = document.getElementsByClassName("nav-item");
// var links = header.getElementsByClassName("nav-link");

// var navCont = document.getElementById("navbarNav");
// var links = navCont.getElementsByClassName("nav-item");

// for (let i = 0; i < links.length; i++) {
//     links[i].addEventListener("click", function () {
//         var currentActive = document.getElementsByClassName("active");
//         currentActive[0].classList.remove("active");
//         this.classList.add("active");
//     });
// }

// $(document).ready(function() {
//     $('navbar-nav li a').click(function() {
//         $(this).siblings('li').removeClass('active');
//         $(this).parent().addClass('active');
//     });
// });

$(document).on("click", "ul li", function () {
  $("li").removeClass("active");
  $(this).addClass("active");
});
