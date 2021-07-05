$(document).ready(function () {
  $(".slick__slider").slick({
    dots: false,
    infinite: false,
    speed: 200,
    slidesToShow: 5,
    slidesToScroll: 5,
    swipe:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 4,
          slidesToScroll: 2,
          swipe:true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          arrows: false,
          swipe:true,
        },
      },
    ],
  });
});



