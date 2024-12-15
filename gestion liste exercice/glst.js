function fct1() {
var txt= document.getElementById("txt");
var  tab =document.getElementById("tab");
var ele= document.getElementsByName('choix');


// cree les td 
td1= document.createElement("td");
var x= document.createTextNode( "" + txt.value);

td1.appendChild("x");

//button  modifier

var modifier = document.createElement("input");
modifier.setAttribute("type","button");
modifier.setattribute("onclick","remove(this)");
modifier.value("Modifier");



var td2=document.createElement('td');

td2.appendchild("modifier");




// button suprimer
var btndelete=document.createElement("input");
btndelete.setAttribute=  ("type" , "button");
btndelete.setAttribute=  ("onclick" , "remove(this)");
btndelete.value="supperimer";
var td3=document.createElement('td');
td3.appendChild(btndelete);


// checker la condition

if (ele[0].checked)
{
    var row=tab.insertRow(0);
}else{
    var row=tab.insertRow(-1);
}


row.appendChild( td1);

row.apendChild( td2);
row.apendhild( td3);
}


function update(){

}

function  remove( ){

}



