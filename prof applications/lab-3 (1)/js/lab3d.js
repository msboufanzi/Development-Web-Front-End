function f41(){
	/* x est le bouton */
	x=document.getElementById("bt");
	
	/* y est l'élément paragraphe */
	y=document.getElementById("intro");
	
	/* z est le formulaire */
	z=document.getElementById("formGr");
	
	if(x.value=="Cacher"){
		x.value="Afficher";
		x.style.color="blue";
		z.style.visibility = "hidden";
		y.innerHTML ="Formulaire caché"

	}
	else{
		x.value="Cacher";
		x.style.color="red";
		z.style.visibility="visible";
		y.innerHTML ="Formulaire visible"
	}
};

function f42(){
		var mylist=document.getElementById("myList");
		var zonetexte = document.getElementById("groupe");
		zonetexte.value = mylist.options[mylist.selectedIndex].text;
}
	
function f43(){
	var ele = document.getElementById("navpara")
	var listh4 = ele.querySelectorAll('h4')
	console.log("... : "+listh4.length)
	if(listh4.length == 0){
	for(x in navigator)
	ele.innerHTML+= "<h4>"+x+" -- "+navigator[x]+"<\h4>"
	}
	else{
	listh4.forEach(node=>{
	ele.removeChild(node)
	});
	}
}


var curind=3;
function f44(){
	curind++;

	var add= document.getElementById( "myList");
	add.innerHTML+="<option> Groupe"+curind+"</option>";
	alert ("new option is created num :" +curind);
}

function update(){
	var mylist=document.getElementById("myList");
	var idOption=document.getElementById("updateindex");
	console.log('test:'+ mylist.options.length );
	console.log('mylist.options.length'+idOption.value);
	if(idOption.value>=mylist.options.length || idOption.value<0){
	alert("id : "+idOption.value+" non valide ")
	return;
	}
	else{
	var txt = prompt("Taper le nouveau nom : ");
	mylist.options[idOption.value ].text = txt;
	alert("Option "+idOption.value+" modifiée");
	}
	}

