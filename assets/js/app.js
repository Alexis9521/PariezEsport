/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)


require('../css/app.css');

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
const $ = require('jquery');
/*
$('#btn1').click(() => {
    $('#para1').css('display', 'none');

});
*/

$('#para2 , #para3, #para4').css('display','none');

$('#btn1').click(() => {
    $('#para1').css('display', 'block');
    $('#para2 , #para3, #para4').css('display','none');

});

$('#btn2').click(() => {
    $('#para2').css('display', 'block');
    $('#para1 , #para3, #para4').css('display','none');

});

$('#btn3').click(() => {
    $('#para3').css('display', 'block');
    $('#para2 , #para1, #para4').css('display','none');

});

$('#btn4').click(() => {
    $('#para4').css('display', 'block');
    $('#para2 , #para3, #para1').css('display','none');

});

if(test){

}



console.log('Je suis un test');
