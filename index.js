// Code your solutions in this file
function writeCards(names) {
    let thanks = [];
    for(let name of names) {
        thanks.push(`Thank you, ${name}, for the wonderful surprise gift!`)
    }
    return thanks
}

function countDown(n) {
    while(n >= 0) {
        console.log(n);
        n--;
    }
}
