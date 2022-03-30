window.onload=function() {
    horloge('div_heure');
    };
    
    function horloge(el) {
    if(typeof el=="string") { el = document.getElementById(el); }
    function actualiser() {
        var date = new Date();
        var str = date.getHours();
        str += ':'+(date.getMinutes()<10?'0':'')+date.getMinutes();
        str += ':'+(date.getSeconds()<10?'0':'')+date.getSeconds();
        el.innerHTML = str;
    }
    actualiser();
    setInterval(actualiser,1000);
    }

    
    var currentdate = new Date();
    date = new Date;
    annee = date.getFullYear();
    moi = date.getMonth();
    mois = new Array('Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre');
    j = date.getDate();
    jour = date.getDay();
    jours = new Array('Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi');
    date = jours[jour]+' '+j+' '+mois[moi]+' '+annee+'';
    var time = currentdate.getHours()+" h "+currentdate.getMinutes()+" min "+currentdate.getSeconds()+" sec";
    document.getElementById('div_date').innerHTML = date;
    document.getElementById('heure').innerHTML = time;
    function ActualiseHeure()
    {
        var time = currentdate.getHours()+" h "+currentdate.getMinutes()+" min "+currentdate.getSeconds()+" sec";
        document.getElementById('heure').innerHTML = time;
    }
    setInterval(function(){
                var currentdate = new Date();
                document.getElementById('heure').innerHTML = (currentdate.getHours()+" h "+currentdate.getMinutes()+" min "+currentdate.getSeconds()+" sec"); }, 1000);

    