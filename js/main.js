// AFFICHAGE HEURE
window.onload=function() {
    horloge('div_heure');};
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

// AFFICHAGE DATE
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
function ActualiseHeure(){
    var time = currentdate.getHours()+" h "+currentdate.getMinutes()+" min "+currentdate.getSeconds()+" sec";
    document.getElementById('heure').innerHTML = time;
}
setInterval(function(){
    var currentdate = new Date();
        document.getElementById('heure').innerHTML = (currentdate.getHours()+" h "+currentdate.getMinutes()+" min "+currentdate.getSeconds()+" sec"); }, 1000);

    

// LOGIN USER
function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="samuel.p"&& password=="210904"){
        document.location.href="admin.html";
        user = 'Samuel';
        return false;
    }
    if(username=="adrien.r"&& password=="230704"){
        document.location.href="admin.html";
        user = 'Adrien';
        return false;
    }
    if(username=="julien.g"&& password=="170104"){
        document.location.href="admin.html";
        user = 'Julien';
        return false;
    }
    else{
        //alert("Le nom d'utilisateur ou le mots de passe est incorect. \nMots de passe oublier ? Contacter l'etablissement.");
        if(username==0&&password==0){
            var div = document.getElementById('incorrect');
            div.innerHTML = 'Veuillez saisir les champs';
            return false
        }
        if(username==0){
            var div = document.getElementById('incorrect');
            div.innerHTML = 'Veuillez saisir le nom utilisateur';
            return false
        }
        if(password==0){
            var div = document.getElementById('incorrect');
            div.innerHTML = 'Veuillez saisir le mots de passe';
            return false
        }
        else{
            var div = document.getElementById('incorrect');
            div.innerHTML = 'Nom utilisateur ou Mot de passe incorrect';
            return false
        }
    }
}