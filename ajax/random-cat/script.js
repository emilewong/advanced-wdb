/* global $ */

var $img = $('#img');
var $btn = $('#btn');
var $quote = $('#quote-text');
var $spinner = $('.spinner');

//Just some kitty quotes
var quotes = [
    'Time spend with cats is never wasted.',
    'Until one has loved an animal a part of one\'s soul remains unawakened.',
    'There are two means of refuge from the misery of life — music and cats.',
    '“Meow” means “woof” in cat.',
    'One day I was counting the cats and I absent-mindedly counted myself.',
    'A cat has absolute emotional honesty: human beings, for one reason or another, may hide their feelings, but a cat does not.',
    'Never try to outstubborn a cat.',
    'I love cats because I enjoy my home; and little by little, they become its visible soul.',
    'Authors like cats because they are such quiet, lovable, wise creatures, and cats like authors for the same reasons.'
];


$btn.on('click', getMeow);

//Get random cat photo
function getMeow() {
    $.ajax({
        method: 'Get',
        url: 'https://random.cat/meow'
    })
    .done(loadData)
    .fail(handleErrors);
}

function loadData(cat) {
    $img.off();
    //Generate random number
    var rand = Math.floor(Math.random() * quotes.length);
    //Fade out quote and start spinner
    $quote.fadeTo(500, 0);
    $spinner.addClass('spin');
    //Fade out img
    $img.fadeTo(500, 0, function() {
        //Update img src
        $(this).attr('src', cat.file).on('load', function() {
            //Fade in and stop spinner
            $(this).fadeTo(500, 1);
            $spinner.removeClass('spin');
            $quote.text(quotes[rand]).fadeTo(500, 1);
        });
    });
}

function handleErrors() {
    $img.css({'opacity': '0'});
    $quote.text('Something went wrong... :(');
}

$(window).on('resize load', function(){
   if($(this).width() <= 460) {
       $btn.html('<i class="fa fa-paw"></i>');
   }
   else {
       $btn.html('<i class="fa fa-paw"></i> Get cuteness right meow');
   }
});