console.log("ok");

//get thing to lightbox

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const img5 = document.getElementById("img5");
const img6 = document.getElementById("img6");
const img7 = document.getElementById("img7");
const img8 = document.getElementById("img8");
const img9 = document.getElementById("img9");
const img10 = document.getElementById("img10");
const img11 = document.getElementById("img11");
const img12 = document.getElementById("img12");
const img13 = document.getElementById("img13");
const img14 = document.getElementById("img14");
const img15 = document.getElementById("img15");
const img16 = document.getElementById("img16");
const img17 = document.getElementById("img17");
const img18 = document.getElementById("img18");
const img19 = document.getElementById("img19");
const img20 = document.getElementById("img20");

var images = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19,img20];
var arrayLength = images.length;
for (var i = 0; i < arrayLength; i++) {
lightGallery(images[i], {
  selector: "a",
});
  
}

const menu = document.querySelector(".nav-list");

// scrolling 
// $(document).ready(function () {
//     $(document).on("scroll", onScroll);
  
//        $('a[href^="#"]').on('click', function (e) {
//         e.preventDefault();
//         $(document).off("scroll");
        
//         $('a').each(function () {
//             $(this).document.querySelector('active').removeAttribute('id';
//         })
//         $(this).document.querySelector('div').id = 'active';
      
          //document.querySelector('active').removeAttribute('id');
         //document.querySelector('div').id = 'active';
         //document.querySelector('active').setAttribute("id", "active");

//         var target = this.hash,
//             menu = target;
//         $target = $(target);
//         $('html, body').stop().animate({
//             'scrollTop': $target.offset().top
//         }, 100, 'swing', function () {
//             window.location.hash = target;
//             $(document).on("scroll", onScroll);
//         });
//     });
// });
$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menuContainer = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#menuContainer a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.navContainer ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}

