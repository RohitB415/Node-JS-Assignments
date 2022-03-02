const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function getNameFromCommandLine(name) {
    // Write you code here, name should be taken as args in process.argv
    return name
}

function getNameFromEnv() {
    // Write your code here
    return process.env.name
}

function getNameFromReadLine(name) {
    // Write your code here
    console.log(name);
}




module.exports = {
    getNameFromCommandLine,
    getNameFromEnv,
    getNameFromReadLine
}


process.env.name = "Rohit";

getNameFromCommandLine(process.argv[2]);

getNameFromEnv();




r1.question("Please enter your name", (ans) => {
    getNameFromReadLine(ans);
    r1.close;
})



