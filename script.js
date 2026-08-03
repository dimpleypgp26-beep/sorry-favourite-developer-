function showScreen(id){

document.querySelectorAll("section").forEach(section=>{

section.style.display="none";

});

document.getElementById(id).style.display="flex";

}

showScreen("boot");

document.getElementById("continueBtn").onclick=function(){

showScreen("github");

}
document.getElementById("incidentBtn").onclick=function(){

showScreen("dashboard");

}