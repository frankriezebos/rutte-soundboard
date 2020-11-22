$(window).on('load', function(){
    $('.logo, .content-block').addClass('loaded');

    setTimeout(function() { 
        $('.logo, .content-block').removeClass('loaded');
    }, 300);
});

$('.content-block audio').attr('id', function (i) {
    return 'audio' + (i + 1);
});

$('.content-block a').attr('onclick', function (i) {
    return 'PlaySound' + (i + 1) + '()';
});

$('.content-block').click(function() {
    $(this).find('.content-block-image').addClass('clicked');

    setTimeout(function() { 
        $('.content-block-image').removeClass('clicked');
    }, 300);
});

var audio1 = new Audio();
audio1.src = "audio/gewoon-je-bek-houwe.mp3";

var audio2 = new Audio();
audio2.src = "audio/dan-pleur-je-maar-op.mp3";

var audio3 = new Audio();
audio3.src = "audio/doet-u-zelf-eens-normaal.mp3";

var audio4 = new Audio();
audio4.src = "audio/anderhalve-meter-afstand-mix.mp3";

var audio5 = new Audio();
audio5.src = "audio/hoi-hoi.mp3";

var audio6 = new Audio();
audio6.src = "audio/draag-een-mondneus-masker.mp3";

var audio7 = new Audio();
audio7.src = "audio/anderhalve-meter-afstand-pleur-op.mp3";

function PlaySound1() {
    audio1.play();
}

function PlaySound2() {
    audio2.play();
}

function PlaySound3() {
    audio3.play();
}

function PlaySound4() {
    audio4.play();
}

function PlaySound5() {
    audio5.play();
}

function PlaySound6() {
    audio6.play();
}

function PlaySound7() {
    audio7.play();
}