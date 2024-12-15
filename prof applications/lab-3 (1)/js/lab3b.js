// Fonction JavaScript 
function somme(par1, par2){
    var a=0;
    for(var i=par1; i<=par2; i++)
    a+=i;	
    return a;
}

// Une autre façon d'appeler la fonction précédente
function appliquer(f, v1,v2) { return f(v1,v2);};


