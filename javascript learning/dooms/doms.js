


//1-document dom

var x = document.getElementById("test");
console.log(x.innerHTML);
// when we use a class tagname its a table indice0

var y=document.getElementsByClassName("titre");
console.log(y[0].innerHTML);

var z=document.getElementsByTagName("h4");
console.log(z[1].innerHTML);

//best option queryselectorall
//he can be a table and a single in the same time
var q=document.querySelectorAll("h4");
console.log(q[2].innerHTML);

var p=document.querySelectorAll("h4#titre");
console.log(p[0].innerHTML);



//we can change css easy
var c = document.getElementById("test");
c.style.color="red";
c.style.fontSize= 77  ;

// this one is imprtent we can put in it content html.
document.write("<h3> jjjxhhxh </h3>");

document.hasChildNodes(c);


document.write(document.title);
document.write(document.location);
document.write(document.domain);
document.write("<br>")
document.write(document.cookie);
document.write("<br>")
document.write(document.referrer);
document.write("<br>")
document.write(document.lastChild);
document.write(document.lastModified);


function nouvelleFenetre() {

var ww=window.open("","_blanc", "width=500",'length=500');
ww.document.open();
ww.document.write(" <h1> hello in the new page.</h1> <br>  <div id=")
ww.document.write("wesh>")
ww.document.write(" premierement </div>")
var wesh=ww.document.getElementById("wesh");
wesh.style.backgroundColor="red";

}














///2- windows dooms
var y=parseInt(window.prompt("enter une valeur sil vous plaiser:"));


window.alert("votre number is "+y);
var x=window.confirm("vous voulez sortire?");

// Detect when the entire browser window gains focus
window.addEventListener('focus', function() {
    console.log('Page has gained focus');
    // You can perform actions like:
    // - Resuming timers
    // - Reloading data
    // - Restarting animations
});

// Detect when the window loses focus
window.addEventListener('blur', function() {
    console.log('Page has lost focus');
    // You can perform actions like:
    // - Pausing animations
    // - Stopping timers
    // - Saving current state
});

window.resizeTo(500,500);

console.log(window.length);
console.log(window.name);
console.log(window.innerHeight);

function logWindowProperties() {
    var output = '';
    output += 'window.length: ' + window.length + '<br>';
    output += 'window.name: ' + window.name + '<br>';
    output += 'window.innerHeight: ' + window.innerHeight + '<br>';
    
    // Additional properties for comparison
    output += 'window.innerWidth: ' + window.innerWidth + '<br>';
    output += 'window.outerHeight: ' + window.outerHeight + '<br>';
    output += 'window.outerWidth: ' + window.outerWidth + '<br>';

    document.getElementById('output').innerHTML = output;
}


//3-element


//Lister les titres de niveau 2 de la page
var elements = window.document.getElementsByTagName("H4");
for(var i = 0; i < elements.length; i++)
console.log(" -> : "+elements[i].nodeName +","+
elements[i].firstChild.nodeValue);


// -> : H4, hello world 1
// doms.js:126  -> : H4, hello world 2
// doms.js:126  -> : H4, hello world 3
// doms.js:126  -> : H4, fuck off
// doms.js:126  -> : H4, choose your car:





// 3-forums dooms
//remarque : inpute inside label is helping with clicking 
// in the thing it will check the box


