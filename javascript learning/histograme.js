// Define the classes array (replace with your actual data)
var classes=new Array();
classes[0]=["CI-1",30];
classes[1]=["CI-2",25];
classes[2]=["CI-3",24];
classes[3]=["LST DA",80];
classes[4]=["LST IDAI",90];
classes[5]=["MST IASD",40];
classes[6]=["MST SIBD ",35];

function generateHistogram() {
    // Calculate sum and average
    var somme = 0;
    for (var i = 0; i < classes.length; i++) {
        somme += parseInt(classes[i][1]);
    }
    var moyenne = somme / classes.length;

    // Width in pixels as a percentage
    var Lg = 45;
    var page = '<h1>Histogramme de l\'effectif des classes</h1>';

    page += '<table style="margin-left:10%; width:' + Lg + '%; border-collapse:collapse;">';

    for (var i = 0; i < classes.length; i++) {
        var pourcentage = Math.round(classes[i][1] * 100 / somme);
        var largeur = Math.round(Lg * (pourcentage / 100));
        page += '<tr style="font-size:12px; height:20px"><td style="width:20%">' + classes[i][0] + '</td>';
        page += '<td> <div style="background-color:';
        if (classes[i][1] > moyenne)
            page += 'red;';
        else
            page += 'blue;';
        page += 'width:' + pourcentage + '%;"> ';
        page += pourcentage + '%</div></td></tr>';
    }
    page += '</table>';
    page += '<br>Nombre total: <b>' + somme + '</b>';
    page += '<br>Nombre moyen: <b>' + Math.round(moyenne) + '</b>';

    // Write to the container instead of using document.write
    document.getElementById('histogram-container').innerHTML = page;
}

// Call the function when the window loads
window.onload = generateHistogram;