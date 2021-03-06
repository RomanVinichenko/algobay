const button = document.querySelector('.button__links');
const links = document.querySelector('.links');
button.addEventListener('click', function () {
    links.classList.toggle('links__active');
});

$(function () {
    $('.hero__inner').slick({
        loop: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: true,
    });
});

$(function () {
    $('.blog__articles').slick({
        loop: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
});
