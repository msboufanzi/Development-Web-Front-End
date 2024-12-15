

//variables.
var a=2;// Type : Pas de typage, détection auto.
var r=""; //valeur ou "" null 
var ch="said";
var T=["black","bleu","green"];// table is an objet with indice 0
var voiture={model:"bmw",coleur:"bleu"}; // voiture is objet


//to know exactly what type we tap in consol

console.log(typeof ch);  //we have here String.
console.log(ch);//said
console.log(T[0]);//black
console.log(voiture.model); //bmw
console.log(voiture.model);


//the new thing is ** it means the puissane.
console.log(a**a); //4

 



// tables .
//declare un tableau

var table=[1,2,6,4,];
console.log(table);
table.sort();// sort() is a fonction that affiche in the order croissont
console.log(table.toString());

// add somthing in the table
table.push(3,4,2,5,67,8,'ww',9,0,2,2,111,3,45,"test" , "rr");

table.sort();
console.log(table.toString());
console.log(table);
// delete the last one 

console.log(table.length);
table.pop();
console.log(table.toString());

console.log(table.length);

delete table[0]; console.log(table.length);//problem the lenght dont change.
//to solve probleme.
console.log(table.toString());
table.splice(0,1)
console.log(table.toString()); console.log(table.length);

// we want to change a cell

table.splice(1,0,"9TEST99");
console.log(table.toString()); console.log(table.length);










///// chaine de caractere,

var ch1="fin";
var ch2="fin";
// concatination 
var ch12= ch1+ch2


var chl=ch12.length;

console.log(ch12);
console.log(chl);
var cht=ch12.toUpperCase();// we can use tolowercase  .
console.log(cht);

//slice
console.log(ch12.slice(2,5));
console.log(ch12.replace("fin","y"));
console.log(ch12.replace(/fin/ig,"y")); //pour les changer tous .



/// condition iF/else/switch
var  i=5;
var  j="5";


/// when we do only = one the compailer think string=int
// to solve this we do === this one it considerate the deferrence de type et de valeur

if (i===j)
    console.log("i et j sont egaux");
else if (i!==j)
    console.log("i et j sont pas egaux");
 var x=5;

switch (x){
    case 1 : console.log("monday");break;
    case 2 : console.log("tueseday");break;
    case 3 : console.log("wednwsday");break;
    default : console.log("random day");break;


}


// boucle for . kat3awd kankono 3arfin ch7al aykono  ;;;;

for (var ii=0 ; ii < 10; ii=ii+2){
    console.log( "hello");
}
4



// boucles while tant que and do while

var z=0;
while (z<10){
    console.log(z+z);
    z++;

}
z=12;
do {

    // do while the first affivhe it will be afffiched .
    console.log("siri");
    z--;

  }
while (z>10);


// boucle for in and boucle for of ; hey help us in affiching.

//difference betwin the objet and the table ,
//tabes have indice 1234 Int
//objet indice is string is model
//for in is for object

var obj={model:"bmw", km:34 , coleur:"red"};

var xx;
for (xx in obj){
    // it affiche les indice 
    console.log(xx);
    //it affiche les valeur
    console.log(obj[xx]);
}

var tb =["tee",1,6,3];
var tt ;
for (tt of tb){
    console.log (tt);
   
}



// break and continue
// break it just break the boucle
var i;
for (i=0; i<6;i++){
    console.log("ouiiii");
    if(i==3)
     break;
}
// contiue it break the iteration
var i;
for (i=0; i<6;i++){
    
    if(i==3)
     continue;
    console.log("noo");
}
//in the exempl it will afiche everything but no i=3



pars





//les fonctions




//fonction procedure ne retourn rien
function fct1(){
alert("attention");

}

//rien ne passs jusqua en lappel

fct1();
var a, b;
// avec return
function fct2 (a ,b){
    return a*b;// return is comme break 
    //anything behind it dosent matters
}
 var x=6,y=8;
fct2(x,y);
console.log("le produit de vous nombre est"+fct2(x,y));




// variabal var let const
//variable globale bla bla local

const q =7; // it cant change.
// var vs letand const

var i=6;
{
var i=7;
}

console.log(i);//7

// var dont respect{}

var j=6;
{
let j=7;
}

console.log(j);//6
//let and const the respect {is like a fction}


//foreach
var bl=['wa',"ba"];
bl.forEach(fctt);
function fctt(item,index){
    console.log ("voila le "+index +" is "+item);

}


///les exeptions rendre le programme reboste 

// try {
//     consoe("hello");

// } catch(erreur){
   
    
//     onsole.log(erreur);
//     //we can add our message

// }
function checkNumber() {
    // String to number
    var number = parseInt(document.getElementById('txt').value);
    
    // parseInt is responsible for the transfer
    try {
        if (isNaN(number)) {
            throw "This is not a valid number";
        } else if (number < 0) {
            throw "This number is negative";
        } else if (number == 0) {
            throw "The number is zero";
        } else {
            console.log("Very good");
        }
    } catch (e) {
        console.log(e);
    }
}
