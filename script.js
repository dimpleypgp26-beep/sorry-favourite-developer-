const lines=[

"> boot recovery.exe",

"",

"Loading deployment...",

"",

"Checking production...",

"",

"Production incident detected.",

"",

"Incident ID : US-001",

"",

"Authenticating stakeholder...",

"",

"Access Granted."

];

let terminal=document.getElementById("terminal");

let i=0;

function typeLine(){

if(i<lines.length){

terminal.innerHTML+=lines[i]+"\n";

i++;

setTimeout(typeLine,700);

}

else{

setTimeout(()=>{

document.getElementById("loadingScreen").style.display="none";

document.getElementById("intro").classList.remove("hidden");

},1200);

}

}

typeLine();