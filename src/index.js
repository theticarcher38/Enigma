const fs = require('fs');
var randString = Math.random().toString(36).replace(/[^a-zA-Z0-9]+/g, '').substr(0, 25);

console.log(randString);

function stringToHash(string) {

    var hash = 0;

    if (string.length == 0) return hash;

    for (i = 0; i < string.length; i++) {
        char = string.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return hash;
}

var hashStr = stringToHash(randString);

console.log(hashStr);

fs.appendFile("./database.txt", 
`plaintext: ${randString}
hashtext: ${hashStr}\n\n
`, function(err) {
    if (err) throw err;
});