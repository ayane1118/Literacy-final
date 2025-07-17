window.addEventListener('load', function () {
    var $button = this.document.querySelector('.toggle-menu-button');
    var $menu = this.document.querySelector('.header-site-menu');
    $button.addEventListener('click', function () {
        if ($menu.classList.contains('is-show')) {
        $menu.classList.remove('is-show');
        }
        else {
        $menu.classList.add('is-show');
        }
    });
});



$(function () {
    $(window).scroll(function () {
        $("nav.floating").stop().animate(
            {"top": $(window).scrollTop() + 100},
        500);
    });
});


$(function() {
const images = [
    'images/meijo_view.jpg',
    'images/meijo_view2.jpg',
    'images/meijo_view3.jpg',
    'images/meijo_view4.jpg'
];

let currentIndex = 0;

  // 5秒ごとに画像を切り替える
setInterval(function() {
    currentIndex = (currentIndex + 1) % images.length;
    $('.first-view').css('background-image', 'url(' + images[currentIndex] + ')');
}, 3000);
});