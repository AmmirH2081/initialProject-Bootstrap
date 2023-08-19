// set the date we are counting down to
// var countDownDate = new Date("jan 5, 2021 15:37:25").getTime();
var countDownDate = new Date("February 5, 2024 15:37:25").getTime();

// update the count down every 1 second
var x = setInterval(function(){

    // get todays date and time
    var now = new Date().getTime();

    var distance = countDownDate - now;

    // time calculate
    var days = Math.floor(distance / (1000*60*60*24));
    var hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    var minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
    var seconds = Math.floor((distance % (1000*60)) / 1000 );

    // output the result in an elment with id="demo"
    document.getElementById("demo").innerHTML= '<span id="day">'+ days + '</span>' + '<span id="hours">'+ hours + '</span>' + '<span id="minutes">' + minutes + '</span>' + '<span id="seconds">' + seconds + '</span>' ;

    // if count down is over , ...
    if(distance < 0){
        clearInterval(x);
        document.getElementById("demo").innerHTML="به پایان رسید";
    }
    

} , 1000);

// --------------------

$(document).ready(function() {
 
    $(".owl-carousel").owlCarousel({

        rtl:true,
        loop:true,
        autoPlay: false, //Set AutoPlay to 3 seconds
        margin:4,
        items : 4,
        slideby:3,
        nav:true,
        center:true,
        // itemsDesktop : [1199,3],
        // itemsDesktopSmall : [979,3],
        autoplaytimeout:5000,
        autoplayhoverpause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                center:false,
            },
            1200:{
                items:4,
                nav:true,
            }
        }

   
    });
   
  });


// ---------------------------------  



// var owl = $('.owl-carousel');
// owl.owlCarousel({
//     rtl:true,
//     items:4,
//     margin:4,
//     docts:true,
//     loop:true,
//     nav:true,
//     autoplay:false,
//     autoplaytimeout:5000,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },            
//         960:{
//             items:5
//         },
//         1200:{
//             items:6
//         }
//     }
// });
// owl.on('mousewheel', '.owl-stage', function (e) {
//     if (e.deltaY>0) {
//         owl.trigger('next.owl');
//     } else {
//         owl.trigger('prev.owl');
//     }
//     e.preventDefault();
// });

