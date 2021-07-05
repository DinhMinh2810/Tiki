$(document).ready(function () {
  $(".slick__slider").slick({
    dots: false,
    infinite: false,
    speed: 200,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: false,
        },
      },
    ],
  });
});

