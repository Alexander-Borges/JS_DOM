
function codeToRunLater() {
    for(var i=0; i<1111; i++) {
        console.log("running: " + i);
    }
}

setTimeout(codeToRunLater, 2000);

console.log("END");

function message() {
    console.log("Delayed message")
}
console.log("Start");
setTimeout(message, 3000);
console.log("End");