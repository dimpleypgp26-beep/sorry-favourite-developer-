const terminal = document.getElementById("terminal");

const lines = [

"> boot recovery.exe",

"",

"Loading deployment...",

"",

"Checking production...",

"",

"Production incident detected.",

"",

"Authenticating stakeholder...",

"",

"Access Granted.",

"",

"",

"Hi, Senior Project Manager.",

"...my favourite Python developer.",

"",

"try:",

"    us = together_again",

"except Exception:",

'    print("I\'m sorry.")',

"",

"I know there isn't a rollback for words.",

"",

"But if I could rebuild one thing from scratch,",

"it'd be the moment I hurt you.",

"",

"You deserve better from me.",

"",

"I'm sorry.",

"",

'status = "recovering"',

"",

'status = "recovered"',

"# ...if you'll let me. ❤️"

];

let line = 0;

function typeLine(){

    if(line >= lines.length) return;

    terminal.innerHTML += lines[line] + "\n";

    line++;

    setTimeout(typeLine,900);

}

typeLine();