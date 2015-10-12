How to link the jQuery library using a link:
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js">
</script>

Start every js file with the following command:
$(document).ready(function(){
})

You may select specific elements in the page, using the console. For example:

$("h1")

It should return an array with selected elements:
[><h1>...</h1>]

The format for selecting elements is:
$("<element name, class, id, or XPath>")

The $(document).ready() snippet is to ensure your code doesn't 
fire until the page is completely loaded. 

// Anonymous Function Examples:

function(){
alert("This is an anonymous function");
}

or stored in a variable:

var myFunction = function() {alert("hello world!");}

A callback is an anonymous function supplied to another
function to be run when that function is done running. For example:


// Define an anonymous function called function1
var function1 = function() {alert("hello world!");}

// Declare a regular or anonymous function that takes another
// function as an argument, does something,
// then runs that other function
function someRunner(anyFunction){ console.log(2+2); anyFunction(); }

// Call the regular function, supplying the initial
// anonymous function as an argument
someRunner(someOtherFunction);

To ensure your document is ready before the jQuery code loads, use the following:

$(document).ready(
//Code that executes when the document is ready
function(){
alert('The document is ready');
}
);

Showing and Hiding use the following commands:
$("h2").hide();

$("h2").show();

FadeIn, and FadeOut commands. (The number deliniates the speed of the fade):

$("h1").fadeOut(2000);
$("h1").FadeIn(4000);

Sliding commands:

$("#img1").slideUp(9000);
//Fade out over  seconds
$("#img1").slideDown(8000);
//Fade in over 8 seconds

Animate CSS:
You can animate CSS elements. For Example:

$(".img1").animate( {
opacity: 0.25,
width: 70%
} , 2000 );

Click Event:

$("h2").click(
function(){
alert('click it like its hot!');
}
);

Using a callback for a sequence example:

var animateMenu = function(){
$(".menu").animate( {opacity: .5} )
}
$(".menu").show(animateMenu)