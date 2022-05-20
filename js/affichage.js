window.onload = function() {
    horloge('div_heure');
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


function pause(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function afficherDate() {
    while (true) {
        await pause(1000);
        var cejour = new Date();
        var options = { weekday: "long", year: "numeric", month: "long", day: "2-digit" };
        var date = cejour.toLocaleDateString("fr-FR", options);
        var heure = ("0" + cejour.getHours()).slice(-2) + ":" + ("0" + cejour.getMinutes()).slice(-2) + ":" + ("0" + cejour.getSeconds()).slice(-2);
        var dateheure = date + " ";
        var dateheure = dateheure.replace(/(^\w{1})|(\s+\w{1})/g, lettre => lettre.toUpperCase());
        document.getElementById('div_date').innerHTML = dateheure;
    }
}
afficherDate();

function hinfo() {
    var journee = ;
    var soiree = ;
    if (new Date >= );
    else if ();
}