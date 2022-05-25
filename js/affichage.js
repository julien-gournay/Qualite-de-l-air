// AFFICHAGE HEURE
window.onload = function() {
    horloge('div_heure'); //chargement automatique de l'heure
    buttonClickGET(); //chargement automatique des valeurs
    afficherDate()//chargement automatique de la date
};

function horloge(el) {
    if (typeof el == "string") { el = document.getElementById(el); }

    function actualiser() {
        var date = new Date();
        var str = date.getHours();
        str += ':' + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
        str += ':' + (date.getSeconds() < 10 ? '0' : '') + date.getSeconds();
        el.innerHTML = str;
    }
    actualiser();
    setInterval(actualiser, 1000);
}

// AFFICHAGE DATE
function pause(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function afficherDate() {
    while (true) {
        await pause(0); //temps de chargement
        var cejour = new Date();
        var options = { weekday: "long", year: "numeric", month: "long", day: "2-digit" };
        var date = cejour.toLocaleDateString("fr-FR", options);
        var heure = ("0" + cejour.getHours()).slice(-2) + ":" + ("0" + cejour.getMinutes()).slice(-2) + ":" + ("0" + cejour.getSeconds()).slice(-2);
        var dateheure = date + " ";
        var dateheure = dateheure.replace(/(^\w{1})|(\s+\w{1})/g, lettre => lettre.toUpperCase());
        document.getElementById('div_date').innerHTML = dateheure;
    }
}


//function hinfo() {
//    var journee = ;
//    var soiree = ;
//    if (new Date >= );
//    else if ();
//}



var callBackGetSuccess = function(data) {
    console.log("donnees api", data)
    //alert("Meteo temp  : "  + data.data.iaqi.pm10.v);
    var element3 = document.getElementById("v3"); //texte PM10
    element3.innerHTML = data.data.iaqi.pm10.v  + " PPM" ; 
    var element2 = document.getElementById("v2"); //texte NO2
    element2.innerHTML = data.data.iaqi.no2.v + " PPM" ; 
}

function buttonClickGET() {
    
    var url = "https://api.waqi.info/feed/tourcoing/?token=513e8d565672413feab137d48078d6014d7816d0" //url api

    $.get(url, callBackGetSuccess).done(function() {
        //alert( "second success" );
      })
      .fail(function() {
        alert( "Une ERREUR est survenue suite à la deconnexion de l'API ou à un problème dans le code." );
      })
      .always(function() {
        //alert( "Les valeurs ont bien était mis a jour." );
      });
}

setTimeout(() => {
    window.location.reload(true);
}, 60000); //rechargement de la page toute les minutes




var today=new Date();
var heure="";
function messagevariable() {
var time=today.getHours();
heure=""
if(time>=24 && time<6)
heure="Bonne nuit !"
if(time>=6 && time<13)
heure="Bonne journée !"
if(time>=13 && time<20)
heure="Bon aprés midi !"
if(time>=20 && time<24)
heure="Bonne soirée"
}
//messagevariable();
//document.writeln(heure) AFFICHER LE MESSAGE
