$(function() {
// ここに追記
});



window.addEventListener('scroll', function() {
    const suggest_img = document.querySelectorAll('.suggest_img');
    const scroll = window.scrollY;
    const windowHeight = window.innerHeight;

    suggest_img.forEach(function(img) {
        const distanceToImg = img.offsetTop;
        if(scroll + windowHeight - 300 > distanceToImg) {
            img.classList.add('is-active');
        }
        else {
            img.classList.remove('is-active');
        }
    });
});